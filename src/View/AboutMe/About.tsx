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
	const { name, designation, location, link, startup } = currentWorkingCompany;
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
						Hello! My name is {AUTHOR_NAME}, and I enjoy creating things that
						live on the internet. My interest in web development started back in
						{` ${firstCompanyStartedAt}`} when I decided to begin my career as a
						{` ${firstCompanyDes}`} at {firstCompanyName}.
					</p>
					<p className="paragraph gutter-paragraph">
						Fast-forward to today, and I've had the privilege of working as a
						{` ${designation}`} at a Noida {""}
						<a
							className="p-anchor"
							href={link}
							rel="noreferrer"
							target="_blank"
							tabIndex={-1}
						>
							{name}
						</a>
						, My main focus these days is building accessible, inclusive
						products and digital experiences at {name}, particularly related to
						reusable react components, development and optimization of node.js
						based backend.
					</p>
					<Skills />
				</div>
				<ImageSection />
			</div>
		</section>
	);
};

export default About;
