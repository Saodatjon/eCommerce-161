import * as React from "react"

const StraightArrow = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={6} fill="#F2F3F5" />
    <path
      d="M23.835 18H12.168M19.668 22.167 23.835 18M19.668 13.833 23.835 18"
      stroke="#7D818E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default StraightArrow
