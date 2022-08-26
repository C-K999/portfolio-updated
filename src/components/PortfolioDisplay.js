import React, { useState } from "react";
import "../App.css";
import Navbars from "./components/Navbars";
import Header from "./components/Header";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function PortfolioDisplay() {
  const [currentPage, setCurrentPage] = useState("About");

  // Renders proper components
  const renderSection = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Experiences") {
      return <Experiences />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Goals") {
      return <Goals />;
    }
    return <Contact />;
  };

  const handleChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* currentPage and handleChange */}
      <Navbars currentPage={currentPage} handleChange={handleChange} />
      {/* A function to render the page */}
      {renderSection()}
      <Footer />
    </div>
  );
}
