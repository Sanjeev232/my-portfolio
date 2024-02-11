import NavBar from "./View/NavBar";
import Home from "./View/Home";
import About from "./View/About";
import Experience from "./View/Experience";
import Footer from "./View/Footer";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
