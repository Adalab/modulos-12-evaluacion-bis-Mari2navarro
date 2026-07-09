"use strict";

//SECCIÓN DE QUERY-SELECTORS
const artistsList = document.querySelector(".js-artists-list");
const counter = document.querySelector(".js-counter");

//SECCIÓN DE DATOS
let artists = [];

//SECCIÓN DE FUNCIONES

//Consigue los datos. Mira en localStorage para no hacer una petición a la API cada vez. Si no hay datos,hace fetch para obtener los datos del servidor. Convierte la respuesta y hace map() para crear un nuevo array solo con la info que se necesita.

function loadArtists() {
  const localData = localStorage.getItem("artists");

  if (localData === null) {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/artistas-urbanas.json",
    )
      .then((response) => response.json())
      .then((data) => {
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

        localStorage.setItem("artists", JSON.stringify(artists));

        renderArtists();
      });
  } else {
    artists = JSON.parse(localData);
    renderArtists();
  }
}

// Pinta las artistas en la página. Re-ordena el array para que aparezcan las seguidas primero

function renderArtists() {
  let html = "";

  const sortedArtists = [...artists];

  sortedArtists.sort((artistA, artistB) => {
    return artistB.following - artistA.following;
  });

  for (const artist of sortedArtists) {
    let photo = "";
    if (artist.foto === null) {
      photo = "https://placehold.co/400x500/bcb6d4/322044/?text=Artista";
    } else {
      photo = artist.foto;
    }

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

  // Introduce todo el html que hemos creado antes en la página
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

//por si en el futuro se necesitan ejecutar más acciones
function init() {
  loadArtists();
}

init();

console.log(">> ok :)");
