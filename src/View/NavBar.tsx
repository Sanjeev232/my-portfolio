import { NavBarLogo } from "../assets/svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__svg-Logo">
        <NavBarLogo />
      </div>
      <div className="nav__list">
        <ul className="nav__list-ul">
          {NAV_LINKS_MAP.map((data, index) => (
            <li className="nav__list-li" key={index}>
              <Link to={data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>
        <button type="button" className="nav__resume">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

const NAV_LINKS_MAP = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
