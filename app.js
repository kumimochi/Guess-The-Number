let number = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

document.querySelector(".btn-guess").addEventListener("click", () => {
  const guess = Number(document.querySelector("#guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = number;
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Higher!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game over!";
      document.querySelector("#score").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Lower!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game over!";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 10;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("#score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
