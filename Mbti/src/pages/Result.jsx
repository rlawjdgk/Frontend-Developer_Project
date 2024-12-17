import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { ResultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  color: #111;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  padding: 8px 14px;
  font-size: 24px;
  text-align: center;
  background: black;
  border-radius: 8px;
  color: #fff;
`;

const ButtonGoup = styled.div`
  display: flex;
  gap: 10px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({}); // 결과 데이터를 저장하는 state
  const [searchParams] = useSearchParams(); // URL에서 쿼리 파라미터를 가져옴
  const mbti = searchParams.get("mbti"); // "mbti"라는 키의 파라미터 값을 가져옴
  const navigate = useNavigate(); // 페이지 이동을 위한 함수

  const handleClickButton = () => {
    navigate("/"); // 메인 페이지("/")로 이동
  };

  useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti); // ResultData에서 mbti와 일치하는 결과를 찾음
    setResultData(result); // 찾은 결과를 state에 저장
  }, [mbti]); // mbti 값이 변경될 때마다 실행

  return (
    <Wrapper>
      <Header>나랑 가장 잘 맞는 캐릭터는?</Header>
      <Contents>
        <LogoImg>
          <img className="rounded-circle" src={resultData.image} />
        </LogoImg>
        <Desc>
          나랑 가장 잘 맞는 캐릭터는 {resultData.best}형 {resultData.name}
          입니다.
        </Desc>
        <ButtonGoup>
          <Button variant="secondary" onClick={handleClickButton}>
            다시시작하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGoup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
