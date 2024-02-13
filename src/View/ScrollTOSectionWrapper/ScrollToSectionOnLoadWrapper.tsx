import React, { ReactNode } from "react";
import useScrollIntoView from "../../Utils/useScrollIntoView";

interface ScrollToSectionOnLoadWrapperProps {
  children: ReactNode;
}

const ScrollToSectionOnLoadWrapper: React.FC<
  ScrollToSectionOnLoadWrapperProps
> = ({ children }) => {
  useScrollIntoView();

  return <>{children}</>;
};

export default ScrollToSectionOnLoadWrapper;
