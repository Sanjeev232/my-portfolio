import {CONTACT_DETAILS } from "../Utils/constant";

const Contact = () => {
    return (
        <section id="contact" className="sub-container contact-container">
            <h2 className="numbered-heading overline">What’s Next?</h2>
            <h2 className="title">Get In Touch</h2>
            <p>I’m actively looking for new opportunities. Feel free to connect with me!</p>
            <a className="email-link" href={`mailto:${CONTACT_DETAILS.email}`}>Say Hello Over Mail</a>
            <a className="tel-link" href={`tel:${CONTACT_DETAILS.mobileNumber}`}>Say Hello Over Call</a>
        </section>
    )
};

export default Contact;
