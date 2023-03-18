const _pong = $("#pong");
const _playerPadel = $("#player-padel");
const _aiPadel = $("#ai-padel");
const _ball = $("#ball");
const _restart = $("#restart");

const UP_LEFT = (-3 * Math.PI) / 4;
const UP_RIGHT = -Math.PI / 4;
const DOWN_LEFT = (3 * Math.PI) / 4;
const DOWN_RIGHT = Math.PI / 4;

let interval = null;
let aiPadel = null;
let ball = null;

_restart.click(function () {
  init();
});

function init() {
  aiPadel = {
    direction: 1,
    SPEED: 1,
    top: 0,
  };

  ball = {
    top: 240,
    left: 460,
    angle: UP_LEFT,
    speed: 5,
  };

  interval = setInterval(update, 20);
}

_pong.mousemove(function (evt) {
  if (!interval) {
    return;
  }
  const top = Math.min(
    _pong.height() - _playerPadel.height(),
    evt.pageY - _pong.offset().top
  );
  _playerPadel.css({
    top: `${top}px`,
  });
});

function update() {
  updateBall();
  updateAiPadel();
}

function updateBall() {
  ball.top += ball.speed * Math.sin(ball.angle);
  ball.left += ball.speed * Math.cos(ball.angle);
  _ball.css({
    top: `${ball.top}px`,
    left: `${ball.left}px`,
  });

  if (isBallOverlappingWithPlayerPadel()) {
    if (ball.angle === UP_LEFT) {
      ball.angle = UP_RIGHT;
    } else {
      ball.angle = DOWN_RIGHT;
    }
  }

  if (isBallOverlappingWithAiPadel()) {
    if (ball.angle === UP_RIGHT) {
      ball.angle = UP_LEFT;
    } else {
      ball.angle = DOWN_LEFT;
    }
  }

  if (isBallOverlappingWithTop()) {
    if (ball.angle === UP_RIGHT) {
      ball.angle = DOWN_RIGHT;
    } else {
      ball.angle = DOWN_LEFT;
    }
  }

  if (isBallOverlappingWithBottom()) {
    if (ball.angle === DOWN_RIGHT) {
      ball.angle = UP_RIGHT;
    } else {
      ball.angle = UP_LEFT;
    }
  }

  const winner = getWinner();
  if (winner) {
    endGame(winner);
  }
}

function endGame(winner) {
  clearInterval(interval);
  interval = null;
  alert(`${winner} has won the game!`);
}

function isBallOverlappingWithPlayerPadel() {
  return _ball.overlaps("#player-padel").length > 0;
}

function isBallOverlappingWithAiPadel() {
  return _ball.overlaps("#ai-padel").length > 0;
}

function isBallOverlappingWithTop() {
  return ball.top <= 0;
}

function isBallOverlappingWithBottom() {
  return ball.top >= _pong.height() - _ball.height();
}

function updateAiPadel() {
  if (aiPadel.top > _pong.height() - _aiPadel.height()) {
    aiPadel.direction = -1;
  }

  if (aiPadel.top < 0) {
    aiPadel.direction = 1;
  }

  aiPadel.top += aiPadel.direction * aiPadel.SPEED;

  _aiPadel.css({
    top: `${aiPadel.top}px`,
  });
}

function getWinner() {
  if (ball.left < 0) {
    return "red";
  } else if (ball.left > _pong.width() - _ball.width()) {
    return "blue";
  } else {
    return false;
  }
}

init();
