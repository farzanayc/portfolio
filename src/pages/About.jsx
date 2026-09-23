import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="page about">
      <span className="eyebrow">About</span>
        <h1>Welcome to my portfolio!</h1>
        <img
            src={process.env.PUBLIC_URL + "/images/IMG_8080-preview.jpeg"}
            alt="Farzana Chowdhury"
            className="about-photo"
        />
        <p>
            Hello everyone, I'm Farzana Chowdhury and I am a full-stack designer
            who specializes in bridging the gap between accessible products and
            the ability for people to live dignified, and fulfilling lives. My
            design process leans heavily on research while maintaining an open
            mind to those users who may be forgotten in the process.
        </p>
        <p>
            Before design, I was a pre-Physician Assistant student, working as a
            medical assistant in Oncology Infusion. While working with patients,
            I saw patients voice complaints about a variety of tools required to
            help them with their chemotherapy treatments. These issues became so
            consistent that it revealed a large gap between the patients and the
            tools they were being required to use. I also noticed many
            overlooked accessibility issues within the building that I worked
            at. This is what motivated me to look deeper into UX Design, leading
            me to get my Masters in Information in UX Research and Design at the
            University of Michigan Ann Arbor.
        </p>
        <p>
            Outside of work, I love to keep active by lifting weights, running,
            and hiking. I also enjoy playing tennis and pickle ball (although the
            latter was picked up very recently). I love to read fictional
            stories and write poetry. I have written many stories and poems
            throughout my life which I would be open to sharing! Although it is
            very difficult to pick one book, a book that has changed my
            perception of reality is "Escape from Zobadak" by Brad Gallagher (I
            highly recommend reading it!).
        </p>
        <p>
            I am currently open to product research or design roles. I am also
            open to product management roles and front end design roles as I
            also have some background in HTML, CSS, Python, Javascript, etc.
            Please feel free to reach out for conversation or any questions! My
            email is farzanac@umich.edu.
        </p>

    </section>
  );
}
