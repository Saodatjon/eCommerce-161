import * as React from "react"

const TickIcon = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={19}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.996 10.245a7.5 7.5 0 1 1-3.372-6.005l1.633-1.293A9.462 9.462 0 0 0 9.5 1.005a9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.345-11.22l-1.849 1.46Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#b)">
        <path
          d="M16.994 10.208a7.5 7.5 0 1 1-3.37-5.968l1.633-1.293A9.462 9.462 0 0 0 9.5 1.005a9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.335-11.271l-1.841 1.474Z"
          fill="#24A236"
        />
        <path
          d="M8.404 9.044a8.404 8.404 0 1 0 0-16.808 8.404 8.404 0 0 0 0 16.808Z"
          fill="#008ACB"
        />
        <g filter="url(#c)">
          <path
            d="M7.308 28.044a7.308 7.308 0 1 0 0-14.615 7.308 7.308 0 0 0 0 14.615Z"
            fill="#77F628"
          />
        </g>
        <g filter="url(#d)">
          <path
            d="M.732 14.16a7.308 7.308 0 1 0 0-14.616 7.308 7.308 0 0 0 0 14.615Z"
            fill="#19E7E8"
          />
        </g>
        <g filter="url(#e)">
          <path
            d="M0 20.006A5.846 5.846 0 1 0 0 8.313a5.846 5.846 0 0 0 0 11.693Z"
            fill="#DEFA1B"
          />
        </g>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.049 6.356 9.5 13.005v-2.5l7.499-5.833a9.538 9.538 0 0 1 1.05 1.684ZM6 10.81l3.5 2.194v-2.5L6 8.316v2.493Z"
        fill="#24A236"
      />
    </g>
    <defs>
      <filter
        id="c"
        x={-8}
        y={5.429}
        width={30.615}
        height={30.615}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={4}
          result="effect1_foregroundBlur_680_8547"
        />
      </filter>
      <filter
        id="d"
        x={-14.576}
        y={-8.456}
        width={30.615}
        height={30.615}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={4}
          result="effect1_foregroundBlur_680_8547"
        />
      </filter>
      <filter
        id="e"
        x={-11.846}
        y={2.313}
        width={23.691}
        height={23.692}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={3}
          result="effect1_foregroundBlur_680_8547"
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .005)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default TickIcon
