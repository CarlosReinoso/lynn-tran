import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { PortableText } from "@portabletext/react";
import { ISanity } from "@/pages";
import SanityImage from "./SanityImage";
import { imageShadow, centerItem, fontSizes } from "@/styles/theme";

const About = ({ sanity }: { sanity: ISanity }) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
      <Box
        sx={{
          width: { xs: 1, md: 0.4, lg: 0.3 },
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-start" },
          alignItems: "center",
        }}
      >
        <SanityImage
          sx={{
            boxShadow: imageShadow,
            width: { xs: 0.6, sm: 0.7, md: 0.4, lg: 0.8 },
          }}
          sanity={sanity?.aboutMeImage}
        />
      </Box>
      <Box
        sx={{
          width: { xs: 1, lg: 0.7 },
          fontSize: fontSizes,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <PortableText value={sanity?.aboutMeDescription} />
      </Box>
    </Stack>
  );
};

export default About;
