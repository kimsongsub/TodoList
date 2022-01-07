const loginName = document.querySelectorAll(".login-form input");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const mainPage = document.querySelector(".main-page");

//Log-in form
function checkUserName(event) {
  event.preventDefault();
  const userName = loginName[0].value;
  const userPW = loginName[1].value;

  if (localStorage.getItem(userName) === null) {
    alert("There is no Name Here");
  } else if (JSON.parse(localStorage.getItem(userName))[0] !== userPW) {
    alert("Wrong PW, Permisstion Denied");
  } else {
    localStorage.setItem(userName, JSON.stringify([userPW, true]));
    checkLogedIn();
  }
}

loginForm.addEventListener("submit", checkUserName);

//Sign-up form
function signupUserInfo(event) {
  event.preventDefault();
  const undifinedUserIDInput = signupForm.querySelector("#signup-id");
  const undifinedUserPWInput = signupForm.querySelector("#signup-pw");

  if (localStorage.getItem(undifinedUserIDInput.value) === null) {
    localStorage.setItem(
      undifinedUserIDInput.value,
      JSON.stringify([undifinedUserPWInput.value, false])
    );
    alert(`Sign-up Success. Try Login with "${undifinedUserIDInput.value}"`);
    undifinedUserIDInput.value = "";
    undifinedUserPWInput.value = "";
  } else {
    undifinedUserIDInput.value = "";
    alert("This ID is already exist");
  }
}

signupForm.addEventListener("submit", signupUserInfo);

//check localStorage

checkLogedIn();

function checkLogedIn() {
  const HIDE_ELEMENT_CLASS = "hideElement";
  for (let i = 0; i < localStorage.length; i++) {
    if (
      JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))[1] == true
    ) {
      loginForm.classList.add(HIDE_ELEMENT_CLASS);
      signupForm.classList.add(HIDE_ELEMENT_CLASS);
      mainPage.classList.remove(HIDE_ELEMENT_CLASS);
      const welcomeText = mainPage.querySelector("h1");
      welcomeText.innerText = `Welcome ${Object.keys(localStorage)[i]}`;

      break;
    }
  }
}
