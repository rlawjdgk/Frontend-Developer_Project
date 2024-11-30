// 로그아웃 함수
function logout() {
  // 로그아웃 로직 (예: 세션 종료 또는 로컬 스토리지 지우기)
  // 이 예시에서는 단순히 로그아웃 후 홈 페이지로 이동
  alert("로그아웃 되었습니다.");
  // 세션 종료 또는 로컬 스토리지 클리어 코드 추가 가능
  window.location.href = "/login"; // 로그인 페이지로 리디렉션
}

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
function logout() {
  alert("로그아웃 되었습니다.");
  window.location.href =
    "https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwis7qiBxvSJAxV_lK8BHZppOnQQPAgI"; // 로그인 페이지로 리디렉션
}

// 페이지 로딩 시 사용자 정보 표시
document.addEventListener("DOMContentLoaded", displayWelcomeMessage);
