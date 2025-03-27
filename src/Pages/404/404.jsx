import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
export default function NotFound() {
  return (
    <>
      <div className="notFoundTitle">404</div>
      <div>
        <p className="notFoundText">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
          <p className="notFoundBack">Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </>
  );
}
