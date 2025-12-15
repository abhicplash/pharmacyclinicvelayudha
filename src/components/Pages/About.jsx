import React from "react";
import Layout from "../Layout/Layout";
import Aboutmain from "../Layout/Aboutmain";
import AboutHeritage from "../Layout/AboutHeritage";
// import AboutJoin from "../Layout/AboutJoin";
import Aboutmember from "../Layout/Aboutmember";
import PageTop from "../Layout/PageTop";

const About = () => {
  return (
    <Layout>
      <div className="about-main-wrapper">
        <PageTop PageName={"About Us"} />
        <Aboutmain />
        <AboutHeritage />
        <Aboutmember />
        {/* <AboutJoin/> */}
      </div>
    </Layout>
  );
};

export default About;
