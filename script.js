const backButton = document.getElementById("btnBackSignup");
const signUpShow = document.getElementById("sign-in");
const logInShow = document.getElementById("login");
const buttons = document.getElementById("buttons");
const logIn = document.getElementById("loginButton");
const accountNav = document.getElementById("settings");
const logOut = document.getElementById("btnLogout");



showToDoList = signUpButton = () => {
  hideButtons();
  signUpShow.classList.remove("hide");
};
goBack = () => {
  signUpShow.classList.add("hide");
  logInShow.classList.add("hide");
  buttons.classList.remove("hide");
};

logInButton = () => {
  hideButtons();
  logInShow.classList.remove("hide");
};

hideButtons = () => {
  buttons.classList.add("hide");
};

loggedIn = () => {
  hideButtons();
  logInShow.classList.add("hide");
  accountNav.classList.remove("hide");
};
logOutButton = () => {
  logIn.classList.add('hide')
  accountNav.classList.add('hide')
  buttons.classList.remove("hide");
}
