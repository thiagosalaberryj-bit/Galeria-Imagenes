//las imagenes
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

// seleccionar elementos 
const galeria = document.getElementById("galeria");
const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagen-grande");
const btnCerrar = document.getElementById("cerrar");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const contador = document.getElementById("contador");

// indice actual de imagen
let indiceActual = 0;

// funcion para cargar imagenes en la galeria
function cargarGaleria() {
  imagenes.forEach((ruta, index) => {
    const img = document.createElement("img");
    img.src = ruta;
    img.alt = "imagen " + (index + 1);

    // evento click para abrir lightbox
    img.addEventListener("click", () => {
      abrirLightbox(index);
    });

    galeria.appendChild(img);
  });
}

// funcion para abrir el lightbox
function abrirLightbox(indice) {
  indiceActual = indice;
  lightbox.style.display = "flex";
  mostrarImagen();
}

// funcion para mostrar imagen segun indice
function mostrarImagen() {
  imagenGrande.src = imagenes[indiceActual];

  // actualizar contador
  contador.textContent = (indiceActual + 1) + " / " + imagenes.length;
}

// funcion para ir a la siguiente imagen
function siguienteImagen() {
  indiceActual++;

  // si llega al final vuelve al inicio
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  mostrarImagen();
}

// funcion para ir a la imagen anterior
function anteriorImagen() {
  indiceActual--;

  // si baja de 0 va al final
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  mostrarImagen();
}

// funcion para cerrar el lightbox
function cerrarLightbox() {
  lightbox.style.display = "none";
}

// eventos de botones
btnCerrar.addEventListener("click", cerrarLightbox);
btnNext.addEventListener("click", siguienteImagen);
btnPrev.addEventListener("click", anteriorImagen);

// eventos de teclado
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    
    // flecha derecha
    if (e.key === "ArrowRight") {
      siguienteImagen();
    }

    // flecha izquierda
    if (e.key === "ArrowLeft") {
      anteriorImagen();
    }

    // tecla escape
    if (e.key === "Escape") {
      cerrarLightbox();
    }
  }
});

// cargar galeria al iniciar
cargarGaleria();