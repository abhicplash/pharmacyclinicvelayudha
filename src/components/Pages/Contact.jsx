import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import PageTop from "../Layout/PageTop";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <PageTop PageName={"Contact"} />
        <div className="reachus-wrapper">
          <h2>Reach us</h2>
          <div className="underLine"></div>
          <p>
            We are here to assist you. Whether you have questions about our
            services, need support, or want to provide feedback, feel free to
            reach out to us through any of the contact methods below. Your
            satisfaction is our priority, and we look forward to hearing from
            you!
          </p>
        </div>
        <div className="contactCard-wrapper">
          <div className="contactCard">
            <FaLocationDot className="Contact-Icon" />
            <span className="contact-title">Address</span>
            <span className="contact-Details">
              Ernakulam <br />
              Kerala
            </span>
          </div>
          <div className="contactCard">
            <FaPhone className="Contact-Icon" />
            <span className="contact-title">Call Us</span>
            <span className="contact-Details">
              +91-9745249762 <br />
              +91-9745249762
            </span>
          </div>
          <div className="contactCard">
            <FaEnvelope className="Contact-Icon" />
            <span className="contact-title">Mail Us</span>
            <span className="contact-Details-mail">
              enquiry@velayudhapharamacyandclinic.com <br />
            </span>
          </div>
        </div>
        <div className="contact-Icons-wrapper">
          <div className="contact-socio-icon">
            <FaInstagram />
          </div>
          <div className="contact-socio-icon">
            <FaFacebookSquare />
          </div>
          <div className="contact-socio-icon">
            <FaXTwitter />
          </div>
          <div className="contact-socio-icon">
            <FaYoutube />
          </div>
        </div>
        <div className="contactmap-wrapper">
          {/* <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272597.9931302381!2d76.09232947479191!3d10.061245258954907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d001cf4fd91%3A0x7c0c8eba56a3ad1c!2sVelayudha%20Pharmacy%20and%20Clinic!5e0!3m2!1sen!2sin!4v1765802117225!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            title="contact-map"
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3248822201062!2d76.28977634742326!3d9.989999473208623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d001cf4fd91%3A0x7c0c8eba56a3ad1c!2sVelayudha%20Pharmacy%20and%20Clinic!5e0!3m2!1sen!2sin!4v1765802403864!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
