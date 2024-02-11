import { CONTACT_DETAILS } from "../Utills/constant";

const Footer = () => {
  const getCurrentDate = () => new Date().getFullYear();

  return (
    <div className="footer-container">
        <ul>
            <li>one</li>
            <li>one</li>
            <li>one</li>
            <li>one</li>
        </ul>
      <a
        className="footer-Link"
        href={CONTACT_DETAILS.myPortFolioGitHub}
        target="_blank"
      >
        Design & Built by Sanjeev Singh
      </a>
    </div>
  );
};

export default Footer;
