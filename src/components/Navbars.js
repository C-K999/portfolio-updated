import React from "react";
import "../App.css";

function Navbars() {
  // function Navbars({ currentPage, handlePageChange }) {
  return (
    <nav class="d-flex flex-column flex-shrink-0 p-3">
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <a href="#about" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            About Me
          </a>
        </li>
        <li>
          <a href="#experiences" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Experiences
          </a>
        </li>
        <li>
          <a href="#projects" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Projects
          </a>
        </li>
        <li>
          <a href="#goals" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Goals
          </a>
        </li>
        <li>
          <a href="#contact" class="nav-link link-dark">
            <svg class="bi me-2" width="16" height="16"></svg>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbars;
