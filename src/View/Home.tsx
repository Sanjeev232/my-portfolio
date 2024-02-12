import {
  COMPANY_WORKED,
  AUTHOR_NAME,
  CONTACT_DETAILS,
} from "../Utils/constant";

const Home = () => {
  const keys = Object.keys(COMPANY_WORKED);
  const lastKey = keys[keys.length - 1];
  const currentWorkingCompany = (COMPANY_WORKED as any)[lastKey];

  return (
    <section id="home" className="sub-container home-container">
      <h2 className="green-heading typewriter">Greetings, my name is</h2>
      <h1 className="big-heading h1">{AUTHOR_NAME}.</h1>
      <h3 className="big-heading h3">I build things for the web.</h3>
      <p className="paragraph-description">
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on creating accessible,
        human-centered products, particularly in the realm of chatbot
        development at{" "}
        <a
          className="p-anchor"
          href={currentWorkingCompany.link}
          rel="noreferrer"
          target="_blank"
          tabIndex={-1}
        >
          {currentWorkingCompany.name}
        </a>
        .
      </p>
      <a
        className="email-link"
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
