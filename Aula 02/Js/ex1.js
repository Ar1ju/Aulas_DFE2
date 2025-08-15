let button = document.getElementById("botao");
let gatinho = document.getElementById("gatinho");

button.addEventListener("click", () => {
  if (gatinho.style.display == "none" || gatinho.style.display == "") {
    gatinho.style.display = `inline`;
    button.innerHTML = `TOMA!`;
  } else {
    gatinho.style.display = `none`;
    button.innerHTML = `CLIQUE EM MIM!`;
  }
});
