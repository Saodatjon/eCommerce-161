import * as React from "react"

const MirIcon = (props) => (
  <svg
    width={49}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M13.201.42v.006c-.006 0-1.898-.006-2.402 1.778-.463 1.637-1.766 6.154-1.802 6.278h-.36S7.302 3.864 6.833 2.198C6.33.414 4.432.42 4.432.42H.107v13.576h4.325V5.933h.36l2.523 8.063h3.003l2.523-8.057h.36v8.057h4.325V.42H13.2ZM28.997.42s-1.267.113-1.862 1.423l-3.063 6.64h-.36V.42h-4.325v13.576h4.084s1.327-.119 1.922-1.423l3.003-6.64h.36v8.063h4.325V.42h-4.084ZM35.004 6.586v7.41h4.324V9.67h4.685a4.675 4.675 0 0 0 4.415-3.083H35.004Z"
        fill="#4DB45E"
      />
      <path
        d="M44.013.42h-9.616c.48 2.585 2.444 4.66 4.985 5.335a6.996 6.996 0 0 0 1.808.237H48.6c.066-.308.096-.622.096-.948 0-2.555-2.096-4.624-4.684-4.624Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={34.398}
        y1={3.206}
        x2={48.697}
        y2={3.206}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.3} stopColor="#00B4E6" />
        <stop offset={1} stopColor="#088CCB" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .005)" d="M0 0h49v14H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default MirIcon
