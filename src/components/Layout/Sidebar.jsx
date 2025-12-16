import React, { useState } from "react";
import "./Sidebar.css";
// import ServiceDetails from "./ServiceDetails";
// import img1 from "../../Assets/Images/services/Arthritis.jpg";
import { serviceDetailsList } from "../../utils/services";
import MainHead from "../common/MainHead";

const Sidebar = () => {
  const [serviceName, setServiceName] = useState("Arthritis");

  const serviceHandle = (e) => {
    setServiceName(e.target.innerText);
  };
  return (
    <div className="servicemain">
      <div className="sidebar">
        <div className="services">
          {serviceDetailsList
            // .filter((item) => item.serviceName === serviceName)
            .map((list) => (
              <div className="servicewrapper">
                <img
                  src={list.serviceIcon}
                  alt={list.serviceName}
                  className="serviceImgSmall"
                />
                <div className="servicelist" onClick={serviceHandle}>
                  {list.serviceName}
                </div>
              </div>
            ))}
        </div>
      </div>
      {serviceDetailsList
        .filter((item) => item.serviceName === serviceName)
        .map((list) => (
          <div className="DisDetails">
            <div className="DisDetailsInfo">
              <MainHead Heading={list.serviceName} />
              {console.log(list)}
              <h3>{list.description}</h3>
            </div>
            <img className="DisDetailsImg" src={list.image} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
