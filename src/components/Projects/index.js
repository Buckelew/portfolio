import "./index.css";
import Project from "./Project";
import spoofToolImg from "../../assets/projects/spoof-tool.png";
import cardleImg from "../../assets/projects/cardle.png";
import spotifyImg from "../../assets/projects/spotify.jpg";
import proxyImg from "../../assets/projects/proxy-gen.png";
import pacificImg from "../../assets/projects/pacificaio.png";
import { forwardRef } from "react";
import useToggle from "../../hooks/useToggle";
import { useEffect } from "react";

const Projects = forwardRef((props, ref) => {
  const [showProxyPopup, toggleShowProxyPopup] = useToggle(false);
  const [showSpoofPopup, toggleShowSpoofPopup] = useToggle(false);
  const [showPacificPopup, toggleShowPacificPopup] = useToggle(false);

  const popupsArr = [showProxyPopup, showSpoofPopup, showPacificPopup];

  // disable scrolling while popup is active
  useEffect(() => {
    if (popupsArr.find((p) => p)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, popupsArr);

  const projectList = [
    {
      name: "Pacific AIO",
      description:
        "A checkout automation tool for securing limited collectibles.",
      technologies: ["React", "Express", "Mongo DB", "Electron", "Node.JS"],
      live: "",
      image: pacificImg,
      popup: {
        show: showPacificPopup,
        toggle: toggleShowPacificPopup,
        video: "pacificaio",
      },
    },
    {
      name: "Cardle",
      description: "A wordle-like game, but for car enthusiasts!",
      technologies: ["React", "Express", "Mongo DB", "Chart JS", "APIs"],
      github: "https://github.com/Buckelew/cardle",
      live: "https://caden-cardle.herokuapp.com/",
      image: cardleImg,
    },
    {
      name: "Spotify App",
      description:
        "A way to view your favorite artists, and tracks via Spotify API.",
      technologies: ["React", "Material UI", "Spotify API", "Express"],
      github: "https://github.com/Buckelew/spotify-app",
      live: "https://caden-spotify.herokuapp.com/",
      image: spotifyImg,
    },
    {
      name: "Spoof Tool",
      description:
        "An app to spoof your iDevice's location to anywhere in the world.",
      technologies: [
        "React",
        "iFakeLocation",
        "Google Maps API",
        "Electron",
        "Mapbox",
      ],
      github: "https://github.com/Buckelew/spoof-tool",
      live: "",
      image: spoofToolImg,
      popup: {
        show: showSpoofPopup,
        toggle: toggleShowSpoofPopup,
        video: "spoof-tool",
      },
    },
    {
      name: "Proxy Gen App",
      description:
        "An app to create web proxies using cloud platforms like Google, AWS, and more.",
      technologies: ["React", "Electron", "Google Cloud API", "AWS SDK"],
      github: "",
      live: "",
      image: proxyImg,
      popup: {
        show: showProxyPopup,
        toggle: toggleShowProxyPopup,
        video: "proxy-gen",
      },
    },
  ];
  return (
    <div className="Projects" ref={ref}>
      <h1>Projects</h1>
      {projectList.map((project, i) => (
        <Project key={i} i={i} {...project} />
      ))}
    </div>
  );
});

export default Projects;
