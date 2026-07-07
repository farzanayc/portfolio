import React from "react";
import site from "../data/site";
import "./About.css";

export default function About() {
  return (
    <section className="page about">
      <span className="eyebrow">About</span>
      <h1>Hi, I'm {site.name}.</h1>
      <p>
        I'm a {site.role.toLowerCase()} who spends most of my time in the gap between what a
        team thinks users want and what they actually do. My process leans heavily on
        research — not because it's trendy, but because it's the fastest way to stop
        arguing about opinions in a design review.
      </p>
      <p>
        Before design, I studied cognitive psychology, which is probably why I still get more
        excited about a well-run usability test than a polished mockup. Outside of work I
        like restoring old furniture, which turns out to share a lot with product design:
        most of the work is invisible, and the finish only looks simple because of everything
        underneath it.
      </p>
      <p>
        I'm currently open to product design roles focused on complex, research-heavy
        problems. Feel free to reach out.
      </p>
    </section>
  );
}
