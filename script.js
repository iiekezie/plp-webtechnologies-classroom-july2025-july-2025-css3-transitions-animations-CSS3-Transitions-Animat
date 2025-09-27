// Scope Example
let globalMessage = "I am global!";

function showMessage(localMessage) {
  let localVar = "I am local!";
  console.log(globalMessage); // Global scope accessible
  console.log(localMessage);  // Parameter accessible
  console.log(localVar);      // Local scope
  return `Combined Message: ${globalMessage} & ${localMessage}`;
}
console.log(showMessage("Passed as Parameter"));

// Triggering CSS animations with JS
document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
});

// Dynamic animation with inline style
document.getElementById("startAnimation").addEventListener("click", function () {
  const circle = document.getElementById("circle");
  circle.style.animation = "expand 3s ease-in-out forwards";
});
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes expand {
    0% { transform: scale(1); }
    100% { transform: scale(2); }
  }
`, styleSheet.cssRules.length);

// Pause & resume animation
const movingBox = document.getElementById("movingBox");
document.getElementById("pause").addEventListener("click", () => {
  movingBox.style.animationPlayState = "paused";
});
document.getElementById("resume").addEventListener("click", () => {
  movingBox.style.animationPlayState = "running";
});

// Modal with animation
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Form validation
document.getElementById("sampleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  let valid = true;
    if (name.length < 3) {
    valid = false;
    alert("Name must be at least 3 characters long.");
  }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
    valid = false;
    alert("Please enter a valid email address.");
  }
  if (valid) {
    alert("Form submitted successfully!");
  }
});

// Local Storage
document.getElementById("save").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  alert("Data saved to local storage!");
});

document.getElementById("load").addEventListener("click", function () {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  alert("Data loaded from local storage!");
});