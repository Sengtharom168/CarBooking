document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (validUser) {
    alert("Login successful!");
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "homepage.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
