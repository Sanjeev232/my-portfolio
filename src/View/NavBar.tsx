import { useEffect, useState } from "react";

import { NavBarLogo } from "../assets/svg";
import { NAV_LINKS_MAP, CONTACT_DETAILS } from "../Utils/constant";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 0;
      setIsScrolled(scrolledDown);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav__bar ${isScrolled ? "sticky" : ""}`}>
      <div className="nav__svg-Logo" aria-label="portfolio logo" tabIndex={0}>
        <a href={"/my-portfolio"}>
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
        <a
          className="nav__resume"
          href={CONTACT_DETAILS.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
