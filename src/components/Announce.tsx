import AnnounceSVG from "../SVG/AnnounceSVG";

const Announce: React.FC = () => {
  return (
    <>
      <div className=" bg-white w-full rounded-lg p-5 shadow-xl hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all mb-4">
        <div className="flex items-center mb-4">
          <div className=" mr-2">
            <AnnounceSVG></AnnounceSVG>
          </div>
          公告~
        </div>
        <div className="text-[#333333] text-[15px] leading-loose">
          这里是公告哦~这里是公告哦~这里是公告哦~这里是公告哦~这里是公告哦~
        </div>
      </div>
    </>
  );
};
export default Announce;
