import { lazy,Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// import Square from "../pages/Square";

const Square = lazy(() => import("../pages/Square"));
const Article = lazy(() => import("../pages/Article"));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Navigate to={"/home"} replace/>
  },
  {
    path: "/home",
    element: <Suspense fallback={"加载中..."}><Square/></Suspense>,
  },{
    path:"/article/:articleId",
    element:<Suspense fallback={"加载中..."}><Article/></Suspense>,
  }
]);

export default router;
