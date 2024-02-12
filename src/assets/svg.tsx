import { SVGProps } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  viewBox?: string;
  width?: number;
  height?: number;
  fill?: string;
}

export const LoadingPentagon: React.FC<SvgComponentProps> = () => (
  <svg
    className="center-pentagon"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="50%"
      y="60%"
      fontSize="20"
      fontFamily="Calibre"
      fill="#64ffda"
      textAnchor="middle"
      alignmentBaseline="middle"
    >
      S
    </text>
  </svg>
);
export const LoadingPentagonLines: React.FC<SvgComponentProps> = () => (
  <svg
    className="paths"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>

    <filter id="no-blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
    </filter>

    <polygon
      className="center"
      points="16 2.9000001 30 13.0715955 24.6524758 29.5295826 7.34752416 29.5295826 2 13.0715955"
    ></polygon>
    <polygon
      className="outside"
      points="31.7633558 12.4986465 25.7422896 31.0295826 6.25771037 31.0295826 0.236644243 12.4986465 16 1.04589813"
    ></polygon>
    <polygon
      className="inside"
      points="16 4.75410206 3.76335576 13.6445445 8.43733795 28.0295826 23.5626621 28.0295826 28.2366442 13.6445445"
    ></polygon>
  </svg>
);

export const NavBarLogo: React.FC<SvgComponentProps> = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 84 96"
  >
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="#64ffda"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        ></polygon>
        <text
          x="47%"
          y="50%"
          fontSize="40"
          fontStyle="Bold"
          fontFamily="Calibre"
          fill="#64ffda"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          S
        </text>
      </g>
    </g>
  </svg>
);

export const GitHubLogo: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-github"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"GitHub"}</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinkedInLogo: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-linkedin"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"LinkedIn"}</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

export const MobileCall: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    className="feather feather-mobilecall"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Call me"}</title>
    <path
      fill="#e6f1ff"
      fillRule="evenodd"
      d="M22.75 7a5.75 5.75 0 1 0-10.9 2.56.129.129 0 0 1 .013.04v.007l-.297 1.113a1.4 1.4 0 0 0 1.714 1.714l1.113-.298c-.002 0-.001 0 0 0h.007a.126.126 0 0 1 .04.014A5.75 5.75 0 0 0 22.75 7Zm-8.357 5.136ZM17 2.75a4.25 4.25 0 1 1-1.892 8.057 1.567 1.567 0 0 0-1.102-.12l-.946.253.253-.946a1.566 1.566 0 0 0-.12-1.102A4.25 4.25 0 0 1 17 2.75Z"
      clipRule="evenodd"
    />
    <path
      fill="#e6f1ff"
      fillRule="evenodd"
      d="M3.007 6.407c1.68-1.68 4.516-1.552 5.685.544l.65 1.163c.763 1.368.438 3.095-.68 4.227a.63.63 0 0 0-.104.337c-.013.256.078.849.997 1.767.918.918 1.51 1.01 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.118 2.859-1.443 4.227-.68l1.163.65c2.096 1.17 2.224 4.005.544 5.684-.899.9-2.094 1.698-3.498 1.75-2.08.08-5.536-.458-8.958-3.88-3.421-3.421-3.959-6.876-3.88-8.957.053-1.405.852-2.6 1.75-3.498Zm4.376 1.275c-.6-1.074-2.21-1.32-3.315-.214-.775.775-1.28 1.63-1.312 2.493-.066 1.736.363 4.762 3.442 7.841 3.08 3.08 6.105 3.508 7.84 3.442.863-.033 1.72-.537 2.494-1.312 1.106-1.106.86-2.716-.214-3.315l-1.163-.649c-.723-.403-1.74-.266-2.452.448-.07.07-.517.486-1.308.524-.81.04-1.791-.324-2.9-1.434-1.111-1.11-1.475-2.091-1.435-2.902.038-.791.455-1.237.524-1.306.714-.714.851-1.73.448-2.453l-.65-1.163Z"
      clipRule="evenodd"
    />
  </svg>
);

export const EmailIcon: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    fill="none"
    className="feather feather-email"
    viewBox="0 0 500 512"
    {...props}
  >
    <title>{"Email me"}</title>
    <path
      fill="#e6f1ff"
      fillRule="evenodd"
      d="M510.746 110.361c-2.128-10.754-6.926-20.918-13.926-29.463-1.422-1.794-2.909-3.39-4.535-5.009-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951 0-34.834 7-47.539 19.708-1.608 1.604-3.099 3.216-4.575 5.067-6.97 8.509-11.747 18.659-13.824 29.428A64.963 64.963 0 0 0 0 123.435v265.137c0 9.224 1.874 18.206 5.589 26.745 3.215 7.583 8.093 14.772 14.112 20.788a75.763 75.763 0 0 0 4.63 4.258c12.034 9.966 27.272 15.45 42.913 15.45h377.51c15.742 0 30.965-5.505 42.967-15.56a58.23 58.23 0 0 0 4.578-4.148c5.818-5.812 10.442-12.49 13.766-19.854l.438-1.05c3.646-8.377 5.497-17.33 5.497-26.628V123.435c0-4.375-.422-8.786-1.254-13.074zM34.823 99.104c.951-1.392 2.165-2.821 3.714-4.382 7.689-7.685 17.886-11.914 28.706-11.914h377.51c10.915 0 21.115 4.236 28.719 11.929a40.528 40.528 0 0 1 3.661 4.272l2.887 3.88-201.5 175.616c-6.212 5.446-14.21 8.443-22.523 8.443-8.231 0-16.222-2.99-22.508-8.436L32.19 102.939l2.633-3.835zm-8.068 291.809c-.109-.722-.134-1.524-.134-2.341V128.925l156.37 136.411L28.199 400.297l-1.444-9.384zm438.144 32.927c-6.052 3.492-13.022 5.344-20.145 5.344H67.244c-7.127 0-14.094-1.852-20.142-5.344l-6.328-3.668L200.71 280.793l17.528 15.246c10.514 9.128 23.922 14.16 37.761 14.16 13.89 0 27.32-5.032 37.827-14.16l17.521-15.253L471.228 420.18l-6.329 3.66zm20.473-35.268c0 .803-.015 1.597-.116 2.304l-1.386 9.472-154.858-134.939 156.36-136.418v259.581z"
    />
  </svg>
);

export const ChatIcon: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    viewBox="0 0 24 24"
    className="feather feather-chatIcon"
    {...props}
  >
    <path
      stroke="#e6f1ff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 10.5h8M8 14h5.5M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    viewBox="0 0 24 24"
    className="feather feather-chatIcon"
    {...props}
  >
    <path
      stroke="#e6f1ff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 10.5h8M8 14h5.5M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5"
    />
  </svg>
);
