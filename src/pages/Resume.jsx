import React from "react";
import Timeline from "../components/Timeline";
import site from "../data/site";
import "./Resume.css";

const experience = [
    {
        year: "2026",
        role: "Product Designer and Consultant",
        org: "University of Michigan School of Nursing",
        description:
            "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
    },
    {
        year: "2026",
        role: "Lead Product Researcher and Designer",
        org: "General Motors",
        description:
            "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
    },
    {
        year: "2025",
        role: "UX Researcher and Consultant",
        org: "Reveal Global Consulting",
        description:
            "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
    },
    {
        year: "2024",
        role: "UX Designer",
        org: "Michigan Ross Business Tech Innovation Jam",
        description:
            "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
    },
  {
    year: "2024",
    role: "UX Researcher and Designer",
    org: "Michigan Open UX Associate Program",
    description:
      "Own end-to-end design for the passenger app, leading a team of two designers across research, flows, and design systems.",
  },
  {
    year: "2023",
    role: "UX Researcher and Designer",
    org: "Michigan Open UX Fellowship",
    description:
      "Designed the expense-approval and reporting tools used by finance teams at 200+ companies.",
  },
    {
        year: "2022-Present",
        role: "Medical Assistant",
        org: "University of Michigan Rogel Cancer Center",
        description:
            "Designed the expense-approval and reporting tools used by finance teams at 200+ companies.",
    },
  {
    year: "2020 — 2021",
    role: "Tutor",
    org: "America Reads",
    description:
      "Designed and implemented lesson plans for 40+ elementary school students in the Ann Arbor and Detroit public school districts through hour-long sessions.",
  },
  {
    year: "2018 — 2019",
    role: "Research Assistant",
    org: "University of Michigan Institute for Social Research",
    description:
      "Supported research analyzing 800+ surveys to study how demographics and social identities influence voting issues.",
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
