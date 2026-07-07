import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  // Unknown slug — send back to the project grid instead of a dead page.
  if (!study) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <article className="page case-study">
      <Link to="/#projects" className="case-study-back">
        ← All projects
      </Link>

      <span className="eyebrow">
        Case study {study.index} · {study.year}
      </span>
      <h1>{study.title}</h1>
      <p className="case-study-subtitle">{study.subtitle}</p>

      <dl className="case-study-meta">
        <div>
          <dt>Role</dt>
          <dd>{study.role}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{study.tools}</dd>
        </div>
      </dl>

      <div className="case-study-body">
        <section>
          <h2>Summary</h2>
          <p>{study.summary}</p>
        </section>
        <section>
          <h2>The problem</h2>
          <p>{study.problem}</p>
        </section>
        <section>
          <h2>Approach</h2>
          <p>{study.approach}</p>
        </section>
        <section>
          <h2>Outcome</h2>
          <p>{study.outcome}</p>
        </section>
      </div>
    </article>
  );
}
