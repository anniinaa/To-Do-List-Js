const backButton = document.getElementById("btnBackSignup");
const signUpShow = document.getElementById("sign-in");
const logInShow = document.getElementById("login");
const buttons = document.getElementById("buttons");

signUpButton = () => {
    hideButtons();
  signUpShow.classList.remove("hide");
};
goBack = () => {
  signUpShow.classList.add("hide");
  logInShow.classList.add("hide");
  buttons.classList.remove('hide');

};

logInButton = () => {
    hideButtons();
  logInShow.classList.remove("hide");
};

hideButtons=() =>{
    buttons.classList.add('hide');
}
