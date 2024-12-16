import React from "react";
import Header from "./conmponents/header";
import styled from "styled-components";
import Home from "./conmponents/Home";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderWrap = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <HeaderWrap>
        <Header />
      </HeaderWrap>
      <Home />
    </Wrapper>
  );
};

export default App;
