// import React, { useState } from "react";
import React from "react";

import "../index.css";
import "../App.css";
import studio from "../images/eyecatcher.png";

import Navbars from "./Navbars";
import Header from "./Header";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Goals from "./Goals.js";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PortfolioDisplay() {
  //   const [currentPage, setCurrentPage] = useState("About");

  // Renders proper components
  //   const renderSection = () => {
  //     if (currentPage === "About") {
  //       return <About />;
  //     }
  //     if (currentPage === "Experiences") {
  //       return <Experiences />;
  //     }
  //     if (currentPage === "Projects") {
  //       return <Projects />;
  //     }
  //     if (currentPage === "Goals") {
  //       return <Goals />;
  //     }
  //     return <Contact />;
  //   };

  //   const handleChange = (page) => setCurrentPage(page);

  //   return (
  //     <main>
  //       <Header />
  //       <figure class="text-center">
  //         <img src={studio} alt="studio" />
  //       </figure>
  //       {/* currentPage and handleChange */}
  //       <Navbars currentPage={currentPage} handleChange={handleChange} />
  //       {/* A function to render the page */}
  //       <section class="content">{renderSection()}</section>
  //       <Footer />
  //     </main>
  //   );
  return (
    <main>
      <Header />
      <figure class="text-center">
        <img src={studio} alt="studio" />
      </figure>
      <Navbars />
      <div class="row">
        <About />
        <Experiences />
        <Projects />
        <Goals />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
