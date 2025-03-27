import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import BannerImage from "../../assets/banner_image_home.png";

export default function Home() {
  return (
    <>
      <div>
        <Banner title="Chez vous, partout et ailleurs !" img={BannerImage} />
        <Cards />
      </div>
    </>
  );
}
