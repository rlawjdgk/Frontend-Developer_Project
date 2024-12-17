import React from "react";
import { Outlet } from "react-router-dom"; // 중첩된 하위 라우트 컴포넌트를 렌더링하기 위한 Outlet 가져오기

const Layout = () => {
  return (
    <>
      {/* Outlet은 중첩된 라우트 컴포넌트를 렌더링하는 자리입니다. */}
      <Outlet /> {/* 각 페이지의 콘텐츠가 여기에 표시됨 */}
    </>
  );
};

export default Layout;
