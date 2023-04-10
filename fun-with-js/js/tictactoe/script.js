let o_fields = [];
let x_fields = [];
let current_shape = "circle";
let winner = "";
let winnersFields = [];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function start() {
  playerOnMove();

  /**to replace transform value when drawing line */
  document.getElementById("line-0").style.transform = "scaleX(0)";
  document.getElementById("line-1").style.transform = "scaleX(0)";
  document.getElementById("line-2").style.transform = "scaleX(0)";
  document.getElementById("line-3").style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById("line-4").style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById("line-5").style.transform = "rotate(90deg) scaleX(0)";
  document.getElementById("line-6").style.transform = "rotate(45deg) scaleX(0)";
  document.getElementById("line-7").style.transform =
    "rotate(135deg) scaleX(0)";
}

function fillField(field) {
  if (
    !document.getElementById("field-" + field).classList.contains("disabled-td")
  ) {
    if (current_shape == "cross") {
      current_shape = "circle";
      o_fields.push(field);
    } else {
      current_shape = "cross";
      x_fields.push(field);
    }

    disableField(field);
    drawShapeAt(field);
    checkWin();
    playerOnMove();
  }
}

function playerOnMove() {
  if (current_shape == "cross") {
    document.getElementById("x-player-info").style.opacity = 0.5;
    document.getElementById("o-player-info").style.opacity = 1;
  } else {
    document.getElementById("x-player-info").style.opacity = 1;
    document.getElementById("o-player-info").style.opacity = 0.5;
  }
}

function drawShapeAt(field) {
  if (x_fields.includes(field)) {
    document.getElementById("field-" + field).style.backgroundImage =
      'url("assets/cross.png")';
  } else {
    document.getElementById("field-" + field).style.backgroundImage =
      'url("assets/circle.png")';
  }
}

function disableField(field) {
  document.getElementById("field-" + field).classList.add("disabled-td");
}

function checkWin() {
  /**check for winner */
  for (i = 0; i < winningCombinations.length; i++) {
    if (
      x_fields.includes(winningCombinations[i][0]) &&
      x_fields.includes(winningCombinations[i][1]) &&
      x_fields.includes(winningCombinations[i][2])
    ) {
      winner = "cross";
      winnersFields = winningCombinations[i];
    } else if (
      o_fields.includes(winningCombinations[i][0]) &&
      o_fields.includes(winningCombinations[i][1]) &&
      o_fields.includes(winningCombinations[i][2])
    ) {
      winner = "circle";
      winnersFields = winningCombinations[i];
    }
  }

  if (winner) {
    draw(winningCombinations.indexOf(winnersFields));
    addScore(winner);
    showWinnerContainer(winner);
  } else if (x_fields.length + o_fields.length == 9) {
    showWinnerContainer("draw");
  }
}

function draw(lineNo) {
  const line = document.getElementById("line-" + lineNo);

  line.style.transitionDuration = "225ms";

  setTimeout(() => {
    line.style.transform = line.style.transform.replace(
      "scaleX(0)",
      "scaleX(1)"
    );
  }, 0);
}

function showWinnerContainer(winner) {
  const winnerContainer = document.getElementById("winning-container");

  /**animation */
  setTimeout(() => {
    document.getElementById("x-player-info").style.opacity = 1;
    document.getElementById("o-player-info").style.opacity = 1;
  }, 1);

  winnerContainer.classList.remove("hide");
  winnerContainer.style.opacity = 0;
  setTimeout(() => {
    winnerContainer.style.opacity = 1;
  }, 750);

  updateWinnerContainerGraphics(winner);
}

function updateWinnerContainerGraphics(winner) {
  const winnerContainerImage = document.getElementById("winning-container-img");
  const winnerTopLabel = document.getElementById("winning-container-top-label");
  const winnerBottomLabel = document.getElementById(
    "winning-container-bottom-label"
  );

  if (winner == "draw") {
    winnerContainerImage.classList.add("hide");
    winnerTopLabel.innerHTML = `It's a`;
    winnerBottomLabel.innerHTML = "Draw!";
  } else {
    winnerContainerImage.classList.remove("hide");
    winnerTopLabel.innerHTML = "Player";
    winnerBottomLabel.innerHTML = "won!";
    document.getElementById("winning-container-img").src =
      "assets/" + winner + ".png";
  }
}

function addScore(to) {
  document.getElementById(to + "-player-wins").innerHTML =
    Number(document.getElementById(to + "-player-wins").innerHTML) + 1;
}

function reset() {
  document.getElementById("winning-container").classList.add("hide");

  playerOnMove();
  resetFields();
  resetValues();
}

function resetValues() {
  x_fields = [];
  o_fields = [];
  current_shape = winner;
  winner = "";
  winnersFields = [];
}

function resetFields() {
  for (i = 0; i < 9; i++) {
    if (i != 8) {
      document.getElementById("line-" + i).style.transitionDuration = "0ms";
      document.getElementById("line-" + i).style.transform = document
        .getElementById("line-" + i)
        .style.transform.replace("scaleX(1)", "scaleX(0)");
    }
    document.getElementById("field-" + i).style.backgroundImage = "";
    document.getElementById("field-" + i).classList.remove("disabled-td");
  }
}
