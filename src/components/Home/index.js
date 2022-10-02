import "./index.css";
import ArrowDown from "../../assets/arrow_down";
import { forwardRef } from "react";

const Home = forwardRef(({ aboutRef }, ref) => {
  const scroll = () => {
    aboutRef.current.scrollIntoView();
  };

  return (
    <div className="Home" ref={ref}>
      <h1>Hi! I'm Caden.</h1>
      <h1>I'm a full stack web developer.</h1>
      <button onClick={scroll}>
        Check out my work! <ArrowDown />
      </button>
    </div>
  );
});

export default Home;
