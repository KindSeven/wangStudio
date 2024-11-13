import holo from "@/assets/images/holo.PNG";
import '../css/button.css'
import GitHubSVG from "../SVG/GitHubSVG";
import EmailSVG from "../SVG/EmailSVG";

const SelfCover = () => {
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all mb-4">
        <div className="w-full text-center ">
          <img
            src={holo}
            alt=""
            className="object-cover bg-center w-28 h-28 my-0 mx-auto rounded-[70px] transition-all ease-in-out duration-700 hover:rotate-[360deg]"
          />
          <div className="text-2xl font-medium text-slate-800">name</div>
          <div>cover</div>
        </div>
        <div className=" w-full p-4 flex justify-around ">
          {["文章", "标签", "分类"].map((item, index) => (
            <div key={index} className="">
              <div className=" text-sm">{item}</div>
              <div className=" text-lg ml-1 cursor-pointer transition-all duration-300 hover:text-yellow-500">22</div>
            </div>
          ))}
        </div>

        <div className="w-4/5 text-center leading-[2.4] button my-0 mx-auto">
          <button className="">Follow Me
            <span className=""></span>
          </button>
        </div>
        <div className="flex justify-around p-4 ">
          <div className=" cursor-pointer  transition-all ease-in-out duration-500 hover:rotate-[540deg]"><EmailSVG></EmailSVG></div>
          <div className=" cursor-pointer transition-all ease-in-out duration-500 hover:rotate-[540deg]">
            <GitHubSVG></GitHubSVG>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelfCover;
