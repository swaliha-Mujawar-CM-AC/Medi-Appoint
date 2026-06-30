import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Medi-Appoint | Smart Hospital Management System"
        }
        imageUrl={"/hero.png"}
      />

      <Biography imageUrl={"/whoweare.png"} />

      <Departments />

      <MessageForm />
    </>
  );
};

export default Home;