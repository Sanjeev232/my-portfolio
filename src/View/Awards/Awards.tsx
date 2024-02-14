import "./awards.style.css";
import bugBashImage2022 from "../../assets/kommunicate-bug-bash-2022.jpeg";
import bugBashImage2023 from "../../assets/kommunicate-bug-bash-2023.jpeg";
import extraMileImage2023 from "../../assets/kommunicate-extra-mile-2023.jpeg";

const Awards = () => {
  return (
    <section id="awards" className="sub-container award-container">
      <h2 className="numbered-heading numbered-heading-line">ACHIEVEMENTS</h2>
      <div className="inner">
        <div className="award-container__image">
          <div className="award-container__image__composition">
            <img
              loading="lazy"
              src={extraMileImage2023}
              alt="extra-mile2023"
              className="composition__photo composition__photo--p3"
            />
            <img
              loading="lazy"
              src={bugBashImage2022}
              alt="bug-bash2023"
              className="composition__photo composition__photo--p1"
            />
            <img
              loading="lazy"
              src={bugBashImage2023}
              alt="bug-bash2022"
              className="composition__photo composition__photo--p2"
            />
          </div>
        </div>
        <div className="award-container__text">
          <p className="paragraph gutter-paragraph">
            <strong> Bug Bash Runner Up Kommunicate - 2022</strong>
            <br />
            <span className="paragraph-span span-block">
              This is a one-day event for finding bugs in the JIRA board across
              multiple projects and resolving them.
            </span>
          </p>
          <p className="paragraph gutter-paragraph">
            <strong>Extra Mile Award - 2023</strong>
            <br />
            <span className="paragraph-span span-block">
              This is for helping and guiding junior team members with their
              tasks.
            </span>
          </p>
          <p className="paragraph gutter-paragraph">
            <strong>Bug Bash Winner Kommunicate - 2023</strong>
            <br />
            <span className="paragraph-span span-block">
              This is a one-day event for finding bugs in the JIRA board across
              multiple projects and resolving them.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
