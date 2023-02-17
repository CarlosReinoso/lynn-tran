import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bioPhoto from "../../public/img/about/biopic.jpg";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "0jfaimql",
  dataset: "production",
  useCdn: true,
});
const About = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    (async () => {
      const { name } = await client.fetch(`*[_type == "about"][0]{name}`);
      setText(name);
    })();
  });

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
        <div>{text}</div>
      </Grid>
    </Grid>
  );
};

export default About;
