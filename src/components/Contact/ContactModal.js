function ContactModal({ toggle }) {
  return (
    <div className="ContactModal">
      <div className="ContactModal-content">
        <span onClick={toggle} className="close">
          X
        </span>
        <h2>Contact Form</h2>
        <form
          action="mailto:buckelew.02@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input placeholder="Name" type="text" name="name" />
          <input placeholder="Email" type="text" name="mail" />
          <textarea placeholder="Message" name="comment" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
