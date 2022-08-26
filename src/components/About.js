import React from "react";
import CK from "../images/CK.png";

function About() {
  return (
    <article id="about" class="about col">
      <h2>About Me</h2>
      <img src={CK} alt="CK" />
      <p>
        Hello. This is Clement Koo here. I'm from Oakland, California. I studied
        at Bishop O'Dowd High School, and graduated from the University of
        California Santa Cruz with a degree in Economics. However, I have a
        significant interest in all sorts of digital entertainment whether they
        be video streaming, gaming, or animation. Currently, I am studying full
        stacked web design through a UC Berkeley Bootcamp program.
      </p>
    </article>
  );
}

export default About;
