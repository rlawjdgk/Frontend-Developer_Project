// 이메일을 잊으셨나요 기능
const input = document.querySelector(".input");
const mailFind = document.querySelector(".mailFind");

// 이벤트 리스너 추가
input.addEventListener("focus", () => {
  mailFind.style.color = "#2196f3"; // 클릭 시 색상 변경
});

input.addEventListener("blur", () => {
  mailFind.style.color = "#888"; // 포커스 해제 시 원래 색상으로 복원
});

// 메일 또는 전화번호 유효성 검사
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form"); // 폼 요소 선택
  const usernameInput = document.getElementById("username"); // 이메일/전화번호 입력 필드

  // 이메일 정규식 패턴
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 전화번호 정규식 패턴 (예: +82-010-1234-5678 또는 010-1234-5678)
  const phoneRegex = /^(?:\+82|01[0-9])[-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$/;

  // 폼 제출 시 유효성 검사
  loginForm.addEventListener("submit", (event) => {
    const usernameValue = usernameInput.value.trim();

    if (!emailRegex.test(usernameValue) && !phoneRegex.test(usernameValue)) {
      event.preventDefault(); // 폼 제출 방지
      alert("이메일 또는 전화번호 형식이 올바르지 않습니다.");
      usernameInput.focus(); // 입력 필드로 포커스 이동
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form"); // 폼 요소 선택
  const usernameInput = document.getElementById("username"); // 이메일/전화번호 입력 필드
  const nextButton = document.querySelector(".nextButton"); // "다음" 버튼

  // 이메일/전화번호 입력 필드에서 Enter 키 눌렀을 때
  usernameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 Enter 키 동작 방지
      nextButton.click(); // "다음" 버튼 클릭
    }
  });
});
