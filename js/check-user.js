const loginName = document.querySelectorAll(".login-form input");
const loginForm = document.querySelector(".login-form");
const loggedInPage = document.querySelector(".loggedin-Page");

let userNumber = 1;
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
    alert("Permisstion Denied");
  } else {
    loginForm.classList.add(HIDE_ELEMENT_CLASS);
    loggedInPage.classList.remove(HIDE_ELEMENT_CLASS);
    loggedInPage.innerText = `Welcome ${userName}`;
  }
}

document.addEventListener("submit", checkUserName);
