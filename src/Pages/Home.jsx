import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import RecentlyListed from "../Components/RecentyListed/RecentlyListed";
import Awards from "../Components/Awards/Awards";
import Explore from "../Components/Explore/Explore";
import FeaturedAgents from "../Components/FeaturedAgents/FeaturedAgents";
import Price from "../Components/Price/Price";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <RecentlyListed></RecentlyListed>
      <Awards></Awards>
      <Explore></Explore>
      <FeaturedAgents></FeaturedAgents>
      <Price></Price>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
