// import HTMLReactParser from 'html-react-parser';
// import { useEffect, useState } from 'react';

// interface ArticleContentProps{
//     content:string
// }

// const ArticleContent:React.FC<ArticleContentProps>=({content})=>{
//     const [parsedContent, setParsedContent] = useState(null);
// console.log(content);
//     useEffect(()=>{
//         setParsedContent(HTMLReactParser(content))
//     },[content])
//     return <>
//         {parsedContent}
//     </>
// }
// export default ArticleContent