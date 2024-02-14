import { useState, useEffect } from "react";
import NavBar from "./View/Navbar/NavBar";
import Home from "./View/Home";
import About from "./View/AboutMe/About";
import Awards from "./View/Awards/Awards";
// import Experience from "./View/Experience";
import Footer from "./View/Footer";
import Contact from "./View/Contact";
import Loading from "./View/Loading/Loading";
import ScrollToSectionOnLoadWrapper from "./View/ScrollTOSectionWrapper/ScrollToSectionOnLoadWrapper";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeOut);
    };
  }, []);

  return (
    <div className="main-container">
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <ScrollToSectionOnLoadWrapper>
          <NavBar />
          <Home />
          <About />
          <Awards />
          {/* <Experience /> */}
          <Contact />
          <Footer />
        </ScrollToSectionOnLoadWrapper>
      )}
    </div>
  );
}

export default App;
