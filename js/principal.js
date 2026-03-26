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
  img.loading = "lazy";
  img.alt = "Imagen " + (i + 1);
  img.style.setProperty("--delay", (i * 60) + "ms");

  img.addEventListener("load", () => {
    img.classList.add("cargada");
  });

  img.addEventListener("click", () => {
    indice = i;
    mostrarImagen();
    abrirVisor();
  });

  galeria.appendChild(img);
});

// mostrar imagen
function mostrarImagen() {
  imagenGrande.classList.remove("visible");
  imagenGrande.src = imagenes[indice];
  contador.textContent = (indice + 1) + " / " + imagenes.length;
}

function cambiarImagen(paso) {
  indice = (indice + paso + imagenes.length) % imagenes.length;
  mostrarImagen();
}

function abrirVisor() {
  visor.style.display = "flex";
  requestAnimationFrame(() => {
    visor.classList.add("activo");
  });
}

function cerrarVisor() {
  visor.classList.remove("activo");
  setTimeout(() => {
    if (!visor.classList.contains("activo")) {
      visor.style.display = "none";
    }
  }, 250);
}

imagenGrande.addEventListener("load", () => {
  imagenGrande.classList.add("visible");
});

// boton siguiente
botonSiguiente.addEventListener("click", () => {
  cambiarImagen(1);
});

// boton anterior
botonAnterior.addEventListener("click", () => {
  cambiarImagen(-1);
});

// boton cerrar
botonCerrar.addEventListener("click", () => {
  cerrarVisor();
});

visor.addEventListener("click", (e) => {
  if (e.target === visor) {
    cerrarVisor();
  }
});

// teclado
document.addEventListener("keydown", (e) => {
  if (visor.classList.contains("activo")) {
    if (e.key === "ArrowRight") {
      cambiarImagen(1);
    }

    if (e.key === "ArrowLeft") {
      cambiarImagen(-1);
    }

    if (e.key === "Escape") {
      cerrarVisor();
    }
  }
});