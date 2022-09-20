import "./App.css";
import { useRef, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  console.log(aboutRef);

  return (
    <ErrorBoundary>
      <div className="App">
        <Header {...{ homeRef, aboutRef, projectsRef, contactRef }} />
        <div className="body">
          <Home ref={homeRef} aboutRef={aboutRef} />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
