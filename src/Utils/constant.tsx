import { GitHubLogo, LinkedInLogo, MobileCall, EmailIcon, ChatIcon } from "../assets/svg";

export const CURRENT_COMPANY = ["Kommunicate"];
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
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
