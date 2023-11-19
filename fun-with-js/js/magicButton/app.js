const dugme = document.querySelector("button");

window.addEventListener("mousemove", function (ev) {
  //   console.log([ev.clientX, ev.clientY]);
  //   console.log(dugme.getBoundingClientRect());
  const { clientX, clientY } = ev;
  const { innerHeight, innerWidth } = this.window;
  const { top, left, bottom, right } = dugme.getBoundingClientRect();

  if (
    clientX >= left - 10 &&
    clientX <= right + 10 &&
    clientY >= top - 10 &&
    clientY <= bottom + 10
  ) {
    dugme.style.top = Math.round(30 + Math.random() * innerHeight) + "px";
    dugme.style.left = Math.round(30 + Math.random() * innerWidth) + "px";
  } else {
    console.log(false);
  }
});

dugme.addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
