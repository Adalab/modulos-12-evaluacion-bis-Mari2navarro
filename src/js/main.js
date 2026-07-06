"use strict";

//SECCIÓN DE QUERY-SELECTORS

const artistsList = document.querySelector(".js-artists-list");

//SECCIÓN DE DATOS

let artists = [];

//SECCIÓN DE FUNCIONES

// Carga las artistas en la aplicación.
// Si existen en localStorage las recupera; si no, las obtiene desde la API.
function loadArtists() {
  const localData = localStorage.getItem("artists");

  if (localData === null) {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/artistas-urbanas.json",
    )
      .then((response) => response.json())
      .then((data) => {
        artists = data;

        localStorage.setItem("artists", JSON.stringify(artists));

        renderArtists();
      });
  } else {
    artists = JSON.parse(localData);

    renderArtists();
  }
}

// Pinta las artistas en la página
function renderArtists() {
  let html = "";

  for (const artist of artists) {
    html += `
      <li class="artist">
        <img
          class="artist__image"
          src="${artist.foto}"
          alt="${artist.nombre_artistico}"
          onerror="this.src='https://placehold.co/400x500/bcb6d4/322044?text=Artista'"
        />

        <h3 class="artist__name">
          ${artist.nombre_artistico}
        </h3>

        <p class="artist__info">
          ${artist.ciudad} - ${artist.genero}
        </p>

        <a
          class="artist__spotify"
          href="${artist.url_spotify}"
          target="_blank"
        >
          Spotify
        </a>

        <button
          class="artist__follow js-follow-btn"
          data-id="${artist.id}"
        >
          Seguir
        </button>
      </li>
    `;
  }

  artistsList.innerHTML = html;

  const followButtons = document.querySelectorAll(".js-follow-btn");

  for (const button of followButtons) {
    button.addEventListener("click", handleClickFollow);
  }
}

// Se ejecutará cuando se pulse un botón "Seguir"
function handleClickFollow(event) {
  console.log("Has hecho clic");

  console.log(event.currentTarget);
}

//SECCIÓN DE FUNCIONES DE EVENTOS

//SECCIÓN DE EVENTOS

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA

function init() {
  loadArtists();
}

init();

console.log(">> ok :)");
