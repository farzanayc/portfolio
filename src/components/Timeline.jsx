import React from "react";
import "./Timeline.css";

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline-item" key={`${item.role}-${item.year}`}>
          <span className="timeline-year eyebrow">{item.year}</span>
          <h3>{item.role}</h3>
          <p className="timeline-org">{item.org}</p>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
