const span = document.querySelector("span");
const btnAll = document.querySelectorAll("button");
let counter = 0;

btnAll.forEach((btn) => {
  btn.addEventListener("click", ({ target }) => {
    switch (target.classList[0]) {
      case "decrease":
        counter -= 1;
        break;
      case "reset":
        counter = 0;
        break;
      case "increase":
        counter += 1;
        break;
    }
    span.innerText = counter;
  });
});
