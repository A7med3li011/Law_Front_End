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
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PushPinIcon from "@mui/icons-material/PushPin";
import CommentIcon from "@mui/icons-material/Comment";
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
            {project.name}
          </Typography>
          {/* <AvatarGroup
            max={3}
            sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
          >
            {project.members.map((member) => (
              <Avatar key={member.id} src={member.avatar} />
            ))}
          </AvatarGroup> */}
        </Box>
        {/* icons */}
        {/* <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Tajawal",
                fontSize: { xs: "12px", sm: "14px" },
                color: "#818181",
              }}
            >
              {project.date}
            </Typography>
            <CalendarTodayIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, color: "#818181" }}
            />
          </Box>
          <IconButton size="small">
            <PushPinIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, color: "#818181" }}
            />
          </IconButton>
          <IconButton size="small">
            <CommentIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, color: "#818181" }}
            />
          </IconButton>
        </Box> */}

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
