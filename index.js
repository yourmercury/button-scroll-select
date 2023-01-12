const cont = document.querySelector(".container");
const steps = document.querySelectorAll(".steps");
const ans = document.querySelector(".answer");

let contClicked = false;

let _steps = 0;

onclick = (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("steps")) {
    contClicked = true;
  } else {
    contClicked = false;
  }
};

function moveAStep() {
  steps.forEach((step, index) => {
    step.id = index == _steps ? "active" : "";
  });
}

onkeyup = (e) => {
  if (contClicked) {
    if (e.key == "ArrowDown") {
      _steps = _steps == steps.length - 1 ? 0 : _steps + 1;
    } else if (e.key == "ArrowUp") {
      _steps = _steps == 0 ? steps.length - 1 : _steps - 1;
    } else if (e.key == "Enter") {
      let step = document.querySelector("#active");
      let val = step.innerHTML;
      ans.innerHTML = val;
    }

    moveAStep();
  }
};
