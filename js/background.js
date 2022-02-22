import { imgName } from "./setup.js";

const randomImg = imgName[Math.floor(Math.random() * imgName.length)];

const currentImg = document.createElement("img");
currentImg.src = `img/${randomImg}`;

const mainPage2 = document.querySelector(".main-page");
mainPage2.insertBefore(currentImg, mainPage2.firstChild);
currentImg.classList.add("background-img");

// background.style.background = `url('img/${randomImg}')`;
