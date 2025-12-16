// import React from "react";
// import Layout from "../Layout/Layout";
// import HomeBanner from "../Layout/HomeBanner";

// const Home = () => {
//   return (
//     <Layout>
//       <>
//         <HomeBanner />
//         <HomeService />
//         <HomeCount />
//       </>
//     </Layout>
//   );
// };

// export default Home;

import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";
import HomeService from "../Layout/HomeService";
import HomeCount from "../Layout/HomeCount";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="Home-container">
        <div className="text-wrapper">
          <span className="heading">Velayudha Pharmacy & Clinic</span>
          <span className="subtext">Embracing Holistic Healing Since 1948</span>
          <span className="desctitle">
            For over 70 years, Velayudha Pharmacy & Clinic has been a trusted
            name in Ayurveda, offering authentic treatments rooted in tradition
            to heal the cause, not just the symptoms.
          </span>
          <Link to={"/about"}>
            <button className="homebtn">Explore our care</button>
          </Link>
        </div>
      </div>
      <HomeService />
      <HomeCount />
    </Layout>
  );
};

export default Home;
