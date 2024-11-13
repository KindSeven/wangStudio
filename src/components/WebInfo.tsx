const WebInfo: React.FC = () => {
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-md hover:shadow-[0_5px_5px_5px_rgba(229,229,229)] transition-all mb-4">
        <div className="flex items-center mb-2 ">
          <div className=" mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.586l-3.707 3.707A1 1 0 0 1 6 17v-3H5a3 3 0 0 1-3-3V5zm20 4v6c0 1-.6 3-3 3h-1v3c0 .333-.2 1-1 1c-.203 0-.368-.043-.5-.113L12.613 18H9l3-3h3c1.333 0 4-.8 4-4V6c1 0 3 .6 3 3z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          网站资讯
        </div>
        <div>
          {['文章数目','运行时间','总访问量','最后更新时间'].map((item,index)=>(
            <div key={index} className="flex items-center justify-between leading-loose text-[#333333] text-[15px]">
                <span>{item}：</span>
                <span>22</span>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default WebInfo;
