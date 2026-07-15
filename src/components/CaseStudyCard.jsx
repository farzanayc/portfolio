import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudyCard.css";

export default function CaseStudyCard({ study }) {
    return (
        <Link to={`/case-study/${study.slug}`} className="case-card">
            <div className="case-card-text">
                <h3>{study.title}</h3>
                <p>{study.subtitle}</p>

                <dl className="case-card-meta">
                    <div>
                        <dt>Timeline</dt>
                        <dd>{study.duration}</dd>
                    </div>
                    <div>
                        <dt>Role</dt>
                        <dd>{study.role}</dd>
                    </div>
                    <div>
                        <dt>Outcome</dt>
                        <dd>{study.outcomeShort}</dd>
                    </div>
                    <div>
                        <dt>Team</dt>
                        <dd>{study.team}</dd>
                    </div>
                </dl>

                <span className="case-card-link">View case study →</span>
            </div>

            <div className="case-card-media">
                {study.image ? (
                    <img src={study.image} alt={study.title} />
                ) : (
                    <span className="case-card-media-placeholder">Add image</span>
                )}
            </div>
        </Link>
    );
}