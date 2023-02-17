import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bioPhoto from "../../public/img/about/biopic.jpg";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { projectId } from "@/constants";

const client = createClient({
  projectId,
  dataset: "production",
  useCdn: true,
});

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  console.log("🚀 ~ file: About.tsx:18 ~ SampleImageComponent ~ value", value)
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder({ projectId, dataset: "production" })
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const About = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    (async () => {
      const test = await client.fetch(`*[_type == "homepage"]`);
      console.log("🚀 ~ file: About.tsx:19 ~ test", test);
      console.log("🚀 ~ file: About.tsx:19 ~ test", test[0]?.myRichTextExample);
      setText(test);
    })();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: { xs: "flex", md: "block" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={bioPhoto} alt="about" width={300} height={400} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <PortableText
          value={text[0]?.myRichTextExample}
          components={components}
        />
      </Grid>
    </Grid>
  );
};

export default About;
