import "./index.css";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import skills from "../../assets/skills";
import Skill from "./Skill";

const About = forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      <div className="left">
        <h1>About me</h1>
        <div className="text">
          <p>
            Hi! I'm Caden, a full stack developer with a passion for creating,
            learning, and problem solving. I enjoy making tools to make people's
            lives easier. Whether that's making a quick script to automate a
            repetitive task, or developing an entire app.
          </p>
          <br />
          {/* <p>
            My hobbies: Music (Hip-Hop), Festivals, Fitness, Nature, Cars,
            Sneakers, Technology, Gaming, Sports, Movies...
          </p> */}
        </div>
      </div>
      <div className="right">
        {Object.keys(skills).map((skill, i) => (
          <Skill key={i} name={skill.toUpperCase()} img={skills[skill]} />
        ))}
      </div>
    </div>
  );
});

export default About;
