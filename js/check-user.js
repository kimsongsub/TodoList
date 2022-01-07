const loginName = document.querySelectorAll(".login-form input");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loggedInPage = document.querySelector(".loggedin-Page");

let userNumber = 1;

//Log-in form
function checkUserName(event) {
  event.preventDefault();
  const userName = loginName[0].value;
  const userPW = loginName[1].value;
  const HIDE_ELEMENT_CLASS = "hideElement";

  if (localStorage.getItem(userName) === null) {
    // localStorage.setItem(userName, userNumber);
    // userNumber += 1;
    alert("There is no Name Here");
  } else if (localStorage.getItem(userName) !== userPW) {
    alert("Wrong PW, Permisstion Denied");
  } else {
    loginForm.classList.add(HIDE_ELEMENT_CLASS);
    signupForm.classList.add(HIDE_ELEMENT_CLASS);
    loggedInPage.classList.remove(HIDE_ELEMENT_CLASS);
    loggedInPage.innerText = `Welcome ${userName}`;
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
      undifinedUserPWInput.value
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
