import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./Header.css";

function Header() {
  return (
    <nav className="navigation">
      <img src={logo} className="logo" alt="Logo Kasa" />
      <div className="navigationItems">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/APropos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
