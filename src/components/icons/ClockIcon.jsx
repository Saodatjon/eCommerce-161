import React from "react"

const ClockIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke="#353949" strokeWidth={1.5} />
    <path
      d="M12 8v4l3 2"
      stroke="#353949"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ClockIcon
