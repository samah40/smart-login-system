let signinEmailInput = document.getElementById("signinEmail");
let signinPasswordInput = document.getElementById("signinPassword");
let signinBtnInput = document.getElementById("signinBtn");


var accountList = [];
var accountList = JSON.parse(localStorage.getItem("accountContainer"));

signinBtnInput.addEventListener("click", function addAccount() {
  var account = {
    email: signinEmailInput.value,
    password: signinPasswordInput.value,
  };
  if (validationSignup(account)) {
    for (let i = 0; i < accountList.length; i++) {
      if (
        accountList[i].email == account.email &&
        accountList[i].password == account.password
      ) {
        var currentAccount = localStorage.setItem(
          "currentAccount",
          JSON.stringify(accountList[i].email)
        );
        window.location.href = "home.html";
        return;
      }
    }
  }
});

function validationSignup(account) {
  var requiredMsg = document.getElementById("requiredMsg");
  if (account.email == "" && account.password == "") {
    requiredMsg.classList.remove("d-none");
    return false;
  } else {
    return true;
  }
}

function clearForm() {
  signUpNameInput.value = null;
  signUpEmailInput.value = null;
  signUpPasswordInput.value = null;
}
