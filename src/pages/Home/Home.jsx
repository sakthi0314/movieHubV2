import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Hero from "./Hero/Hero";
import Slider from "./Sliders/Slider";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations/Animation";

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
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      style={{ paddingTop: "7rem" }}
    >
      <Hero />
      <Slider
        types={["popular", "airing_today", "on_the_air"]}
        defaultType="popular"
        title={"What's Popular"}
      />
    </motion.div>
  );
};

export default Home;
