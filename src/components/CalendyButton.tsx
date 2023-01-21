import { calendyLink } from "@/constants";
import { Button } from "@mui/material";
import React from "react";

const CalendyButton = () => {
  return (
    <Button href={calendyLink} target="_blank" variant="contained">
      Book Now
    </Button>
  );
};

export default CalendyButton;
