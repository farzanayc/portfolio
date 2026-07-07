import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudyCard.css";

export default function CaseStudyCard({ study }) {
  return (
    <Link
      to={`/case-study/${study.slug}`}
      className={`case-card${study.featured ? " case-card-featured" : ""}`}
    >
      <span className="case-card-index">{study.index}</span>
      <h3>{study.title}</h3>
      <p>{study.subtitle}</p>
      <span className="case-card-link">View case study →</span>
    </Link>
  );
}
