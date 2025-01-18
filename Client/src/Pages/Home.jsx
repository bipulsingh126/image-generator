import React from "react";
import Header from "../Components/Header";
import Step from "../Components/Step";
import Description from "../Components/Description";
import Testmoinals from "../Components/Testmoinals";
import GenerateButt from "../Components/GenerateButt";

const Home = () => {
  return <div>
    <Header/>
    <Step/>
    <Description/>
    <Testmoinals/>
    <GenerateButt/>
  </div>;
};

export default Home;
