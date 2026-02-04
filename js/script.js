/* ========================= */
/* 🌸 FADE ON SCROLL         */
/* ========================= */

const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
});

/* ========================= */
/* ✍️ TYPING EFFECT (TITLE)  */
/* ========================= */

function typeText(el, text, speed = 80) {
  let i = 0;
  el.innerHTML = "";
  const timer = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}

/* ========================= */
/* 💌 LOVE LETTER TYPING     */
/* ========================= */

function typeLetter(el, text, speed = 45) {
  let i = 0;
  el.innerHTML = "";
  const timer = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}

/* ========================= */
/* 🎉 COUNTDOWN (FINAL PAGE) */
/* ========================= */

function startCountdown(el) {
  let c = 3;
  el.textContent = c;
  const timer = setInterval(() => {
    c--;
    el.textContent = c;
    if (c === 0) {
      clearInterval(timer);
      el.innerHTML = "I Love You So Much, Chomchom 💖";
    }
  }, 1000);
}

/* ========================= */
/* 🎵 BACKGROUND MUSIC       */
/* ========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
  musicBtn.onclick = () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "🔈";
    } else {
      music.pause();
      musicBtn.textContent = "🔊";
    }
  };
}

/* ========================= */
/* ⏰ CLOCK (HOME PAGE ONLY) */
/* ========================= */

let seconds = 0;
const secondHand = document.getElementById("secondHand");
const clockWrapper = document.getElementById("clockWrapper");
const mainContent = document.getElementById("mainContent");

if (secondHand && clockWrapper && mainContent) {
  const clockTimer = setInterval(() => {
    seconds++;

    // rotate second hand
    secondHand.style.transform =
      `translateX(-50%) rotate(${seconds * 36}deg)`;

    // after 10 seconds
    if (seconds === 10) {
      clearInterval(clockTimer);

      clockWrapper.style.display = "none";
      mainContent.style.display = "block";

      // start birthday typing
      const title = document.getElementById("type");
      if (title) {
        typeText(title, "Happy Birthday, My Love 💕");
      }
    }
  }, 1000);
}
