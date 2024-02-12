import { GitHubLogo, LinkedInLogo, MobileCall, EmailIcon, ChatIcon } from "../assets/svg";

export const AUTHOR_NAME = "Sanjeev Singh";

//Add your current working organization at the end
export const COMPANY_WORKED = Object.freeze({
  helpingDoc: {
    name: "HelpingDoc",
    link: ""
  },
  Applozic: {
    name: "Applozic",
    link: ""
  },
  Intentive: {
    name: "Kommunicate",
    link: "https://www.kommunicate.io/"
  }
});

export const GET_IN_TOUCH = {
  looking: "While I am currently actively seeking new opportunities, my inbox is always open. Whether you have a job opportunity or any questions, feel free to reach out. I look forward to potential connections and discussions!",
  notLooking: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
}
export const SKILLS = Object.freeze({
  frontEnd: {
    programmingLang: ["JavaScript", "TypeScript"],
    markUpLang: ["HTML", "JSX"],
    stylingLang: ["CSS", "SCSS", "Tailwind", "Styled Components"],
    library: ["React", "Redux", "Jekyll", "WordPress"],
  },
  deployment: ["AWS Amplify", "Netlify", "GitHub Pages"],
  analyticsTools: ["Mixpanel", "Segment", "Google Analytics 4", "GTM"],
  backend: ["Node", "Express"],
});

export const CONTACT_DETAILS = Object.freeze({
  email: "contactsanjeev.singh@yahoo.com",
  mobileNumber: "+919812164536",
  linkedin: "https://www.linkedin.com/in/sanjeev-singh-negi",
  gitHubPersonal: "https://github.com/Sanjeev232",
  gitHubOffice: "https://github.com/Sanjeevsinghnegi",
  myPortFolioGitHub: "https://github.com/Sanjeev232/my-portfolio",
  resume: "https://www.linkedin.com/in/sanjeev-singh-negi",
});

export const FOOTER_LOGO_MAP = [
  {
    href: CONTACT_DETAILS.gitHubOffice,
    logo: <GitHubLogo />,
    rel:"noreferrer",
    target: "_blank"
  },
  {
    href: CONTACT_DETAILS.linkedin,
    logo: <LinkedInLogo />,
    rel:"noreferrer",
    target: "_blank"
  },
  {
    href: `tel:${CONTACT_DETAILS.mobileNumber}`,
    logo: <MobileCall />,
    rel: "",
    target: ""
  },
  {
    href: `https://wa.me/${CONTACT_DETAILS.mobileNumber}`,
    logo: <ChatIcon />,
    rel: "noreferrer",
    target: "_blank"
  },
  {
    href: `mailto:${CONTACT_DETAILS.email}`,
    logo: <EmailIcon />,
    rel: "",
    target: ""
  },
];

export const NAV_LINKS_MAP = [
  // {
  //   name: "About",
  //   link: "#about",
  // },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Contact",
    link: "#contact",
  },
];
