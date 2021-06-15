import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Hero from "./Hero/Hero";
import WhatsPopular from "./WhatsPopular/WhatsPopular";
import { motion } from "framer-motion";
import { pageVariant } from "../../animations/Animation";
import Trendings from "./Trendings/Trendings";

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
      {/* <Hero />
      <WhatsPopular
        types={["popular", "airing_today", "on_the_air"]}
        defaultType="popular"
        title={"What's Popular"}
      /> */}
      <Trendings
        types={["day", "week"]}
        defaultType="day"
        title={"Trendings"}
      />
    </motion.div>
  );
};

export default Home;
