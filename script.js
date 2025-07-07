// 슬라이드 쇼 구현
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // 모든 슬라이드를 숨김
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;  // 슬라이드 인덱스 증가

  if (slideIndex > slides.length) {
    slideIndex = 1;  // 슬라이드가 끝나면 처음으로 돌아감
  }

  slides[slideIndex - 1].style.display = "block"; // 현재 슬라이드를 표시

  setTimeout(showSlides, 3000); // 3초마다 슬라이드를 변경
}

// 디데이 카운트다운
function updateCountdown() {
  const weddingDate = new Date("2025-10-25T14:00:00");  // 결혼식 날짜 설정
  const currentDate = new Date();
  const timeDifference = weddingDate - currentDate;

  if (timeDifference <= 0) {
    document.getElementById("countdown").innerHTML = "결혼식이 진행 중입니다! 🎉";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // 디데이 시간 표시
  document.getElementById("countdown").innerHTML = `결혼까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;

  setTimeout(updateCountdown, 1000); // 1초마다 업데이트
}

// 초기화
showSlides();  // 슬라이드 쇼 시작
updateCountdown();  // 디데이 카운트다운 시작
