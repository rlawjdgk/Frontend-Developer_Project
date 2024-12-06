// Header Nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// ScrollTo
$(".gototop, .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 800);
});

const sliderWrap = document.querySelector(".slider_wrap");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// 슬라이드 이동 함수
function updateSlidePosition() {
  const offset = currentIndex * -100;
  sliderWrap.style.transform = `translateX(${offset}%)`;
}

// 모바일에서만 슬라이드 기능 활성화
function activateSlider() {
  const isMobile = window.innerWidth <= 390;

  if (isMobile) {
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  } else {
    prevButton.removeEventListener("click", handlePrevClick);
    nextButton.removeEventListener("click", handleNextClick);
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    // 슬라이더 초기화
    sliderWrap.style.transform = "translateX(0)";
    currentIndex = 0;
  }
}

// 이전 버튼 동작
function handlePrevClick() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlidePosition();
}

// 다음 버튼 동작
function handleNextClick() {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlidePosition();
}

// 화면 크기 변경 시 슬라이더 상태 업데이트
window.addEventListener("resize", activateSlider);

// 초기 상태 설정
activateSlider();
