import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import PasswordGate from "../components/PasswordGate";
import "./CaseStudy.css";
import MediaBlock from "../components/MediaBlock";
import FormattedText from "../components/FormattedText";
import VideoCarousel from "../components/VideoCarousel";

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
                            <p><FormattedText text={study.overview} /></p>
                            {study.media?.overview && <MediaBlock {...study.media.overview} />}
                        </section>
                        <section>
                            <h2>Problem</h2>
                            <p><FormattedText text={study.problem} /></p>
                        </section>
                        <section>
                            <h2>Research & Key Insights</h2>
                            <p>{study.researchInsights.intro}</p>
                            {study.researchInsights.bullets.length > 0 && (
                                <ul className="case-study-list">
                                    {study.researchInsights.bullets.map((item, i) => (
                                        <li key={i}><FormattedText text={item} /></li>
                                    ))}
                                </ul>
                            )}
                            {study.researchInsights.findingsIntro && (
                                <>
                                    <p className="case-study-subheading">{study.researchInsights.findingsIntro}</p>
                                    <ul className="case-study-list">
                                        {study.researchInsights.findingsBullets.map((item, i) => (
                                            <li key={i}><FormattedText text={item} /></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </section>
                        <section>
                            <h2>Design Process</h2>
                            <p><FormattedText text={study.designProcess} /></p>
                            {study.media?.designProcessPersonas && (
                                <div className="media-row">
                                    {study.media.designProcessPersonas.map((item, i) => (
                                        <MediaBlock key={i} {...item} className="mfit-persona-media" />
                                    ))}
                                </div>
                            )}
                            {study.media?.designProcessSitemap && (
                                <MediaBlock {...study.media.designProcessSitemap} className="mfit-sitemap-media" />
                            )}
                            {study.media?.designProcess && (
                                Array.isArray(study.media.designProcess) ? (
                                    <div className="media-row">
                                        {study.media.designProcess.map((item, i) => (
                                            <MediaBlock key={i} {...item} />
                                        ))}
                                    </div>
                                ) : (
                                    <MediaBlock {...study.media.designProcess} />
                                )
                            )}
                            {study.media?.styleGuide && (
                                <MediaBlock
                                    {...study.media.styleGuide}
                                    className={study.slug === "general-motors" ? "gm-style-guide-media" : ""}
                                />
                            )}
                            {study.media?.prototypeVideos && (
                                <div className="prototype-carousel">
                                    {study.media.prototypeVideos.map((item, i) => (
                                        <MediaBlock key={i} {...item} clickToPlay />
                                    ))}
                                </div>
                            )}
                        </section>
                        <section>
                            <h2>Design Solution</h2>
                            <p><FormattedText text={study.designSolution} /></p>
                            {study.media?.designSolutionIntro && (
                                <div className="media-row">
                                    {study.media.designSolutionIntro.map((item, i) => (
                                        <MediaBlock key={i} {...item} />
                                    ))}
                                </div>
                            )}
                            {study.media?.designSolution && (
                                <MediaBlock
                                    {...study.media.designSolution}
                                    className={study.slug === "general-motors" ? "gm-use-case-media" : ""}
                                />
                            )}
                            {study.media?.designSolutionVideos && (
                                <VideoCarousel items={study.media.designSolutionVideos} />
                            )}
                        </section>
                        <section>
                            <h2>Key Design Decisions</h2>
                            {typeof study.keyDecisions === "string" ? (
                                <p>{study.keyDecisions}</p>
                            ) : (
                                <>
                                    <p>{study.keyDecisions.intro}</p>
                                    {study.keyDecisions.bullets.length > 0 && (
                                        <ul className="case-study-list">
                                            {study.keyDecisions.bullets.map((item, i) => (
                                                <li key={i}>
                                                    <FormattedText text={item.text} />
                                                    {item.media && (
                                                        Array.isArray(item.media) ? (
                                                            <div className="media-row">
                                                                {item.media.map((m, j) => (
                                                                    <MediaBlock
                                                                        key={j}
                                                                        {...m}
                                                                        className={study.slug === "general-motors" || study.slug === "MFit" ? "key-decision-media" : ""}
                                                                    />
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <MediaBlock
                                                                {...item.media}
                                                                className={study.slug === "general-motors" || study.slug === "MFit" ? "key-decision-media" : ""}
                                                            />
                                                        )
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )}
                        </section>
                        <section>
                            <h2>Outcome</h2>
                            <p>{study.outcome}</p>
                            {study.media?.outcome && (
                                study.slug === "Braid" ? (
                                    <div
                                        className="braid-flow-scroll"
                                        tabIndex={0}
                                        role="region"
                                        aria-label="Knots feature flow diagram"
                                    >
                                        <MediaBlock {...study.media.outcome} />
                                    </div>
                                ) : (
                                    <MediaBlock {...study.media.outcome} />
                                )
                            )}
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