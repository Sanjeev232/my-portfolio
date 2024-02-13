import { MY_IMAGE } from "../../Utils/constant";

const ImageSection: React.FC = () => {
  return (
    <div className="about-container__image">
      <div className="about-container__wrapper wrapper">
        <div className="image-wrapper img">
          <BackImage />
          <FrontImage />
          <Image />
        </div>
      </div>
    </div>
  );
};

const BackImage: React.FC = () => {
  return (
    <div style={{ maxWidth: "500px", display: "block" }}>
      <img
        alt=""
        role="presentation"
        aria-hidden="true"
        src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
        style={{ maxWidth: "100%", display: "block", position: "static" }}
        className="back-image"
      />
    </div>
  );
};
const FrontImage: React.FC = () => {
  return (
    <div
      aria-hidden={true}
      data-placeholder-image=""
      style={{
        opacity: 0,
        transition: "opacity 500ms linear 0s",
        backgroundColor: "rgb(232, 232, 232)",
        position: "absolute",
        inset: 0,
        objectFit: "cover",
      }}
    ></div>
  );
};

const Image: React.FC = () => {
  return (
    <img
      width={500}
      height={500}
      data-main-image
      sizes="(min-width: 500px) 500px, 100vw"
      decoding="async"
      loading="lazy"
      src={MY_IMAGE}
      alt="Sanjeev's Image"
      style={{ objectFit: "cover", opacity: 1 }}
      className="main__image"
    />
  );
};

export default ImageSection;
