const _board = $("#board");
const ROWS = 10;
const COLS = 10;

function createBoard(rows, cols) {
  _board.empty();
  for (let i = 0; i < rows; i++) {
    const _row = $("<div>").addClass("row");
    for (let j = 0; j < cols; j++) {
      const $col = $("<div>")
        .addClass("col hidden")
        .attr("data-row", i)
        .attr("data-col", j);
      if (Math.random() < 0.1) {
        $col.addClass("mine");
      }
      _row.append($col);
    }
    _board.append(_row);
  }
}

function restart() {
  createBoard(ROWS, COLS);
}

function gameOver(isWin) {
  let message = null;
  let icon = null;
  if (isWin) {
    message = "YOU WON!";
    icon = "fa fa-flag";
  } else {
    message = "YOU LOST!";
    icon = "fa fa-bomb";
  }
  $(".col.mine").append($("<i>").addClass(icon));
  $(".col:not(.mine)").html(function () {
    const _count = $(this);
    const count = getMineCount(_count.data("row"), _count.data("col"));
    return count === 0 ? "" : count;
  });
  $(".col.hidden").removeClass("hidden");
  setTimeout(function () {
    alert(message);
    restart();
  }, 1000);
}

function reveal(oi, oj) {
  const seen = {};

  function helper(i, j) {
    if (i >= ROWS || j >= COLS || i < 0 || j < 0) return;
    const key = `${i} ${j}`;
    if (seen[key]) return;
    const _count = $(`.col.hidden[data-row=${i}][data-col=${j}]`);
    const mineCount = getMineCount(i, j);
    if (!_count.hasClass("hidden") || _count.hasClass("mine")) {
      return;
    }

    _count.removeClass("hidden");

    if (mineCount) {
      _count.text(mineCount);
      return;
    }

    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        helper(i + di, j + dj);
      }
    }
  }

  helper(oi, oj);
}

function getMineCount(i, j) {
  let count = 0;
  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= ROWS || nj >= COLS || nj < 0 || ni < 0) continue;
      const _count = $(`.col.hidden[data-row=${ni}][data-col=${nj}]`);
      if (_count.hasClass("mine")) count++;
    }
  }
  return count;
}

_board.on("click", ".col.hidden", function () {
  const _count = $(this);
  const row = _count.data("row");
  const col = _count.data("col");

  if (_count.hasClass("mine")) {
    gameOver(false);
  } else {
    reveal(row, col);
    const isGameOver = $(".col.hidden").length === $(".col.mine").length;
    if (isGameOver) gameOver(true);
  }
});

restart();
