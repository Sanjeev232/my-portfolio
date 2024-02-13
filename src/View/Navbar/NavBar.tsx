import { useEffect, useState } from "react";
import "./navbar.style.css";
import { NavBarLogo } from "../../assets/svg";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const SHOW_HAMBURGER_AT = 525;

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < SHOW_HAMBURGER_AT) setIsSmallScreen(true);

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
      {isSmallScreen ? <NavBarMobile /> : <NavBarDesktop />}
    </nav>
  );
};

export default NavBar;
