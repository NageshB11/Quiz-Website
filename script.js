
var users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if (users.some(user => user.email === email)) {
    alert("Email already exists. Please use a different email.");
    return;
  }
  
  users.push({ email: email, password: password });
  
  localStorage.setItem("users", JSON.stringify(users));
  
  window.location.href = "index.html";
}
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });
  
  if (user) {
    window.location.href = "start.html";
  } else {
    alert("Incorrect email or password. Please try again.");
  }
}

