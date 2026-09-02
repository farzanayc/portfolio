import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import PasswordGate from "../components/PasswordGate";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);
  const storageKey = `unlocked-${slug}`;

    const [unlocked, setUnlocked] = useState(
      () => sessionStorage.getItem(storageKey) === "true"
  );
  useEffect(() => {
      setUnlocked(sessionStorage.getItem(storageKey) === "true");
  }, [storageKey]);
  // Unknown slug — send back to the project grid instead of a dead page.
  if (!study) {
    return <Navigate to="/#projects" replace />;
  }

  const handleUnlock = () => {
      sessionStorage.setItem(storageKey, "true");
      setUnlocked(true);
  };
  const isLocked = study.protected && !unlocked;

  return (
    <article className="page case-study">
      <Link to="/#projects" className="case-study-back">
        ← All projects
      </Link>

      <span className="eyebrow">
        Case study · {study.year}
      </span>
      <h1>{study.title}</h1>
      <p className="case-study-subtitle">{study.subtitle}</p>

        {isLocked ? (
        <PasswordGate
            password={study.password}
            hint={study.passwordHint}
            onUnlock={handleUnlock}
        />
        ) : (
        <>


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
                    <h2>Overview</h2>
                    <p>{study.overview}</p>
                </section>
                <section>
                    <h2>Problem</h2>
                    <p>{study.problem}</p>
                </section>
                <section>
                    <h2>2. Research & Key Insights</h2>
                    <p>{study.researchInsights.intro}</p>
                    {study.researchInsights.bullets.length > 0 && (
                        <ul className="case-study-list">
                            {study.researchInsights.bullets.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                </section>
                <section>
                    <h2>Design Process</h2>
                    <p>{study.designProcess}</p>
                </section>
                <section>
                    <h2>Design Solution</h2>
                    <p>{study.designSolution}</p>
                </section>
                <section>
                    <h2>Key Design Decisions</h2>
                    <p>{study.keyDecisions}</p>
                </section>
                <section>
                    <h2>Outcome</h2>
                    <p>{study.outcome}</p>
                </section>
                <section>
                    <h2>Next Steps</h2>
                    <p>{study.nextSteps}</p>
                </section>
            </div>
        </>
      )}
    </article>
  );
}
