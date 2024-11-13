import React, { useEffect, useRef, useState } from "react";
import holo from "@/assets/images/holo.PNG";
import "@/css/button.css";
import HitWord from "../../components/HitWord";
import HeadMemnu from '../../components/HeadMenu';
import Home from "../Home";
import DownSVG from "../../SVG/DownSVG";
import LineBg from "../../components/LineBg";
import useScrollHeader from "../../hooks/useScrollHeader";
const Square: React.FC = () => {
  const {showHead} = useScrollHeader();
  const mainRef = useRef<HTMLDivElement>(null);

  const handleDownMove = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
      // console.log(222);
    }
  };
  
  
  return (
    <>
    <LineBg></LineBg>
      <header
        className="h-screen w-full bg-cover text-white bg-fixed relative max-w-[100vw] overflow-x-hidden z-[1000]"
        style={{ backgroundImage: `url(${holo})` }}
      >
        {!showHead&&<HeadMemnu></HeadMemnu>}
          <div className={`fixed top-0 w-full bg-white 
          text-black  transition-all duration-500 bg-opacity-75 
          ${showHead?' translate-y-0':' -translate-y-full'}
          `}
          >
            <HeadMemnu></HeadMemnu>
          </div>

        <div className="h-14 w-full absolute top-1/3 flex justify-center  items-center text-4xl  flex-col z-[-100]">
          <div className=" ">
            <strong>KindSeven的工作间</strong>
          </div>
          <div className="text-2xl">
            <HitWord></HitWord>
          </div>
        </div>
        <div className=" cursor-pointer " onClick={handleDownMove}>
          <DownSVG></DownSVG>
        </div>
      </header>
      <main className="max-w-[1200px]  my-0 mx-auto" ref={mainRef}>
        <Home></Home>
      </main>
      <footer>fotter</footer>
    </>
  );
};
export default Square;
