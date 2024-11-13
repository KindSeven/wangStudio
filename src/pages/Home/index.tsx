import { useEffect, useState } from "react";
import Announce from "../../components/Announce";
import Classfy from "../../components/Classfy";
import LatestAriticle from "../../components/LatestArticle";
import LeftBlog from "../../components/LeftBlog";
import SelfCover from "../../components/SelfCover";
import TheTag from "../../components/Tag";
import WebInfo from "../../components/WebInfo";
// import LineBg from "./components/LineBg";
import { getArticleLists } from "../../api/article";
import { useNavigate } from "react-router-dom";

interface List {
  articleId: number;
  articleTitle: string;
  articleIntro: string;
  articleCoverURL: string;
  articleTag: string;
  articleClass: string;
  articleCreatedTime: Date;
}

const Home: React.FC = () => {
  const [list, setList] = useState<List[]>([]);
  const navigate = useNavigate();
  const getArticleList = async () => {
    const data = await getArticleLists();
    setList(data.data);
    // console.log(data.data);
  };
  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <>
      <div className="w-full mt-10 mb-10 md:flex  ">
        <div className="md:w-3/4 ">
          {list.map((item: List, index: number) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/article/${item.articleId}`);
              }}
            >
              <LeftBlog item={item} />
            </div>
          ))}
          {/* <RightBlog></RightBlog> */}
        </div>
        <div className=" md:w-1/4 ">
          <SelfCover></SelfCover>
          <Announce></Announce>
          <LatestAriticle></LatestAriticle>
          <Classfy></Classfy>
          <TheTag></TheTag>
          <WebInfo></WebInfo>
        </div>
      </div>
    </>
  );
};

export default Home;
