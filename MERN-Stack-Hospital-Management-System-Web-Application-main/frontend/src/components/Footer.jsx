import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">

          {/* LOGO & ABOUT */}

          <div className="footer-section">
            <img
              src="/logo.png"
              alt="logo"
              className="footer-logo"
            />

            <p>
              Smart Hospital Management System designed to
              simplify appointments, patient records, and
              healthcare services with modern technology.
            </p>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-section">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/appointment">
                  Appointment
                </Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/signin">Login</Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}

          <div className="footer-section">
            <h3>Services</h3>

            <ul>
              <li>Online Appointment</li>
              <li>Patient Management</li>
              <li>Doctor Consultation</li>
              <li>Emergency Support</li>
            </ul>
          </div>

          {/* CONTACT */}

          <div className="footer-section">
            <h3>Contact Us</h3>

            <div className="footer-contact">
              <FaPhone />
              <span>+91 99999 99999</span>
            </div>

            <div className="footer-contact">
              <MdEmail />
              <span>support@hospital.com</span>
            </div>

            <div className="footer-contact">
              <FaLocationArrow />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Hospital Management System.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;