import React from "react";

const Hero = () => {
  return (
    <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
      <source src="https://storage.googleapis.com/sacko-backend.appspot.com/YouCut_20211107_183543938.mp4" />
    </video>
  );
};

export default Hero;
