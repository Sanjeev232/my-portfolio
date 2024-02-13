import { useRef } from "react";
import { CONTACT_DETAILS, GET_IN_TOUCH } from "../Utils/constant";

const Contact = () => {
  const jobLookingRef = useRef(true);

  return (
    <section id="contact" className="sub-container contact-container">
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p className="paragraph">
        {jobLookingRef.current ? GET_IN_TOUCH.looking : GET_IN_TOUCH.notLooking}
      </p>
      <div className="contact-cta-container">
        <a className="email-link" href={`mailto:${CONTACT_DETAILS.email}`}>
          Say Hello Over Mail
        </a>
        <a
          className="tel-link"
          target="_blank"
          href={`https://wa.me/${CONTACT_DETAILS.mobileNumber}`}
        >
          Say Hello Over WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
