import { GitHubLogo, LinkedInLogo, MobileCall } from "../assets/svg";

export const AUTHOR_NAME = "Sanjeev Singh";
export const BACKEND_SKILLS = true;
// export const MY_IMAGE =
// 	"https://cdn.kommunicate.io/kommunicate/website/about-us/sanjeev_01.webp";

export const FIRST_COMPANY = {
	name: "Kommunicate",
	startedAt: 2020,
	location: "Bengaluru",
	designation: "Frontend Developer (Intern)",
	link: "https://www.kommunicate.io/",
};

export const CURRENT_COMPANY = {
	name: "Accenture",
	startedAt: 2024,
	location: "Delhi NCR",
	designation: "Package App Development Senior Analyst",
	link: "https://www.accenture.com/in-en",
};

//Add your current working organization at the end
export const COMPANY_WORKED = Object.freeze({
	helpingDoc: {
		name: "HelpingDoc",
		designation: "Data executive",
		link: "",
		startup: false,
	},
	Applozic: {
		name: "Applozic",
		designation: FIRST_COMPANY.designation,
		link: "",
		startup: true,
	},
	Intentive: {
		name: FIRST_COMPANY.name,
		designation: "Software Development Engineer II (SDE-II)",
		link: FIRST_COMPANY.link,
		location: FIRST_COMPANY.location,
		startup: true,
	},
	Accenture: {
		name: CURRENT_COMPANY.name,
		designation: CURRENT_COMPANY.designation,
		link: CURRENT_COMPANY.link,
		location: CURRENT_COMPANY.location,
		startup: false,
	},
});

export const GET_IN_TOUCH = {
	looking:
		"While I am currently actively seeking new opportunities, my inbox is always open. Whether you have a job opportunity or any questions, feel free to reach out. I look forward to potential connections and discussions!",
	notLooking:
		"Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
};
export const SKILLS = Object.freeze({
	frontEnd: {
		programmingLang: ["JavaScript(ES5 & ES6+)", "TypeScript"],
		markUpLang: ["HTML", "JSX"],
		stylingLang: ["CSS", "SCSS", "Styled Components"],
		library: ["React", "Redux", "Jekyll", "WordPress"],
	},
	deployment: ["AWS Amplify", "Netlify", "GitHub Pages"],
	analyticsTools: ["Mixpanel", "Segment", "Google Analytics", "UserPilot"],
	backend: ["Node.js", "Express.js", "MongoDB",],
});

export const CONTACT_DETAILS = Object.freeze({
	email: "contactsanjeev.singh@yahoo.com",
	mobileNumber: "+919812154536",
	linkedin: "https://www.linkedin.com/in/sanjeev-singh-negi",
	gitHubPersonal: "https://github.com/Sanjeev232",
	gitHubOffice: "https://github.com/Sanjeevsinghnegi",
	myPortFolioGitHub: "https://github.com/Sanjeev232/my-portfolio",
	resume:
		"https://drive.google.com/file/d/1EjkocFtPsMFRx2IaNlKmZKaIOCBRrYCY/view?usp=sharing",
});

export const FOOTER_LOGO_MAP = [
	{
		href: CONTACT_DETAILS.gitHubPersonal,
		logo: <GitHubLogo />,
		rel: "noreferrer",
		target: "_blank",
	},
	{
		href: CONTACT_DETAILS.linkedin,
		logo: <LinkedInLogo />,
		rel: "noreferrer",
		target: "_blank",
	},
	{
		href: `tel:${CONTACT_DETAILS.mobileNumber}`,
		logo: <MobileCall />,
		rel: "",
		target: "",
	},
];

export const NAV_LINKS_MAP = [
	{
		name: "About",
		link: "#about",
	},
	{
		name: "Work Experience",
		link: "#experience",
	},
	{
		name: "Awards",
		link: "#awards",
	},
	{
		name: "Contact",
		link: "#contact",
	},
];
