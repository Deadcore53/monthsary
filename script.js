const herName = "Jasel"; // CHANGE THIS ❤️

const text = document.getElementById("text");
const final = document.querySelector(".final");
const music = document.getElementById("music");

let step = 0;

const messages = [
  `Happy Monthsary, ${herName} ❤️`,
  "Another month with you…",
  "And I still choose you every single day 🥺",
  "Thank you for loving me, for your care and patience",
  "For all the laughs and little moments",
  "You make my days brighter 💕",
  `I’m so lucky to have you, ${herName} 💖`,
  "I’m so grateful for you 💖"
];

function nextMessage() {
  music.play();

  // 📳 Phone vibration (mobile)
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }

  if (step < messages.length) {
    text.innerText = messages[step];
    step++;
  } else {
    text.style.display = "none";
    final.classList.remove("hidden");
  }
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
