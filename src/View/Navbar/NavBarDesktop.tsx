import ResumeLink from "./ResumeLink";
import { NAV_LINKS_MAP } from "../../Utils/constant";

const NavBarDesktop = () => {
  return (
    <div className="nav__list nav-desktop">
      <ul className="nav__list-ul">
        {NAV_LINKS_MAP.map((data, index) => (
          <li className="nav__list-li" key={index} tabIndex={index}>
            <a href={data.link}>{data.name}</a>
          </li>
        ))}
      </ul>
      <ResumeLink className="nav__resume" />
    </div>
  );
};

export default NavBarDesktop;
