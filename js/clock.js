const clock = document.querySelector(".main-page #clock");

function setClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  let text = "오전";

  if (hours >= 12) {
    hours = hours - 12;
    text = "오후";
  }

  clock.innerText = `현재시간 \n${text} ${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(setClock, 1000);
