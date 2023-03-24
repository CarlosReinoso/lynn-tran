import { heroVideoUrl } from "@/constants";
import { ISanity } from "@/pages";
import { Box, Link, Stack, SxProps, Typography } from "@mui/material";
import React, { useEffect } from "react";

const HeroLink = ({ children, href }) => (
  <Link
    href={href}
    sx={{
      mr: 1,
      opacity: 0.99,
      textAlign: "right",
      color: "white",
      fontSize: { xs: "6px", sm: "11px" },
    }}
    underline="none"
    target="_blank"
  >
    {children}
  </Link>
);

const Hero = ({ sx, sanity }: { sx?: SxProps; sanity: ISanity }) => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          flexWrap: "wrap",
          pt: { xs: 1 },
        }}
      >
        <HeroLink href="https://www.instagram.com/questbeyondlabels/?hl=en">
          📷 Quest beyond labels
        </HeroLink>
        <HeroLink href="https://www.instagram.com/angryjalebi/?hl=en">
          🎥 Saima
        </HeroLink>
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: { xs: "20vh", sm: "40vh", md: "60vh", lg: "100vh" },
          opacity: 0.99,
          textShadow: "1px 1px 2px black",
        }}
      >
        <Box sx={{ ml: { xs: 2, sm: 4, md: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2.4rem", md: "4.5rem" },
            }}
          >
            {sanity?.heroTitle}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" },
            }}
          >
            {sanity?.heroSubitle}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
