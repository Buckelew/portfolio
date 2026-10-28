import "./index.css";
import Project from "./Project";
import oharaImg from "../../assets/projects/ohara.png";
import pacificImg from "../../assets/projects/pacificaio.png";
import { forwardRef } from "react";
import useToggle from "../../hooks/useToggle";
import { useEffect } from "react";

const Projects = forwardRef((props, ref) => {
  const [showPacificPopup, toggleShowPacificPopup] = useToggle(false);

  const popupsArr = [showPacificPopup];

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
      name: "Ohara",
      description:
        "A tournament log for the One Piece Card Game, on the App Store and Google Play. Works offline, syncs to an optional account, and imports a whole tournament from one screenshot.",
      technologies: ["Flutter", "SQLite", "Supabase", "On-device OCR"],
      live: "https://apps.apple.com/us/app/ohara-tcg-tournament-log/id6801665379",
      image: oharaImg,
    },
    {
      name: "Pacific AIO",
      description:
        "A desktop checkout automation app for limited-release collectibles, sold since 2021, with a licensing and Stripe billing API and an admin dashboard.",
      technologies: ["Electron", "React", "TypeScript", "Postgres", "Stripe"],
      live: "",
      image: pacificImg,
      popup: {
        show: showPacificPopup,
        toggle: toggleShowPacificPopup,
        video: "pacificaio",
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
