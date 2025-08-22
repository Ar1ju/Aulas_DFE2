function quadrado(a) {
  return a * a;
}

let numero = document.getElementById("numero");
let resultado = document.getElementById("resultado");

numero.addEventListener("keypress", (e) => {
  if (e.key != "Enter") {
    resultado.innerText = ``;
  } else {
    resultado.innerText = quadrado(numero.value);
  }
});
