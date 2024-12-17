import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #111;
`;

const Title = styled.div`
  font-size: 28px;
  width: auto;
  text-align: center;
  margin-bottom: 10px;
  padding: 16px 16px;
  background: #fff;
  border-radius: 8px;

  @media screen and (max-width: 780px) {
    width: 300px;
    font-size: 24px;
    padding: 6px 12px;
  }

  @media screen and (max-width: 360px) {
    width: 200px;
    font-size: 18px;
    padding: 4px 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & > button {
    width: 400px;
    height: 200px;
    font-size: 18px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 10px;
    & > button {
      width: 100%;
      height: 100%;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    padding: 10px;
    & > button {
      width: 100%;
      height: 100%;
      font-size: 18px;
    }
  }
`;

const Question = () => {
  // 현재 질문 번호 상태 관리
  const [questionNo, setQuestionNo] = useState(0);

  // 총 점수를 상태로 저장 (각 MBTI 항목에 대한 점수)
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // 페이지 이동을 위해 useNavigate 사용
  const navigate = useNavigate();

  // 버튼 클릭 시 실행되는 함수
  const handleClickButton = (no, type) => {
    // 선택된 유형(type)의 점수를 업데이트
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    // 업데이트된 점수 상태 저장
    setTotalScore(newScore);

    // 다음 질문으로 넘어가는 로직
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1); // 질문 번호 증가
    } else {
      // 모든 질문이 끝난 경우 MBTI 결과 계산
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 결과 페이지로 이동하며 MBTI 결과를 쿼리 파라미터로 전달
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <>
      {/* 진행 상태를 보여주는 ProgressBar */}
      <ProgressBar
        striped
        variant="success"
        now={(questionNo / QuestionData.length) * 100} // 진행률 계산
      />
      {/* 질문 및 버튼 렌더링 */}
      <Wrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          {/* 첫 번째 버튼 선택 시 점수 추가 */}
          <Button
            variant="outline-light"
            onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          {/* 두 번째 버튼 선택 시 점수 유지 */}
          <Button
            variant="outline-light"
            onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
