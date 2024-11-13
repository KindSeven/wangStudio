

const TheTag: React.FC = () => {
  const content = [
    { name: "STL", count: 1 },
    { name: "休闲", count: 10 },
    { name: "华为", count: 1 },
    { name: "STL", count: 90 },
    { name: "docker", count: 1 },
    { name: "STL", count: 1 },
    { name: "算法", count: 4 },
    { name: "前端", count: 1 },
    { name: "STL", count: 1 },
    { name: "面经", count: 1 },
    { name: "nest", count: 1 },
    { name: "STL", count: 1 },
    { name: "休闲", count: 10 },
    { name: "华为", count: 1 },
    { name: "STL", count: 90 },
    { name: "docker", count: 1 },
    { name: "STL", count: 1 },
    { name: "算法", count: 4 },
    { name: "前端", count: 1 },
    { name: "STL", count: 1 },
    { name: "面经", count: 1 },
    { name: "nest", count: 1 },
  ];
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all mb-4">
        <div className="flex items-center mb-2 ">
          <div className=" mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
                <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
              </g>
            </svg>
          </div>
          标签
        </div>
        <div className="flex flex-wrap items-center">
            {content.map((item,index)=>(
                <div key={index} className={` leading-loose pr-2 hover:text-yellow-500 ${item.count>=5?'text-[#99a9bf] text-xl':'text-[#999]'}`}>{item.name}</div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TheTag;
