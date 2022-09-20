import { useState } from "react";
import "./index.css";

function Header({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => setHamburgerActive(!hamburgerActive);

  const scroll = (ref, diff) => {
    ref.current.scrollIntoView();
  };

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Caden Buckelew Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <header className="Header">
      <div className="Header-container">
        <div className="left">
          <span className="firstNamee">Caden</span>
          <br />
          <span className="lastName">Buckelew</span>
        </div>

        <nav className={`right ${hamburgerActive ? "active" : ""}`}>
          <span onClick={() => scroll(aboutRef)}>About</span>
          {/* <span onClick={() => scroll(aboutRef)}>Expereience</span> */}
          <span onClick={() => scroll(projectsRef)}>Projects</span>
          <span onClick={() => scroll(contactRef)}>Contact</span>
          <button onClick={downloadResume}>Resume</button>
        </nav>
        <div
          className={`hamburger ${hamburgerActive ? "active" : ""}`}
          onClick={toggleHamburger}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
