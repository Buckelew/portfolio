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
            Hi! I'm Caden, a full stack developer at Emberex. I've built a
            learning platform used by 3M+ students and an AI-assisted therapy
            app, mostly in TypeScript, React, Node, Python, and Postgres.
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
