// 로그인 사용자 정보
const user = {
  username: "홍길동", // 로그인한 사용자 이름
  email: "example@gmail.com", // 사용자 이메일
  joinDate: "2022-05-01", // 사용자 회원가입 날짜
  profileImage: "user-profile.jpg", // 프로필 이미지 경로
};

// 환영 메시지 업데이트
function displayWelcomeMessage() {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const userEmail = document.getElementById("userEmail");
  const joinDate = document.getElementById("joinDate");
  const userImage = document.getElementById("userImage");

  // 환영 메시지
  welcomeMessage.innerText = `안녕하세요, ${user.username}님! 로그인에 성공하셨습니다.`;

  // 이메일
  userEmail.innerText = `이메일: ${user.email}`;

  // 회원가입 날짜
  joinDate.innerText = `회원가입일: ${user.joinDate}`;

  // 프로필 이미지
  userImage.src = user.profileImage;
}

// 로그아웃 함수
function login() {
  alert("로그인하러 가시겠습니까?");
  window.location.href = "../html/login.html"; // 로그인 페이지로 리디렉션
}

// 페이지 로딩 시 사용자 정보 표시
document.addEventListener("DOMContentLoaded", displayWelcomeMessage);
