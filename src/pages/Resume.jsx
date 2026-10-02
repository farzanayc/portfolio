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
            "Designed and led research for CareConnect, a centralized platform helping caregivers find and evaluate Adult Day Services across Southeastern Michigan. Secured a $30K grant to move the project from prototype to a live website.",
    },
    {
        year: "2026",
        role: "Lead Product Researcher and Designer",
        org: "General Motors",
        description:
            "Designed an automotive dashboard feature for the 2026 GMC Sierra 1500 Denali Ultimate utilizing 3-D printed designs, creating an immersive experience for the GMC Design Team ",
    },
    {
        year: "2025",
        role: "UX Researcher and Consultant",
        org: "Reveal Global Consulting",
        description:
            "Led a team of designers in a consulting project with Reveal Global Consulting, using mixed-methods research to optimize a synthetic data generation product and present design recommendations to stakeholders.",
    },
    {
        year: "2024",
        role: "UX Designer",
        org: "Michigan Ross Business Tech Innovation Jam",
        description:
            "Collaborated with 3 business students and 1 designer to design Eatifi, a personalized nutrition app for people managing diabetes and pre-diabetes. Presented our product to a panel of judges and earned a LinkedIn badge recognizing our participation.",
    },
  {
    year: "2024",
    role: "UX Researcher and Designer",
    org: "Michigan Open UX Associate Program",
    description:
      "Completed a UX research and design associate program with the University of Michigan Information and Technology Services, strengthening foundational skills in user research methods, such as card sorting, interaction design, and prototyping ahead of graduate school.",
  },
  {
    year: "2023",
    role: "UX Researcher and Designer",
    org: "Michigan Open UX Fellowship",
    description:
      "Completed a UX research and design fellowship where I co-led a project designing an app to help students reduce food waste by tracking grocery expiration dates, suggesting allergen-aware recipes, and facilitating food donations to low-income and unhoused communities.",
  },
    {
        year: "2022-Present",
        role: "Medical Assistant",
        org: "University of Michigan Rogel Cancer Center",
        description:
            "Worked hands-on with medical devices and MiChart, identifying recurring usability issues through daily interactions with patients and clinical workflows. These experiences showed me how fragmented systems and device failures can directly impact the safety, efficiency, and quality of patient care.",
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
