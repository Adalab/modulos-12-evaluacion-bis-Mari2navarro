"use strict";

//SECCIÓN DE QUERY-SELECTORS

const artistsList = document.querySelector(".js-artists-list");
const counter = document.querySelector(".js-counter");

//SECCIÓN DE DATOS

let artists = [];

//SECCIÓN DE FUNCIONES

// Carga las artistas en la aplicación.
// Si existen en localStorage las recupera; si no, las obtiene desde la API.
function loadArtists() {
  // Comprueba si las artistas ya están guardadas en localStorage
  const localData = localStorage.getItem("artists");

  if (localData === null) {
    // Si no hay datos guardados, los obtiene desde la API
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/artistas-urbanas.json",
    )
      .then((response) => response.json())
      .then((data) => {
        // Crea un nuevo array solo con la información que necesita la aplicación
        artists = data.map((artist) => {
          return {
            id: artist.id,
            nombre_artistico: artist.nombre_artistico,
            ciudad: artist.ciudad,
            genero: artist.genero,
            foto: artist.foto,
            url_spotify: artist.url_spotify,
            following: false,
          };
        });

        // Guarda las artistas en localStorage
        localStorage.setItem("artists", JSON.stringify(artists));

        // Muestra las artistas en pantalla
        renderArtists();
      });
  } else {
    // Si ya existen datos en localStorage, los recupera
    artists = JSON.parse(localData);

    // Muestra las artistas en pantalla
    renderArtists();
  }
}

// Pinta las artistas en la página
function renderArtists() {
  let html = "";

  // Creamos una copia del array para no modificar el original
  const sortedArtists = [...artists];

  // Ordenamos las artistas para que las seguidas aparezcan primero
  sortedArtists.sort((artistA, artistB) => {
    return artistB.following - artistA.following;
  });

  // Recorremos el array ordenado
  for (const artist of sortedArtists) {
    // Si no hay foto, mostramos una imagen de relleno
    const photo =
      artist.foto || "https://placehold.co/400x500/bcb6d4/322044/?text=Artista";

    html += `
      <li class="artist ${artist.following ? "artist--following" : ""}">
        
        <img
          class="artist__image"
          src="${photo}"
          alt="${artist.nombre_artistico}"
        />

        ${
          artist.following
            ? `<span class="artist__badge">♥️ Favorita</span>`
            : ""
        }

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
          rel="noopener noreferrer"
        >
          Playlist en Spotify
        </a>

        <button
          class="artist__follow js-follow-btn"
          data-id="${artist.id}"
        >
          ${artist.following ? "Siguiendo" : "Seguir"}
        </button>

      </li>
    `;
  }

  // Pintamos las artistas
  artistsList.innerHTML = html;

  // Seleccionamos todos los botones
  const followButtons = document.querySelectorAll(".js-follow-btn");

  // Añadimos el evento click a cada botón
  for (const button of followButtons) {
    button.addEventListener("click", handleClickFollow);
  }

  // Actualizamos el contador de artistas seguidas
  renderCounter();
}

// Se ejecutará cuando se pulse un botón "Seguir"
function handleClickFollow(event) {
  const clickedButton = event.currentTarget;

  const artistId = Number(clickedButton.dataset.id);

  const selectedArtist = artists.find((artist) => artist.id === artistId);

  selectedArtist.following = !selectedArtist.following;

  localStorage.setItem("artists", JSON.stringify(artists));

  renderArtists();
}

function renderCounter() {
  const followingArtists = artists.filter((artist) => artist.following);

  counter.innerHTML = `${followingArtists.length} artistas seguidas`;
}

//SECCIÓN DE FUNCIONES DE EVENTOS

//SECCIÓN DE EVENTOS

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA

function init() {
  loadArtists();
}

init();

console.log(">> ok :)");
