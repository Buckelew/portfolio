import { motion } from "framer-motion";

function Popup({ video }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        style={{ width: "60vw", zIndex: 100 }}
        src={video}
        controls
      ></video>
    </div>
  );
}

export default Popup;
