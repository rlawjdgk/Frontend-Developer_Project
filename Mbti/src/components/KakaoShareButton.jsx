// React 및 useEffect 훅, Button 컴포넌트 불러오기
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// Kakao 객체를 window에서 가져오기
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  // 공유할 URL 설정 (기본 URL 및 현재 페이지 URL)
  const url = "https://mbtiapptest.netlify.app/"; // 공유 테스트의 메인 페이지 URL
  const resultURL = window.location.href; // 결과 페이지의 URL

  // Kakao SDK 초기화
  useEffect(() => {
    Kakao.cleanup(); // 기존에 초기화된 Kakao 객체 정리
    Kakao.init("c6c0e958024d40e9d596734f1e0f4f5e"); // Kakao 앱 키로 SDK 초기화
  }, []);

  // 카카오톡 공유 기능 실행 함수
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed", // 공유 메시지의 형식 (피드 타입)
      content: {
        title: "MBTI 검사 결과", // 공유 메시지 제목
        description: `가장 잘 맞는 캐릭터는 ${data.name} 입니다.`,
        imageUrl: `${url}${data.image}`, // 이미지 URL (메인 URL과 이미지 경로 결합)
        link: {
          mobileWebUrl: resultURL, // 모바일 웹에서 결과 페이지 링크
          webUrl: resultURL, // PC 웹에서 결과 페이지 링크
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기", // 버튼에 표시될 텍스트
          link: {
            mobileWebUrl: url, // 모바일 웹 링크
            webUrl: url, // PC 웹 링크
          },
        },
      ],
    });
  };

  // 공유 버튼 UI (클릭 시 shareKakao 함수 실행)
  return (
    <Button variant="warning" onClick={shareKakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
