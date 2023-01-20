import { Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          opacity: 0.5,
        }}
      >
        <source src="https://storage.googleapis.com/sacko-backend.appspot.com/YouCut_20211107_183543938.mp4" />
      </video>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          right: "50%",
        }}
      >
        Experiential Medicine
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          right: "50%",
        }}
      >
        Healing through holding
      </Typography>
    </>
  );
};

export default Hero;
