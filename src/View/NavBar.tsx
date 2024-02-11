import { NavBarLogo } from "../assets/svg";
import { NAV_LINKS_MAP, CONTACT_DETAILS } from "../Utills/constant";

const NavBar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__svg-Logo" aria-label="portfolio logo" tabIndex={0}>
        <a href={"/"}>
          <NavBarLogo />
        </a>
      </div>
      <div className="nav__list">
        <ul className="nav__list-ul">
          {NAV_LINKS_MAP.map((data, index) => (
            <li className="nav__list-li" key={index} tabIndex={index}>
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
        </ul>
        <a className="nav__resume" href={CONTACT_DETAILS.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
