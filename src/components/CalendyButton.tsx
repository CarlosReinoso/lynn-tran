import { calendyLink } from "@/constants";
import { Button } from "@mui/material";
import React from "react";

const CalendyButton = ({ sx }) => {
  return (
    <Button href={calendyLink} target="_blank" variant="outlined" sx={sx}>
      Book Your Session Here
    </Button>
  );
};

export default CalendyButton;
