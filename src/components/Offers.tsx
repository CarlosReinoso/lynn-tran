import { calendyLink } from "@/constants";
import { ISanity } from "@/pages";
import { fontSizes, imageShadow } from "@/styles/theme";
import { Box, Grid, Link, SxProps, Typography } from "@mui/material";
import React from "react";
import CalendyButton from "./CalendyButton";
import SanityImage from "./SanityImage";

interface IOffer {
  caption?: string;
}
const Offer = ({ sanity }: { sanity: IOffer }) => (
  <>
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{
        display: { xs: "flex", md: "block" },
        flexDirection: { xs: "column" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={calendyLink} underline="none" target="_blank">
        <SanityImage
          sanity={sanity}
          sx={{
            boxShadow: imageShadow,
          }}
        />
        <Typography
          sx={{
            mt: 2,
            textAlign: "center",
            fontSize: fontSizes,
          }}
        >
          {sanity?.caption}
        </Typography>
      </Link>
    </Grid>
  </>
);

const Offers = ({ sanity, sx }: { sanity: ISanity; sx: SxProps }) => {
  return (
    <Box sx={sx}>
      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem", lg: "1.3rem" },
          textDecoration: "underline",
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Journey With Me
      </Typography>
      <Grid container spacing={2} sx={{ my: { xs: 0 } }}>
        <Offer sanity={sanity?.offer1} />
        <Offer sanity={sanity?.offer2} />
        <Offer sanity={sanity?.offer3} />
        <Offer sanity={sanity?.offer4} />
        <CalendyButton sx={{ margin: "auto", mt: 6 }} />
      </Grid>
    </Box>
  );
};

export default Offers;
