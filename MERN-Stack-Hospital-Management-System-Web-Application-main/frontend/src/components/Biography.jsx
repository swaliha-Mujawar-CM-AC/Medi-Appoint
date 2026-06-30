import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">

        <div className="banner">
          <img src={imageUrl} alt="about" />
        </div>

        <div className="banner">
          <p className="sub-heading">
            About Medi Appoint
          </p>

          <h3>
            Smart & Trusted Hospital Management System
          </h3>

          <p>
            Medi Appoint is a modern healthcare platform created
            to simplify hospital management and improve patient
            care through smart digital solutions.
          </p>

          <p>
            Our system helps patients book appointments easily,
            manage medical records, and connect with doctors
            without long waiting times.
          </p>

          <p>
            Medi Appoint provides hospitals and healthcare staff
            with efficient tools for appointment scheduling,
            patient management, doctor availability, and secure
            healthcare services.
          </p>

          <p>
            We focus on delivering a fast, secure, and
            user-friendly experience for patients, doctors,
            and administrators.
          </p>

          <div className="bio-boxes">

            <div className="bio-card">
              <h4>24/7 Support</h4>
              <p>
                Reliable healthcare support anytime.
              </p>
            </div>

            <div className="bio-card">
              <h4>Easy Appointments</h4>
              <p>
                Quick and simple online booking system.
              </p>
            </div>

            <div className="bio-card">
              <h4>Secure Records</h4>
              <p>
                Safe and organized patient information.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Biography;