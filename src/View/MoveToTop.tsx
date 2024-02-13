import React, { useState, useEffect } from "react";
import { BackToTopIcon } from "../assets/svg";

const MoveToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerScroll = 200;

    setIsVisible(scrollY > triggerScroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="move-to-top"
      onClick={scrollToTop}
      aria-label="Move to Top"
      style={{ display: isVisible ? "inline-block" : "none" }}
    >
      <BackToTopIcon />
    </div>
  );
};

export default MoveToTop;
