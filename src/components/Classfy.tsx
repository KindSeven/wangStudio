const Classfy: React.FC = () => {
  const content = [
    {
      main: "休闲",
      count: 1,
      sub: [
        { main: "游戏", count: 1 },
        { main: "运动", count: 1 },
      ],
    },
    {
      main: "学习",
      count: 6,
      sub: [
        { main: "编程", count: 2 },
        { main: "英语", count: 2 },
        { main: "数学", count: 2 },
        { main: "物理", count: 2 },
      ],
    },
    { main: "日常", count: 2 },
  ];
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all mb-4">
        <div className="flex items-center mb-2 justify-between">
          <div className="flex items-center mb-2 ">
            <div className=" mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8H4v10l2.4-8h17.1l-2.575 8.575q-.2.65-.737 1.038T19 20z"
                />
              </svg>
            </div>
            分类
          </div>
          <div className="flex items-center mb-2 hover:text-yellow-500 transition-all duration-300 ease-in-out">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
                />
              </svg>
            </div>
            更多
          </div>
        </div>
        <div className="   leading-loose text-[#333333] text-[15px]">
          {content.map((item, index) => (
            <ul key={index}>
              <div className="pl-2 transition-all duration-300 ease-in-out  hover:bg-yellow-500 pr-2 group">
                <span className="transition-all  group-hover:pl-2  ">
                  {item.main}
                </span>
                <span className=" float-right transition-all  group-hover:pr-2">{item.count}</span>
              </div>
              {item.sub?.map((itm, index) => (
                <li key={index} className="pl-2 pr-2 ml-5 transition-all ease-in-out duration-300 hover:bg-yellow-500 group">
                  <span className="transition-all  group-hover:pl-2  ">{itm.main}</span>
                  <span className=" float-right transition-all  group-hover:pr-2">{item.count}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
export default Classfy;
