import {
	COMPANY_WORKED,
	AUTHOR_NAME,
	CONTACT_DETAILS,
} from "../Utils/constant";
import { getLastWorkedCompany } from "../Utils/helpers";

interface Company {
	link: string;
	name: string;
}

const Home = () => {
	const currentWorkingCompany = getLastWorkedCompany(COMPANY_WORKED) as Company;
	const { name, link } = currentWorkingCompany;

	return (
		<section id="home" className="sub-container home-container">
			<h2 className="green-heading typewriter">Greetings, my name is</h2>
			<h1 className="big-heading h1">{AUTHOR_NAME}.</h1>
			<h3 className="big-heading h3">I build things for the web.</h3>
			<p className="paragraph-description">
				I’m a software engineer specializing in building exceptional digital experiences. Currently based at {" "} <a className="p-anchor" href={link} rel="noreferrer" target="_blank" tabIndex={-1}>{name}</a>{" "} in Delhi NCR, I focus on creating accessible, human-centered products. I'm also expanding into backend development with Node.js, Express, and MongoDB to grow as a fullstack developer and build scalable, end-to-end applications.
			</p>
			<a
				className="email-link email-link-header"
				href={CONTACT_DETAILS.gitHubOffice}
				target="_blank"
				rel="noreferrer"
			>
				Explore my contributions to Kommunicate!
			</a>
		</section>
	);
};

export default Home;
