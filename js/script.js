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

  const sound = document.getElementById("surpriseSound");

  const timer = setInterval(() => {
    c--;
    el.textContent = c;

    if (c === 0) {
      clearInterval(timer);
      el.innerHTML = "ChomChom Don't Forget You Are The Best😊...I Love You So Much, Chomchom 😙💖";

      if (sound) {
        sound.volume = 0.5;
        sound.play().catch(() => {});
      }
    }
  }, 1000);
}



/* ========================= */
/* 🎵 BACKGROUND MUSIC       */
/* ========================= */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {
  bgMusic.volume = 0.3;

  // restore previous state
  if (localStorage.getItem("music") === "on") {
    bgMusic.play().catch(() => {});
    musicBtn.textContent = "🔈";
  }

  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      localStorage.setItem("music", "on");
      musicBtn.textContent = "🔈";
    } else {
      bgMusic.pause();
      localStorage.setItem("music", "off");
      musicBtn.textContent = "🔊";
    }
  });
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
