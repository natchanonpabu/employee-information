import * as React from "react";

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    {...props}
  >
    <path
      fill="#C42828"
      fillRule="evenodd"
      d="M20.13 8.261a.75.75 0 0 1 .609.869l-1.995 11.346a2.75 2.75 0 0 1-2.709 2.274h-8.07a2.75 2.75 0 0 1-2.709-2.274L3.261 9.13a.75.75 0 0 1 1.478-.26l1.995 11.346a1.25 1.25 0 0 0 1.23 1.034h8.071a1.25 1.25 0 0 0 1.231-1.034L19.261 8.87a.75.75 0 0 1 .869-.609ZM10.625 2.75c-.69 0-1.25.56-1.25 1.25v1.25h5.25V4c0-.69-.56-1.25-1.25-1.25h-2.75Zm-2.75 2.5V4a2.75 2.75 0 0 1 2.75-2.75h2.75A2.75 2.75 0 0 1 16.125 4v1.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h4.875Z"
      clipRule="evenodd"
    />
  </svg>
);
export default TrashIcon;
