import {
  FOOTER_LOGO_MAP,
  CONTACT_DETAILS,
  AUTHOR_NAME,
} from "../Utils/constant";

const Footer = () => {
  const getCurrentDate = () => new Date().getFullYear();

  return (
    <div className="footer-container">
      <ul className="footer-container__ul">
        {FOOTER_LOGO_MAP.map((data, index) => (
          <li key={index} tabIndex={index}>
            <a
              href={data.href}
              className="footer-icons"
              rel={data.rel}
              target={data.target}
            >
              {data.logo}
            </a>
          </li>
        ))}
      </ul>
      <a
        className="footer-Link"
        href={CONTACT_DETAILS.myPortFolioGitHub}
        target="_blank"
      >
        Design & Built by {AUTHOR_NAME}
      </a>
      <p>
        © {AUTHOR_NAME} {getCurrentDate()}
      </p>
    </div>
  );
};

export default Footer;
