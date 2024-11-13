import { useEffect, useRef, useState } from "react";
import MenuSVG from "../SVG/MenuSVG";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const HeadMemnu: React.FC = () => {
  const [bgLine, setBgLine] = useState(-1);
  const [showUl, setShowUl] = useState(window.innerWidth > 768);
  const [showSideBar, setShowSideBar] = useState(false);

  const SideBarRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate()

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth <= 768) {
        setShowUl(false);
      } else {
        setShowUl(true);
      }
    };

    const handelCloseSideBar = (e: MouseEvent) => {
      if (
        SideBarRef.current &&
        !SideBarRef.current.contains(e.target as Node)
      ) {
        setShowSideBar(false);
      }
    };

    if (showSideBar) {
      document.body.style.overflow = 'hidden'; // 阻止滚动条出现
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('mousewheel', preventScroll, { passive: false });
    } 

    window.addEventListener("resize", handleWidth);
    document.addEventListener("click", handelCloseSideBar);
    return () => {
      window.removeEventListener("resize", handleWidth);
      document.removeEventListener("click", handelCloseSideBar);
      document.body.style.overflow = 'auto'; // 允许滚动
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('mousewheel', preventScroll);

    };
  }, [showSideBar]);

  const handelSideBar = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡
    setShowSideBar(true);
  };

  const preventScroll = (event: Event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="h-14  ml-10 flex items-center text-lg z-50">
        <div className=" w-2/3 duration-500 transition-colors ease-in-out hover:text-yellow-500 cursor-pointer"
        onClick={()=>{navigate('/home')}}>
          <strong>KindSeven的工作间</strong>
        </div>
        <div className="w-1/3 mr-6">
          {showUl ? (
            <ul className=" h-14 flex justify-around items-center text-sm">
              {["博客", "Github", "关于", "首页"].map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setBgLine(index)}
                  onMouseLeave={() => setBgLine(-1)}
                  className={`cursor-pointer h-6 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat duration-700  transition-[backgorund-size 1s] ease-in-out
                  ${
                    bgLine === index
                      ? "bg-right-bottom bg-[length:100%_3px] text-yellow-500"
                      : "bg-left-bottom bg-[length:0px_3px]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div
              onClick={handelSideBar}
              className=" mr-9 items-center flex-row-reverse flex transition-colors ease-in-out hover:text-yellow-500 cursor-pointer"
            >
              <MenuSVG></MenuSVG>
            </div>
          )}
        </div>
      </div>
      <div className="">
        {!showUl && (
          <>
            <div
              className={`${
                showSideBar
                  ? "bg-black opacity-80 w-screen h-screen fixed top-0 left-0"
                  : ""
              }`}
            ></div>
            <div
              ref={SideBarRef}
              className={`absolute bg-[#f6f8fa] h-screen w-72 top-0  z-10 transition-all
            ${showSideBar ? "right-0" : "-right-72"}`}
            >
              <SideBar></SideBar>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HeadMemnu;
