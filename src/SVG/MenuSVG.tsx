const MenuSVG: React.FC = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 20 20"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeDasharray="16"
          strokeDashoffset="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M5 5h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="16;0"
            />
          </path>
          <path d="M5 12h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="16;0"
            />
          </path>
          <path d="M5 19h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="16;0"
            />
          </path>
        </g>
      </svg>
    </>
  );
};

export default MenuSVG;