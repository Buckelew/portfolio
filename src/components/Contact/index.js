import "./index.css";
import { useState, forwardRef } from "react";
import ContactModal from "./ContactModal";

const Contact = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="Contact" ref={ref}>
      <h1>Get in touch</h1>
      <button onClick={toggleModal}>Contact me</button>

      {showModal ? <ContactModal toggle={() => setShowModal(false)} /> : ""}
    </div>
  );
});

export default Contact;
