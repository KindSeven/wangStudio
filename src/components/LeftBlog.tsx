import holo from "@/assets/images/holo.PNG";
import { useEffect, useState } from "react";
import { getArticleDetail } from "../api/article";
import { BaseImgURL } from "../utils/baseURL";
import parse from "html-react-parser";
interface List {
  articleId: number;
  articleTitle: string;
  articleIntro: string;
  articleCoverURL: string;
  articleTag: string;
  articleClass: string;
  articleCreatedTime: Date;
}

interface LeftBlogProps {
  item: List;
}

const LeftBlog: React.FC<LeftBlogProps> = ({ item }) => {
  const date = item.articleCreatedTime;
  console.log(date);
  

  return (
    <>
      <div className=" m-4 md:h-72  h-3/5 rounded-lg shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all overflow-hidden bg-white group ">
        <div className="md:flex w-full h-full">
          <div className="md:shrink-0 w-full h-1/2 md:w-5/12 md:h-full overflow-hidden">
            <img
              src={`${BaseImgURL}` + "/images/" + item.articleCoverURL}
              alt=""
              className="object-cover w-full h-full transition-all group-hover:scale-110 duration-500"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-black transition-all duration-300 hover:text-yellow-500"
            >
              {item.articleTitle}
            </a>
            <p className="text-slate-500 mt-2 text-sm">
              发表于 2024-10-25 | 学习 xxx
            </p>
            <p className="mt-2 text-slate-700">
              {item.articleIntro}...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftBlog;
