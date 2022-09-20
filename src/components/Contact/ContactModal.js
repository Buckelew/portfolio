import { send } from "emailjs-com";
import { useState } from "react";

function ContactModal({ toggle }) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Caden Buckelew",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_tjmtoos", "template_5tpiloy", toSend, "6SnP5t34mc8yOicxT")
      .then((response) => {
        alert("Email sent");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="ContactModal">
      <div className="ContactModal-content">
        <span onClick={toggle} className="close">
          X
        </span>
        <h2>Contact Form</h2>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="text"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
