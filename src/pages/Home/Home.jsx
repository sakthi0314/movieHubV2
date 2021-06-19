import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Hero from "./Hero/Hero";
import WhatsPopular from "./WhatsPopular/WhatsPopular";

const Home = () => {
  const { auth } = useSelector((state) => state.firebase);

  useEffect(() => {
    document.title = "Moviehub - Home";
  }, []);

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Hero />
      <WhatsPopular />
    </>
  );
};

export default Home;
