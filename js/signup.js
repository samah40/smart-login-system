var signUpNameInput = document.getElementById("signUpName");
var signUpEmailInput = document.getElementById("signUpEmail");
var signUpPasswordInput = document.getElementById("signUpPassword");
var signUpBtn = document.getElementById("signUpBtn");

var accountList = JSON.parse(localStorage.getItem("accountContainer"));
if (localStorage.getItem("accountContainer") !== null) {
  accountList = JSON.parse(localStorage.getItem("accountContainer"));
}

signUpBtn.addEventListener("click", function addAccount() {
  var account = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPasswordInput.value,
  };

  if (validationSignup(account) && checkEmailExist(account)) {
    accountList.push(account);

    localStorage.setItem("accountContainer", JSON.stringify(accountList));
    clearForm();
    var successMsg = document.getElementById("successMsg");
    successMsg.classList.remove("d-none");
  }
});

function checkEmailExist(account) {
  for (let i = 0; i < accountList.length; i++) {
    if (accountList[i].email == account.email) {
      let existMsg = document.getElementById("existMsg");
      existMsg.classList.remove("d-none");
      return false;
    }
  }
  existMsg.classList.add("d-none");
  return true;
}

function validationSignup(account) {
  var requiredMsg = document.getElementById("requiredMsg");

  if (account.name == "" && account.email == "" && account.password == "") {
    requiredMsg.classList.remove("d-none");

    return false;
  } else {
    requiredMsg.classList.add("d-none");

    return true;
  }
}

function clearForm() {
  signUpNameInput.value = null;
  signUpEmailInput.value = null;
  signUpPasswordInput.value = null;
}
