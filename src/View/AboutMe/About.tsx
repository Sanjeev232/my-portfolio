import {
	COMPANY_WORKED,
	AUTHOR_NAME,
	FIRST_COMPANY,
} from "../../Utils/constant";
import { getLastWorkedCompany } from "../../Utils/helpers";
import Skills from "./Skills";
import ImageSection from "./ImageSection";
import "./about.css";

interface Company {
	link: string;
	designation: string;
	name: string;
	location: string;
	startup: boolean;
}

const About = () => {
	const currentWorkingCompany = getLastWorkedCompany(COMPANY_WORKED) as Company;
	const { name, designation, location, link } = currentWorkingCompany;
	const {
		name: firstCompanyName,
		startedAt: firstCompanyStartedAt,
		designation: firstCompanyDes,
	} = FIRST_COMPANY;

	return (
		<section id="about" className="sub-container about-container">
			<h2 className="numbered-heading numbered-heading-line">About Me</h2>
			<div className="inner">
				<div className="about-container__text">
					<p className="paragraph gutter-paragraph">
						Hello! I'm {AUTHOR_NAME} — a passionate software developer who loves building things for the web. My journey in web development began in {` ${firstCompanyStartedAt}`}, when I kicked off my career as a {` ${firstCompanyDes}`} at {firstCompanyName}.
					</p>
					<p className="paragraph gutter-paragraph">
						Today, I work as a {designation} at {name} ({location}), where I focus on crafting accessible, inclusive digital experiences. My current work revolves around building reusable React components and diving deep into Node.js-based backend development and optimization.

						I'm currently expanding my skills into Redis, Nginx, and SQL to better understand scalable architectures — with the goal of becoming a well-rounded fullstack developer capable of building and deploying robust production-grade systems.
					</p>
					<Skills />
				</div>
				<ImageSection />
			</div>
		</section>
	);
};

export default About;
