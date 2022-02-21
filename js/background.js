import { imgName } from "./setup.js";

const imgName = [
  "erol-ahmed-_CeW6TRUWws-unsplash.jpg",
  "jisun-han-j0FFILuZPms-unsplash.jpg",
  "mostafa-meraji-2DZ9vXU2bHo-unsplash.jpg",
  "pavel-nekoranec-uEOA8TCQ_V8-unsplash.jpg",
  "stefania-chihaia-k8j_c0stpt8-unsplash.jpg",
];

const randomImg = imgName[Math.floor(Math.random() * imgName.length)];

const currentImg = document.createElement("img");
currentImg.src = `img/${randomImg}`;

const mainPage = document.querySelector(".main-page");
mainPage.insertBefore(currentImg, mainPage.firstChild);
currentImg.classList.add("background-img");

// background.style.background = `url('img/${randomImg}')`;
