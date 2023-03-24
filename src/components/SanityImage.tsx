import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import React from "react";
import { projectId } from "@/constants";
import { Box, SxProps } from "@mui/material";

const Image = ({ value, isInline }) => {
  return (
    <img
      src={urlBuilder({ projectId, dataset: "production" })
        .image(value)
        .width(isInline ? 100 : 350)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        width: "100%",
      }}
    />
  );
};

const components = {
  types: {
    image: Image,
  },
};

const SanityImage = ({ sx, sanity }: { sx?: SxProps; sanity: any }) => {
  return (
    <Box sx={sx}>
      <PortableText value={sanity} components={components} />
    </Box>
  );
};

export default SanityImage;
