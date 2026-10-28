import { useState } from "react";
import "./index.css";

function Header({ homeRef, aboutRef, projectsRef, contactRef }) {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => setHamburgerActive(!hamburgerActive);

  const scroll = (ref, diff) => {
    ref.current.scrollIntoView();
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
