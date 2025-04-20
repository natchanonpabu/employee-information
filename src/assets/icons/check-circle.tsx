import * as React from "react";

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill="#09AA6A"
      fillRule="evenodd"
      d="M10.783 19.95a1.25 1.25 0 0 1 1.768 0l4.116 4.116 10.782-10.783a1.25 1.25 0 0 1 1.768 1.768L17.551 26.717a1.25 1.25 0 0 1-1.768 0l-5-5a1.25 1.25 0 0 1 0-1.767Z"
      clipRule="evenodd"
    />
    <path
      fill="#09AA6A"
      fillRule="evenodd"
      d="M20 4.583C11.486 4.583 4.583 11.486 4.583 20S11.486 35.417 20 35.417 35.417 28.514 35.417 20 28.514 4.583 20 4.583ZM2.083 20c0-9.895 8.022-17.917 17.917-17.917 9.895 0 17.917 8.022 17.917 17.917 0 9.895-8.022 17.917-17.917 17.917-9.895 0-17.917-8.022-17.917-17.917Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CheckCircle;
