import React, { useEffect, useRef, useState } from "react";

const HitWord: React.FC = () => {
  let index = 0;
  let charIndex = 0;
  let start: number | null = null;
  let delay = 200;
  let isDeleting = false;
  const text = [
    "天道忌巧，天道忌盈，天道忌贰",
    "心即理、致良知、知行合一、万物一体",
    "即须奋发，舍旧图新，幸勿自误",
  ];
  const [diplayText, setDisplayText] = useState('');
  const textRef = useRef<HTMLDivElement>(null);

  const changeText = (time: number) => {
    window.requestAnimationFrame(changeText);
    if (!start) {
      start = time;
    }
    const progress = time - start;
    if (progress > delay) {
      const theText = text[index];
      // console.log(charIndex,'----5555555');

      if (!isDeleting) {
        if (textRef.current) {
          // console.log(theText);
          setDisplayText(theText.slice(0, ++charIndex));
          delay = 200;
        }
      } else {
        if (textRef.current) {
          setDisplayText(theText.slice(0, charIndex--));
        }
      }

      start = time;

      if (charIndex === theText.length) {
        isDeleting = true;
        delay = 100;
        start = time + 1200;
      }
      if (charIndex < 0) {
        isDeleting = false;
        start = time + 200;
        index = ++index % text.length;
        // console.log(index);
      }
    }
  };
  useEffect(() => {
    const timer=setTimeout(() => {
      window.requestAnimationFrame(changeText);
    }, 500);
   return ()=>clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <div>
        <span ref={textRef}>{diplayText}</span>
        <span className=" border-r-white border-r-2 animate-ping"></span>
      </div>
    </>
  );
};

export default HitWord;
