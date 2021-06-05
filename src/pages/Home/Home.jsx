import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Hero from "./Hero/Hero";
import Slider from "./Sliders/Slider";

const Home = () => {
  const { auth } = useSelector((state) => state.firebase);

  useEffect(() => {
    document.title = "Moviehub - Home";
  }, []);

  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="app">
      <Hero />
      <Slider
        types={["popular", "airing_today", "on_the_air"]}
        defaultType="popular"
        title={"What's Popular"}
      />
      {/* <Trendings /> */}
    </div>
  );
};

export default Home;
