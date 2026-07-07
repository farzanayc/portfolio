import React from "react";
import site from "../data/site";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner page">
        <p className="footer-copy">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
