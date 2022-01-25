import { imgName } from "./setup.js";

const randomImg = imgName[Math.floor(Math.random() * imgName.length)];

const currentImg = document.createElement("img");
currentImg.src = `img/${randomImg}`;

document.body.appendChild(currentImg);
