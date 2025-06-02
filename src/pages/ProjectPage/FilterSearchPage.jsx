import React from "react";
import { Box, Grid } from "@mui/material";
import SearchFilter from "./SearchFilter";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getBranches } from "../../utilities/Apis";

export default function FilterSearchPage() {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

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
    navigate(/FilterSearchPage/project/${projectId});
  };

  if (isLoading) return <p>Loading...</p>;
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
      }}
    >
      <SearchFilter />
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {projects?.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Box
              onClick={() => handleProjectClick(project.id)}
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