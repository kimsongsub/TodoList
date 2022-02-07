import { imgName } from "./setup.js";

const randomImg = imgName[Math.floor(Math.random() * imgName.length)];

const currentImg = document.createElement("img");
currentImg.src = `img/${randomImg}`;

const mainPage = document.querySelector(".main-page");
mainPage.insertBefore(currentImg, mainPage.firstChild);
currentImg.classList.add("background-img");

// background.style.background = `url('img/${randomImg}')`;
