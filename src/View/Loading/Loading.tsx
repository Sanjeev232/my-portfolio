import React, { useState, useEffect } from "react";
import "./Loading.css";
import { LoadingPentagon, LoadingPentagonLines } from "../../assets/svg";
import ProgressBar from "./ProgressBar";

interface LoadingBarProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading: React.FC<LoadingBarProps> = ({ setLoading }) => {
  const [progressBarValue, setProgressBarValue] = useState(0);

  useEffect(() => {
    if (progressBarValue === 100) {
      setLoading(false);
    }
  }, [progressBarValue]);

  return (
    <section id="loading" className="loading-Container">
      <div className="pentagon-loader">
        <>
          <LoadingPentagon />
          <LoadingPentagonLines />
        </>
      </div>
      <ProgressBar {...{ progressBarValue, setProgressBarValue }} />
    </section>
  );
};

export default Loading;
