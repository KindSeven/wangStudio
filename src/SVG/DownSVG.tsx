const DownSVG: React.FC = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        className="absolute bottom-20 left-2/4 w-10 h-10 animate-bounce z-[-100]"
      >
        <path
          fill="currentColor"
          d="m12 16.848l4.246-4.24q.14-.14.342-.153t.366.153q.16.16.16.353t-.16.354l-4.389 4.389q-.13.13-.267.183T12 17.94t-.298-.053t-.267-.183l-4.389-4.389q-.14-.14-.153-.341t.153-.366q.16-.16.354-.16t.354.16zm0-5.962l4.246-4.24q.14-.14.342-.153t.366.153q.16.16.16.354t-.16.354l-4.389 4.388q-.13.131-.267.184q-.136.053-.298.053t-.298-.053t-.267-.184L7.046 7.354q-.14-.14-.153-.342t.153-.366q.16-.16.354-.16t.354.16z"
        />
      </svg>
    </>
  );
};
export default DownSVG;