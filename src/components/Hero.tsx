import { heroVideoUrl } from "@/constants";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import React from "react";

const Hero = ({ sx }: { sx: SxProps }) => {
  return (
    <Box sx={sx}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "black",
          opacity: 0.5,
        }}
      >
        <source src={heroVideoUrl} />
      </video>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          opacity: 0.99,
          textShadow: "1px 1px 2px black",
        }}
      >
        <Typography variant="h1">Experiential Medicine</Typography>
        <Typography variant="h3">Healing through holding</Typography>
      </Stack>
      <Typography textAlign="right" sx={{ mr: 2, opacity: 0.99 }}>
        Nush
      </Typography>
      <Typography textAlign="right" sx={{ mr: 2, opacity: 0.99 }}>
        Siama
      </Typography>
    </Box>
  );
};

export default Hero;
