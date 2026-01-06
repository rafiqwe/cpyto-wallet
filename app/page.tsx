import React from "react";
import Hero from "./components/Hero/Hero";
import Expolore from "./components/explore/Explore";
import Security from "./components/Security/Security";

const Home = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <Expolore />
      <Security />
    </div>
  );
};

export default Home;
