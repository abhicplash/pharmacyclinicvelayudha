import React from "react";
import "./HServiceCard.css";
import logo from "../../Assets/Images/logo/shadowGreen.png";

function HServiceCard({ service, subdesc, serviceIcon }) {
  return (
    <div className="homeservicecard">
      <span className="servicecardname">{service}</span>
      <img src={serviceIcon} alt={service} className="ServiceImg" />
      <div className="HS-cardwrapper">
        <span className="servicesubdesc ">{subdesc}</span>
        {/* <span className="servicecardpara">
          Velayudha Pharmacy & <br /> Clinic
        </span> */}
      </div>
    </div>
  );
}

export default HServiceCard;
