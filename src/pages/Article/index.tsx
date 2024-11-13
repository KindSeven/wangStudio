import HeadMemnu from "../../components/HeadMenu";
import LineBg from "../../components/LineBg";
import holo from "@/assets/images/holo.PNG";
import useScrollHeader from "../../hooks/useScrollHeader";
import SelfCover from "../../components/SelfCover";
import Announce from "../../components/Announce";
import LatestAriticle from "../../components/LatestArticle";
import { getArticleDetails } from "../../api/article";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "./components/ArticleContent";
import parse from "html-react-parser";
interface Detail {
  articleId: number;
  articleTitle: string;
  articleIntro: string;
  articleCoverURL: string;
  articleTag: string;
  articleClass: string;
  articleCreatedTime: Date;
  articleContent: string;
}

const Article: React.FC = () => {
  const { showHead } = useScrollHeader();
  const { articleId } = useParams();
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [tags, setTags] = useState([]);
  // console.log(articleId);

  const getArticleDetail = async () => {
    const data = await getArticleDetails(articleId);
    // console.log(data.data[0].articleContent);

    setDetail(data.data[0].articleContent);
    setTitle(data.data[0].articleTitle);
    const date = new Date(data.data[0].articleCreatedTime);
    const formattedDate = date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    setTime(formattedDate.replace(/\//g, "-"));
    setTags(data.data[0].articleTag.split(","));
    console.log(tags);
  };

  useEffect(() => {
    getArticleDetail();
  }, []);
  return (
    <>
      <LineBg></LineBg>
      <div className="h-96 w-full absolute top-0 left-0 z-[-1] bg-black"></div>
      <header
        className="h-96 w-full  text-white relative max-w-[100vw] overflow-x-hidden z-[1000] "
        
      >
        <div className="h-96 w-full absolute bg-cover top-0 left-0 z-[-1] opacity-70" style={{ backgroundImage: `url(${holo})` }}></div>
        <div>
          {!showHead && <HeadMemnu></HeadMemnu>}
          <div
            className={`fixed top-0 w-full bg-white 
          text-black  transition-all duration-500 bg-opacity-75 
          ${showHead ? " translate-y-0" : " -translate-y-full"}
          `}
          >
            <HeadMemnu></HeadMemnu>
          </div>
        </div>

        <div className=" w-full  absolute bottom-20 ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[40px] ">{title}</div>
            <div className="text-[14px]">
              发表于：{time} | 更新于：{time} | {" "}
              {tags.map((item, index) => (
                <span key={index}>{item} </span>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-[1200px]  my-0 mx-auto">
        <div className="w-full mt-10 mb-10 md:flex  ">
          <div className="md:w-3/4 bg-white shadow-md hover:shadow-[0_5px_5px_7px_rgba(229,229,229)] transition-all m-4">
            <div className="p-8">{parse(detail)}</div>

            {/* <ArticleContent content={detail}/> */}
            {/* <RightBlog></RightBlog> */}
          </div>
          <div className=" md:w-1/4 ">
            <SelfCover></SelfCover>
            <Announce></Announce>
            <LatestAriticle></LatestAriticle>
          </div>
        </div>
      </main>
    </>
  );
};
export default Article;
