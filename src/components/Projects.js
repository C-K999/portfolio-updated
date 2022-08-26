import React from "react";
import StreamWhere from "../images/demo_sw.gif";
import ShopPOS from "../images/demo_tdc.gif";
import first from "../images/module-1-demo.png";

function Projects() {
  return (
    <article id="projects" class="projects">
      <h2>Work</h2>

      <section class="showcase">
        <header>StreamWhere</header>
        <a href="https://mtwence.github.io/stream-where/">
          <img src={StreamWhere} alt="StreamWhere" />
        </a>
        <p>
          Webpage widget for searching movies and where they can be streamed.
        </p>
      </section>

      <section class="showcase">
        <header>The Debug Cafe</header>
        <a href="https://the-debug-cafe.herokuapp.com/">
          <img src={ShopPOS} alt="The Debug Cafe" />
        </a>
        <p>placeholder</p>
      </section>

      <section class="showcase">
        <header>Horiseon Homepage</header>
        <a href="https://c-k999.github.io/module-1-c/">
          <img src={first} alt="Horiseon" />
        </a>
        <p>Webpage source code refurbished.</p>
      </section>
    </article>
  );
}

export default Projects;
