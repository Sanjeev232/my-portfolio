import React from "react";
import { CONTACT_DETAILS } from "../../Utils/constant";

interface ResumeLinkProps {
  className?: string;
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ className }) => {
  return (
    <a
      className={className}
      href={CONTACT_DETAILS.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
};

export default ResumeLink;
