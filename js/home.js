var accountList = JSON.parse(localStorage.getItem("accountContainer"));

var currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
var LogoutBtn = document.getElementById("LogoutBtn");
var welcomeMsg = document.getElementById("welcomeMsg");

window.addEventListener("DOMContentLoaded", function () {
  var user = null;
  for (let i = 0; i < accountList.length; i++) {
    if (accountList[i].email == currentAccount) {
      user = accountList[i].name;
     

      break;
    }
  }


  if (user) {
    welcomeMsg.textContent = "welcome, " + user;
  } else {
    welcomeMsg.textContent = "welcome, guest";
  }
});

LogoutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
