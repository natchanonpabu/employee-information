import * as React from "react";
const XMark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill="#4B5760"
      fillRule="evenodd"
      d="M.454.454a1.5 1.5 0 0 1 2.121 0L12 9.88 21.425.454a1.5 1.5 0 1 1 2.12 2.121L14.122 12l9.425 9.425a1.5 1.5 0 1 1-2.121 2.12L12 14.122l-9.425 9.425a1.5 1.5 0 1 1-2.121-2.121L9.879 12 .454 2.575a1.5 1.5 0 0 1 0-2.12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default XMark;
