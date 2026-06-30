import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Medi Appoint is a modern hospital management system
            designed to simplify appointment booking, patient
            management, doctor scheduling, and healthcare services.
            Our platform provides a secure, fast, and user-friendly
            digital healthcare experience for patients, doctors,
            and hospital administrators.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          
        </div>
      </div>
    </>
  );
};

export default Hero;
