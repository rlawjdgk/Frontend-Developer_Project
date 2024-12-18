import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 루트 경로에 Layout 컴포넌트 렌더링
    children: [
      {
        path: "", // "/" 경로에 Home 컴포넌트 렌더링
        element: <Home />,
      },
      {
        path: "question", // "/question" 경로에 Question 컴포넌트 렌더링
        element: <Question />,
      },
      {
        path: "result", // "/result" 경로에 Result 컴포넌트 렌더링
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset} // styled-reset을 통해 CSS 리셋 적용

  @font-face {
    font-family: "SimKyungha";
    src: url("/fonts/SimKyungha.ttf") format("truetype");
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: "SimKyungha";
    background: url("/img/home.jpg") center/cover no-repeat;
    height: 100vh;  
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} /> {/* 라우터 설정 적용 */}
    </>
  );
};

export default App;
