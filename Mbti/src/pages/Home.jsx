import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 가져오기
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 스타일 불러오기
import { Button } from "react-bootstrap"; // Bootstrap의 버튼 컴포넌트 사용

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #000;
`;

const Header = styled.div`
  img {
    width: 500px;
    height: 170px;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin: 20px 0 50px;
`;

const Home = () => {
  const navigate = useNavigate(); // 페이지 이동을 위해 useNavigate 훅 사용

  // 버튼 클릭 시 실행되는 함수
  const handleClickButton = () => {
    navigate("/question"); // '/question' 경로로 이동
  };
  return (
    <Wrapper>
      {/* 상단 이미지 영역 */}
      <Header>
        <img src="../img/title.png" alt="title" /> {/* 타이틀 이미지 삽입 */}
      </Header>
      {/* 메인 콘텐츠 영역 */}
      <Contents>
        <Title>나와 잘 맞는 캐릭터는?</Title> {/* 페이지 제목 출력 */}
        {/* 시작하기 버튼 */}
        <Button variant="danger" size="lg" onClick={handleClickButton}>
          시작하기
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
