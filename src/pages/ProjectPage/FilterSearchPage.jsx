import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import SearchFilter from "./SearchFilter";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getBranches } from "../../utilities/Apis";
import Loader from "../../components/Loader/Loader.jsx";

export default function FilterSearchPage() {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getBranches(token),
    enabled: !!token,
  });

  const handleProjectClick = (projectId) => {
    navigate(`project/${projectId}`);
  };
  const filteredProjects = searchTerm
    ? projects?.filter((project) =>
        project?.branchName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects;
  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching branches</p>;

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: 600, md: 900, lg: 1200 },
        margin: "0 auto",
        p: { xs: 2, sm: 3 },
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "Tajawal, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <SearchFilter />
      <div
        dir="rtl"
        className="flex items-center self-end gap-x-4 border-primary max-w-48 border-[1px] px-3 py-1 rounded-xl  text-black mb-2"
      >
        <input
          type="text"
          className="bg-transparent px-3  focus:outline-none"
          placeholder="اكتب اسم الفرع"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {filteredProjects?.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ alignContent: "flex-start" }}
          >
            <Box
              onClick={() => handleProjectClick(project._id)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.02)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <ProjectCard project={project} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
