import { CONTACT_DETAILS } from "../Utills/constant";

const Contact = () => {
  return Object.keys(CONTACT_DETAILS).length ? (
    <div>CONTACT DETAILS</div>
  ) : (
    <div>Email: contactsanjeev.singh@yahoo.com</div>
  );
};

export default Contact;
