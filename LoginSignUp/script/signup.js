const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("passwordCheck");

const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");
const passwordCheckMessage = document.getElementById("passwordCheckMessage");

// 이메일 유효성 검사
emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    emailMessage.textContent = "사용 가능한 이메일입니다.";
    emailMessage.classList.add("valid");
    emailMessage.classList.remove("invalid");
  } else {
    emailMessage.textContent = "이메일이 형식에 맞지 않습니다.";
    emailMessage.classList.remove("valid");
    emailMessage.classList.add("invalid");
  }
});

// 비밀번호 유효성 검사
passwordInput.addEventListener("input", () => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passwordRegex.test(passwordInput.value)) {
    passwordMessage.textContent = "사용 가능한 비밀번호입니다.";
    passwordMessage.classList.add("valid");
    passwordMessage.classList.remove("invalid");
  } else {
    passwordMessage.textContent = "영문, 숫자, 특수문자를 포함해주세요.";
    passwordMessage.classList.remove("valid");
    passwordMessage.classList.add("invalid");
  }
});

// 비밀번호 확인 검사
passwordCheckInput.addEventListener("input", () => {
  if (passwordCheckInput.value === "") {
    // 아무것도 입력되지 않았을 때 메시지 삭제
    passwordCheckMessage.textContent = "";
    passwordCheckMessage.classList.remove("valid", "invalid");
  } else if (passwordCheckInput.value === passwordInput.value) {
    // 비밀번호가 동일할 때
    passwordCheckMessage.textContent = "동일한 비밀번호입니다.";
    passwordCheckMessage.classList.add("valid");
    passwordCheckMessage.classList.remove("invalid");
  } else {
    // 비밀번호가 일치하지 않을 때
    passwordCheckMessage.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheckMessage.classList.remove("valid");
    passwordCheckMessage.classList.add("invalid");
  }
});
