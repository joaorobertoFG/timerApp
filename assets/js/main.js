function timer() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const buttons = document.querySelectorAll(".botao");
  const timer = document.querySelector(".timer");
  const pause = document.querySelector(".pause");
  const play = document.querySelector(".play");
  const reset = document.querySelector(".reset");
  let segundos = 0;
  let timerStart;

  function clockStart() {
    timerStart = setInterval(function () {
      segundos++;
      timer.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((botao) => botao.classList.remove("active"));
      button.classList.add("active");
    });
  });

  play.addEventListener("click", () => {
    timer.classList.remove("pausado");
    timer.classList.add("playing");
    play.classList.add("playing");
    clearInterval(timerStart);
    clockStart();
  });

  pause.addEventListener("click", () => {
    timer.classList.add("pausado");
    timer.classList.remove("playing");
    play.classList.remove("playing");
    clearInterval(timerStart);
  });

  reset.addEventListener("click", () => {
    timer.classList.add("pausado");
    timer.classList.remove("playing");
    play.classList.remove("playing");
    clearInterval(timerStart);
    segundos = 0;
    timer.innerHTML = "00:00:00";
  });
}
timer();