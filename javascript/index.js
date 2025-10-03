document
  .getElementById("formcreate")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const cfpassword = document.getElementById("cfpassword").value.trim();

    if (password !== cfpassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      alert("Username already exists!");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html";
  });
