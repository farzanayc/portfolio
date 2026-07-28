import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import CaseStudyCard from "../components/CaseStudyCard";
import "./Home.css";

export default function Home() {
  const location = useLocation();

  // Handles the "Projects" nav link when arriving from another page
  // with a #projects hash still in the URL.
  useEffect(() => {
    if (location.hash === "#projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section className="page hero">
        <span className="eyebrow">UX research & design · Front End Dev</span>
        <h1>
          I design accessible products that work for <br />the user.
        </h1>
        <p className="hero-sub">
          Four case studies below walk through the problems, the process, and what actually
          changed once each shipped.

        </p>
      </section>

      <section className="page case-grid" id="projects">
        {caseStudies.map((study) => (
          <CaseStudyCard study={study} key={study.slug} />
        ))}
      </section>
    </>
  );
}
