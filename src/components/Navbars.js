import "../App.css";

//import from "./components/";

function Navbars({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar fixed-top">
      <div class="container-fluid">
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#experiences"
                  onClick={() => handlePageChange("Experiences")}
                  className={
                    currentPage === "Experiences"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Experiences
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#projects"
                  onClick={() => handlePageChange("Projects")}
                  className={
                    currentPage === "Projects" ? "nav-link active" : "nav-link"
                  }
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#goals"
                  onClick={() => handlePageChange("Goals")}
                  className={
                    currentPage === "Goals" ? "nav-link active" : "nav-link"
                  }
                >
                  Goals
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
