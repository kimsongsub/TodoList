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

document.body.appendChild(currentImg);
