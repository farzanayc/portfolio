import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import site from "../data/site";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // "Projects" scrolls to the grid on the home page. If we're on another
  // page, navigate home first, then scroll once the page has rendered.
  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#projects");
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner page">
        <Link to="/" className="navbar-logo">
          {site.name}
        </Link>
        <nav>
          <ul className="navbar-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/#projects" onClick={handleProjectsClick}>
                Projects
              </a>
            </li>
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to="/resume" className="navbar-cta">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
