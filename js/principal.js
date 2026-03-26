// lista de imagenes
const imagenes = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
  "img/img8.jpg",
  "img/img9.jpg"
];

// elementos
const galeria = document.getElementById("galeria");
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagen-grande");
const botonCerrar = document.getElementById("boton-cerrar");
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");
const contador = document.getElementById("contador");

// indice
let indice = 0;

// cargar imagenes
imagenes.forEach((ruta, i) => {
  const img = document.createElement("img");
  img.src = ruta;

  img.addEventListener("click", () => {
    indice = i;
    mostrarImagen();
    visor.style.display = "flex";
  });

  galeria.appendChild(img);
});

// mostrar imagen
function mostrarImagen() {
  imagenGrande.src = imagenes[indice];
  contador.textContent = (indice + 1) + " / " + imagenes.length;
}

// boton siguiente
botonSiguiente.addEventListener("click", () => {
  indice++;
  if (indice >= imagenes.length) indice = 0;
  mostrarImagen();
});

// boton anterior
botonAnterior.addEventListener("click", () => {
  indice--;
  if (indice < 0) indice = imagenes.length - 1;
  mostrarImagen();
});

// boton cerrar
botonCerrar.addEventListener("click", () => {
  visor.style.display = "none";
});

// teclado
document.addEventListener("keydown", (e) => {
  if (visor.style.display === "flex") {
    if (e.key === "ArrowRight") {
      indice++;
      if (indice >= imagenes.length) indice = 0;
      mostrarImagen();
    }

    if (e.key === "ArrowLeft") {
      indice--;
      if (indice < 0) indice = imagenes.length - 1;
      mostrarImagen();
    }

    if (e.key === "Escape") {
      visor.style.display = "none";
    }
  }
});