import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import bioPhoto from "../../public/img/about/biopic.jpg";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "bbm1b0xb",
  dataset: "production",
  // apiVersion: "2023-02-10",
  useCdn: true,
});
const About = () => {
  useEffect(() => {
    (async () => {
      // const about = await client.fetch(`*[_type == "about"]`);
      // console.log("🚀 ~ file: About.tsx:18 ~ about", about);
      const test = fetch(
        "https://63e68c3ec8839ccc285ab552.mockapi.io/mock"
      ).then((res) => console.log(res.json()))
      console.log("🚀 ~ file: About.tsx:21 ~ test", test);
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
        <div>
          Lynn Tran Energy and body worker. Innerdance facilitator Space holder
          Although there's nothing to technically "fix" or "heal" in this now
          moment. Healing will go on and take place anyway. Naturally occuring
          alongside "the pause" as we journey on. Moment to moment. Particularly
          during the depths of intentional anchoring and courageous feeling.
          This is because "the pause" is a portal for alchemical transformation.
          A space we touch where magic pours through. and where the
          recalibration of our every cell takes place. That is why there's
          nothing to fix. And only everything to feel. It's all in the pause.
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
