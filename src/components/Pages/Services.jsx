import React from "react";
import Layout from "../Layout/Layout";
import Sidebar from "../Layout/Sidebar";
import PageTop from "../Layout/PageTop";

const Services = () => {
  return (
    <Layout>
      <div className="service-wrapper">
        <PageTop PageName={"Services"}/>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Services;
