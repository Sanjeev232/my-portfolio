// import { useState, useEffect } from 'react';
import NavBar from "./View/NavBar";
import Home from "./View/Home";
import About from "./View/About";
import Experience from "./View/Experience";
import Footer from "./View/Footer";
import Contact from "./View/Contact";

function App() {
  //TODO ADD ANIMATION IN THIS OR ANY COOL LOADING STATE
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeOut = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(loadingTimeOut);
  //   };
  // }, []);

  return (
    <div className="main-container">
      <NavBar />
        <Home />
        {/* <About /> */}
        {/* <Experience /> */}
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
