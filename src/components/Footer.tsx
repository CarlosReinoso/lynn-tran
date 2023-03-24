import { centerItem } from "@/styles/theme";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = ({ sx }) => {
  return (
    <>
      <Box sx={sx}>
        <Stack
          spacing={3}
          mr={3}
          direction="row"
          sx={{
            justifyContent: "center",
            "& > a": {
              width: "35px!important",
              height: "35px!important",
            },
            ...centerItem,
          }}
        >
          <SocialIcon
            url="https://www.youtube.com/@iamlynntran/"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/iamlynntran/?hl=en"
            target="_blank"
          />
          <SocialIcon url="mailto:iamlynntran@gmail.com" target="_blank" />
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
