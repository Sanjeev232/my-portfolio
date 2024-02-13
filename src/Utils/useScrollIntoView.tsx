import { useEffect } from "react";

const useScrollToSectionOnLoad = () => {
  useEffect(() => {
    const handleScrollToSection = () => {
      const { hash } = window.location;
      const currentHash = hash.substring(1);

      if (currentHash) {
        const targetSection = document.getElementById(currentHash);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    handleScrollToSection();

    window.addEventListener("hashchange", handleScrollToSection);

    return () => {
      window.removeEventListener("hashchange", handleScrollToSection);
    };
  }, []);
};

export default useScrollToSectionOnLoad;
