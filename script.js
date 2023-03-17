const botonMovil = document.getElementById("botonMovil");
const botoneraMovil = document.getElementById("botoneraMovil");

botonMovil.addEventListener("click", () => {
  if (botonMovil.checked) {
    botoneraMovil.style.display = "block";
  } else {
    botoneraMovil.style.display = "none";
  }
});