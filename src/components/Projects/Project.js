import githubImg from "../../assets/github.png";
import linkImg from "../../assets/link.png";
import Popup from "./Popup";
import { useState } from "react";
import { motion } from "framer-motion";

const isEven = (num) => {
  return num % 2 == 0 ? true : false;
};

function Project({
  name,
  description,
  technologies,
  github,
  live,
  image,
  i,
  popup,
}) {
  // update live var to component
  // if live, add link, if popup add popup toggle
  let imageElement, linkElement;
  if (live) {
    linkElement = (
      <a href={live} target="_blank">
        <img src={linkImg} alt="link" />
      </a>
    );
    imageElement = (
      <a href={live} target="_blank">
        <img src={image} alt={name} />
      </a>
    );
  } else if (popup) {
    linkElement = (
      <a onClick={popup.toggle}>
        <img src={linkImg} alt="link" />
        {popup.show ? <Popup video={popup.video} /> : ""}
      </a>
    );
    imageElement = (
      <a onClick={popup.toggle}>
        <img src={image} alt={name} />
        {popup.show ? <Popup video={popup.video} /> : ""}
      </a>
    );
  }

  return (
    <div className="Project">
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ x: isEven(i) ? -300 : 300 }}
        whileInView={{ x: 0 }}
        className="image"
      >
        {/* <div className="img" style={{ backgroundImage: `url(${image})` }}></div> */}
        {imageElement}
      </motion.div>

      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ x: isEven(i) ? 300 : -300 }}
        whileInView={{ x: 0 }}
        className="info"
      >
        <h2>{name}</h2>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="technologies">
          <p>{technologies.join(" ")}</p>
        </div>
        <div className="links">
          {github ? (
            <a href={github} target="_blank">
              <img src={githubImg} alt="github" />
            </a>
          ) : (
            ""
          )}
          {linkElement ? linkElement : ""}
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
