import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../assets/banner_image_about.png";
import Collapse from "../../components/Collapse/Collapse";
import "./About.css";

export default function About() {
  return (
    <>
      <div>
        <Banner img={BannerImage} />
        <div className="CollapseBox">
          <Collapse
            title="Fiabilité"
            subtitle="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            title="Respect"
            subtitle="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
          />
          <Collapse
            title="Service"
            subtitle="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
          />
          <Collapse
            title="Sécurité"
            subtitle="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementa correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous orrganisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </>
  );
}
