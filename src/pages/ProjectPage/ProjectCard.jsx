import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  AvatarGroup,
  Avatar,
  IconButton,
  Box,
  LinearProgress,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import defualtImage from "../../../public/default-png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProjectCard({ project }) {
  return (
    <Card sx={{ height: "95%", width: "80%" }}>
      <CardMedia
        component="img"
        height="150"
        image={project?.image?.secure_url || defualtImage}
        alt={project.name}
        sx={{
          objectFit: "cover",
          borderRadius: "8px",
          width: "100%",
          height: "180px",
        }}
      />

      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            direction: "rtl",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Tajawal",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 700,
              textAlign: "left",
            }}
          >
            {project.branchName}
          </Typography>

        </Box>

        <Box sx={{ mb: 2, mt: 2 }}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 1 }}
          >
            <Typography
              sx={{
                fontFamily: "Tajawal",
                fontSize: { xs: "12px", sm: "14px" },
                color: "#052F72",
                fontWeight: "bold",
              }}
            >
              {project.mastercompany.companyName}
            </Typography>
            <BusinessIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, color: "#052F72" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 1 }}
          >
            <Typography
              sx={{
                fontFamily: "Tajawal",
                fontSize: { xs: "12px", sm: "14px" },
                color: "#052F72",
                fontWeight: "bold",
              }}
            >
              {project.location}
            </Typography>
            <LocationOnIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, color: "#052F72" }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
