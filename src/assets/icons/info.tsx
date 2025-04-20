import * as React from "react";

const Info = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      stroke="#C42828"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 17.167V25.5M18 10.517l.017-.019M18 34.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.667-16.667-16.667C8.795 1.333 1.333 8.795 1.333 18c0 9.205 7.462 16.667 16.667 16.667Z"
    />
  </svg>
);
export default Info;
