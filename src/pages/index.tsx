import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { projectId } from "@/constants";
import { createClient } from "next-sanity";

export interface ISanity {
  heroTitle: string;
  heroSubitle: string;
  aboutMeImage: any;
  aboutMeDescription: [];
  offer1?: {
    caption?: string;
  };
  offer2?: {
    caption?: string;
  };
  offer3?: {
    caption?: string;
  };
  offer4?: {
    caption?: string;
  };
}

const client = createClient({
  projectId,
  dataset: "production",
  useCdn: true,
});

export default function Home() {
  const [sanity, setSanity] = useState<ISanity>();
  useEffect(() => {
    (async () => {
      const res: ISanity = await client.fetch(`*[_type == "homepage"][0]`);
      setSanity(res);
    })();
  }, []);
  return (
    <>
      <Hero sanity={sanity} />
      <Stack
        sx={{
          px: { xs: 2, sm: 8, md: 6, lg: 16 },
          mt: { xs: 8, sm: 8, md: 20 },
          mb: { xs: 8, sm: 8, md: 10 },
        }}
      >
        <About sanity={sanity} />
        <Offers sanity={sanity} sx={{ my: { xs: 0, lg: 4 } }} />
        <Footer sx={{ mt: 4, mb: 4 }} />
      </Stack>
    </>
  );
}
