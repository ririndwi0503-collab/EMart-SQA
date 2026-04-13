function register() {
    let username = document.getElementById("userbaru").value;
    let password = document.getElementById("passbaru").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registrasi berhasil!");
    window.location.href = "login.html";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        alert("Login berhasil!");
        window.location.href = "home.html"; // 🔥 Kriteria 9
    } else {
        alert("Username atau password salah!");
    }
}

function cancel() {
    window.location.href = "login.html";
}
