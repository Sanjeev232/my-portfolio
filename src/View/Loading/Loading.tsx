import React from "react";
import "./Loading.css";
import { LoadingPentagon, LoadingPentagonLines } from "../../assets/svg";

const Loading: React.FC = () => {
  return (
    <section id="loading" className="loading-Container">
      <div className="pentagon-loader">
        <>
          <LoadingPentagon />
          <LoadingPentagonLines />
        </>
      </div>
    </section>
  );
};

export default Loading;
