export { logedInKey };

const loginName = document.querySelectorAll(".login-form input");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const mainPage = document.querySelector(".main-page");
const logOutForm = document.querySelector(".main-page #log-out");
const body = document.querySelector("body");

const userNameKeys = Object.keys(localStorage);
const HIDE_ELEMENT_CLASS = "hide-element";

let logedInKey = "";

//Log-in form
function logIn(event) {
  event.preventDefault();
  const userName = loginName[0].value;
  const userPW = loginName[1].value;

  if (localStorage.getItem(userName) === null) {
    alert("There is no Name Here");
    loginName[0].value = "";
    loginName[1].value = "";
  } else if (JSON.parse(localStorage.getItem(userName))[0] !== userPW) {
    alert("Wrong PW, Permisstion Denied");
    loginName[1].value = "";
  } else {
    localStorage.setItem(userName, JSON.stringify([userPW, true]));
    checkLogedIn();
  }
}

loginForm.addEventListener("submit", logIn);

function viewMainPage() {
  loginForm.classList.add(HIDE_ELEMENT_CLASS);
  signupForm.classList.add(HIDE_ELEMENT_CLASS);
  mainPage.classList.remove(HIDE_ELEMENT_CLASS);
  body.classList.remove("welcome-page-font");
  body.classList.add("main-page-font");
}

function hideMainPage() {
  loginForm.classList.remove(HIDE_ELEMENT_CLASS);
  signupForm.classList.remove(HIDE_ELEMENT_CLASS);
  mainPage.classList.add(HIDE_ELEMENT_CLASS);
  body.classList.remove("main-page-font");
  body.classList.add("welcome-page-font");
}

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
    loginName[0].value = undifinedUserIDInput.value;
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
  for (let i = 0; i < localStorage.length; i++) {
    if (JSON.parse(localStorage.getItem(userNameKeys[i]))[1] == true) {
      logedInKey = userNameKeys[i];
      const welcomeText = mainPage.querySelector("h1");
      welcomeText.innerText = `Welcome ${userNameKeys[i]}`;
      viewMainPage();
      break;
    }
  }
}

// Log out
function logOutUser() {
  for (let i = 0; i < localStorage.length; i++) {
    if (JSON.parse(localStorage.getItem(userNameKeys[i]))[1] == true) {
      localStorage.setItem(
        userNameKeys[i],
        JSON.stringify([
          JSON.parse(localStorage.getItem(userNameKeys[i]))[0],
          false,
        ])
      );
      hideMainPage();
      break;
    }
  }
}

logOutForm.addEventListener("submit", logOutUser);
