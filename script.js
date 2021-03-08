const backButton = document.getElementById("btnBackSignup");
const signUpShow = document.getElementById("sign-in");
const logInShow = document.getElementById("login");
const buttons = document.getElementById("buttons");
const logIn = document.getElementById("loginButton");
const accountNav = document.getElementById("settings");
const logOut = document.getElementById("btnLogout");
//todos
const inputItem = document.getElementById("todo");
const buttonItem = document.getElementById("buttonItem");
const outputItem = document.getElementById("outputItem");
const todoElement= document.getElementById("toDoList");
//todo array
var todoArr = [];
let user= {
  email: "test.email.com",
  password: "12345"
}
const userEmail = document.getElementById("inputEmail");
const userPass = document.getElementById("loginPassword");


//hide elements
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
  if (userEmail.value == user.email && userPass.value == user.password){
    hideButtons();
    logInShow.classList.add("hide");
    accountNav.classList.remove("hide");
    todoElement.classList.remove("hide")
  }
};

logOutButton = () => {
  accountNav.classList.add("hide");
  buttons.classList.remove("hide");
  todoElement.classList.add("hide")
};
//add todo items
buttonItem.onclick = function () {
  if (inputItem.value != "") {
    todoArr.push(inputItem.value);
    displayTask();
    inputItem.value="";
  }
};

const elemetCheck= document.getElementById('elemetCheck')

function displayTask(){
  outputItem.innerHTML = "";
  for(var i = 0; i < todoArr.length; i++){
    outputItem.innerHTML += `
    <div class="element" ><input type= "checkbox" id="elemetCheck" onclick="onCheck()"/> ${todoArr[i]}</div>`
  }
}
onCheck =() =>{
  if(true){
    outputItem.style.textDecorationLine = "line-through";

  }
}
