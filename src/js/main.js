"use strict";

//SECCIÓN DE QUERY-SELECTORS

const artistsList = document.querySelector(".js-artists-list");

//SECCIÓN DE DATOS

let artists = [];

//SECCIÓN DE FUNCIONES

function loadArtists() {
  //Carga las artistas en la aplicación
  // Si existen en localStorage las recupera, si no, las obtiene de la API.
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
          Playlist en Spotify
        </a>

        <button class="artist__follow">
          Seguir
        </button>
      </li>
    `;
  }

  artistsList.innerHTML = html;
}

function handleClickFollow() {}

//SECCIÓN DE FUNCIONES DE EVENTOS

//SECCIÓN DE EVENTOS

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA

function init() {
  loadArtists();
}

init();

console.log(">> ok :)");
