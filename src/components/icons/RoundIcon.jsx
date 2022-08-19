import * as React from "react"

const RoundIcon = (props) => (
  <svg
    width={27}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#8A42F9">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.28 19.445A9.72 9.72 0 0 0 27 9.725a9.72 9.72 0 0 0-9.72-9.72 9.72 9.72 0 0 0-9.72 9.72 9.72 9.72 0 0 0 9.72 9.72Zm0-5.94a3.78 3.78 0 1 0 0-7.56 3.78 3.78 0 0 0 0 7.56Z"
      />
      <path d="M7.56 3.245H0l4.032 12.96H7.56V3.245Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .005)" d="M0 0h27v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default RoundIcon
