document.addEventListener("DOMContentLoaded", () => {

  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  const modalTitulo = document.getElementById("modalTitulo");
  const modalFecha = document.getElementById("modalFecha");
  const modalTexto = document.getElementById("modalTexto");
  const galeriaFotos = document.getElementById("galeriaFotos");

  const cerrarModal = document.getElementById("cerrarModal");

  const btnMusica = document.getElementById("btnMusica");
  const btnComenzar = document.getElementById("btnComenzar");

  const musica = document.getElementById("musicaPrincipal");

  // Crear ruta automáticamente

 window.destinos.forEach(destino => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("destino");

    tarjeta.innerHTML = `
      <h3>${destino.icono} ${destino.logro}</h3>
      <p><strong>${destino.lugar}</strong></p>
      <p>${destino.fecha}</p>
    `;

    tarjeta.addEventListener("click", () => abrirDestino(destino));

    timeline.appendChild(tarjeta);

  });

  // Abrir destino

  function abrirDestino(destino) {

    modalTitulo.textContent =
      `${destino.icono} ${destino.logro}`;

    modalFecha.textContent =
      `${destino.lugar} · ${destino.fecha}`;

    modalTexto.textContent =
      destino.recuerdo;

    galeriaFotos.innerHTML = "";

    for(let i=1; i<=destino.fotos; i++){

      const numero =
        String(i).padStart(2,"0");

      const img =
        document.createElement("img");
const rutaJpg =
`Photos/${destino.carpeta}/foto${numero}.jpg`;

const rutaJpgMayus =
`Photos/${destino.carpeta}/foto${numero}.JPG`;

img.src = rutaJpg;

img.onerror = () => {
  img.src = rutaJpgMayus;
};

      img.alt =
      destino.lugar;

      galeriaFotos.appendChild(img);

    }

    modal.classList.remove("oculto");

  }

  // Cerrar modal

  cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  modal.addEventListener("click", (e) => {

    if(e.target === modal){

      modal.classList.add("oculto");

    }

  });

  // Música

  btnMusica.addEventListener("click", async () => {

    try{

      await musica.play();

      btnMusica.textContent =
      "🎵 Banda sonora activada";

    }catch(error){

      console.log(error);

    }

  });

  // Comenzar aventura

document
.getElementById("btnComenzar")
?.addEventListener("click", () => {

document
.getElementById("ruta")
?.scrollIntoView({

behavior:"smooth",

block:"start"

});

});


  // Cuenta atrás Martin Garrix

  const contador =
    document.getElementById("contador");

  const fechaConcierto =
    new Date("2026-07-11T20:00:00");

  function actualizarContador(){

    const ahora = new Date();

    const diferencia =
      fechaConcierto - ahora;

    if(diferencia <= 0){

      contador.innerHTML =
      "🎧 ¡Hoy es el gran día!";

      return;

    }

    const dias =
      Math.floor(
        diferencia /
        (1000*60*60*24)
      );

    contador.innerHTML =
      `⏳ ${dias} días`;

  }

  actualizarContador();

  setInterval(
    actualizarContador,
    60000
  );

});