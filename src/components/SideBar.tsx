import holo from "@/assets/images/holo.PNG";
const SideBar: React.FC = () => {
  return (
    <>
      <div className=" ">
        <div className="w-full text-center pt-4">
          <img
            src={holo}
            alt=""
            className="object-cover bg-center w-28 h-28 my-0 mx-auto rounded-[70px] transition-all ease-in-out duration-700 hover:rotate-[360deg]"
          />
        </div>
        <div className=" w-full p-4 pb-6 flex justify-around text-black">
          {["文章", "标签", "分类"].map((item, index) => (
            <div key={index} className="">
              <div className=" text-sm">{item}</div>
              <div className=" text-lg ml-1 cursor-pointer transition-all duration-300 hover:text-yellow-500">
                22
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[205px] left-[10px] text-yellow-500 opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.683 7.559L12 9.875l6.374-6.374a2 2 0 0 1 2.829 0l.707.707L9.683 16.435a4 4 0 1 1-2.121-2.121l2.317-2.317L7.562 9.68a4 4 0 1 1 2.121-2.12M6 7.997a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9.535-6.587l6.375 6.375l-.707.707a2 2 0 0 1-2.829 0l-4.96-4.96z"
            />
          </svg>
        </div>

        <hr className=" border-yellow-500 border-2 border-dashed opacity-90" />
        <div className="flex flex-col ml-8 mt-2">
            {['首页','标签','分类','关于','友链'].map((item,index)=>(
                <div key={index} className=" flex flex-row w-full h-12 items-center">
                    <span className="pr-8">这里是图片</span>
                    <span>{item}</span>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
