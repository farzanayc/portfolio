import React from "react";
import Timeline from "../components/Timeline";
import site from "../data/site";
import "./Resume.css";

const experience = [
  {
    year: "2024 — Present",
    role: "Lead Product Designer",
    org: "Northwind Travel",
    description:
      "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
  },
  {
    year: "2022 — 2024",
    role: "Product Designer",
    org: "Ledger Finance",
    description:
      "Designed the expense-approval and reporting tools used by finance teams at 200+ companies.",
  },
  {
    year: "2020 — 2022",
    role: "UX Designer",
    org: "Greenhouse Co.",
    description:
      "Led onboarding and lifecycle design for a DTC subscription product, from quiz flow to retention emails.",
  },
  {
    year: "2018 — 2020",
    role: "Junior Designer",
    org: "Studio Signal",
    description:
      "Supported interaction design and prototyping across client projects spanning fintech, health, and logistics.",
  },
];

export default function Resume() {
  return (
    <section className="page resume">
      <div className="resume-header">
        <div>
          <span className="eyebrow">Resume</span>
          <h1>Experience</h1>
        </div>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Open full resume ↗
        </a>
      </div>

      <Timeline items={experience} />
    </section>
  );
}
