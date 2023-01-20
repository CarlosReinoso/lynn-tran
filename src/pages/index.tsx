import About from "@/components/About";
import Hero from "@/components/Hero";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Box sx={{ py: 5, px: 16 }}>
        <About />
      </Box>
    </div>
  );
}
