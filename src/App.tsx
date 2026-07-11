import { useState } from "react";
import NavBar from "./View/Navbar/NavBar";
import Home from "./View/Home";
import About from "./View/AboutMe/About";
import Awards from "./View/Awards/Awards";
import Footer from "./View/Footer";
import Contact from "./View/Contact";
import Loading from "./View/Loading/Loading";
// import Experience from "./View/Experience";
import ScrollToSectionOnLoadWrapper from "./View/ScrollTOSectionWrapper/ScrollToSectionOnLoadWrapper";

function App() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="main-container">
			{loading ? (
				<>
					<Loading setLoading={setLoading} />
				</>
			) : (
				<ScrollToSectionOnLoadWrapper>
					<NavBar />
					<Home />
					<About />
					{/* <Experience /> */}
					<Awards />
					<Contact />
					<Footer />
				</ScrollToSectionOnLoadWrapper>
			)}
		</div>
	);
}

export default App;
