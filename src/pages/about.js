import Cursor from "@/components/cursor";
import Direction from "@/components/direction";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const About = () => {
  return (
    <div>
      <Cursor />
      <Header />
      <Direction odd />
      <Direction even /> 
      <Direction odd />
      <Footer />
    </div>
  );
};

export default About;
