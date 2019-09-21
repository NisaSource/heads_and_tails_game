(function() {
  const coinArrays = ["Heads", "Tails"];
  const message = document.querySelector(".message");
  const buttons = document.querySelectorAll("button");
  let score = [0, 0];
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", coinGame);
  }
  function coinGame(e) {
    let playerGuess = e.target.innerText;
    let comp = Math.floor(Math.random() * 2);
    let compGuess = coinArrays[comp];
    message.innerHTML = "Computer has selected :" + compGuess + "<br>";
    let output;

    if (playerGuess === compGuess) {
      output = "Player Wins";
      score[0]++;
    } else {
      output = "Computer Wins";
      score[1]++;
    }
    message.innerHTML +=
      output + "<br>Player : " + score[0] + " Computer :" + score[1];
  }
})();
