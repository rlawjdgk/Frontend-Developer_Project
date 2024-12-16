import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  border: 1px solid red;
`;

const Home = () => {
  return (
    <Wrapper>
      <Inner>Home</Inner>
    </Wrapper>
  );
};

export default Home;
