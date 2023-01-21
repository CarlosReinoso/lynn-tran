import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hero sx={{ mb: { md: 8 } }} />
      <Box sx={{ py: 5, px: { xs: 2, sm: 8, md: 16 } }}>
        <About />
        <Offers />
        <Footer />
      </Box>
    </>
  );
}
