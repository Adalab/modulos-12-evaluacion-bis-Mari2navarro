"use strict";

//SECCIÓN DE QUERY-SELECTORS

//SECCIÓN DE DATOS
let artists = [];

//SECCIÓN DE FUNCIONES

function loadArtists() {
  const localData = localStorage.getItem("artists");

  if (localData === null) {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/artistas-urbanas.json",
    )
      .then((response) => response.json())
      .then((data) => {
        artists = data;
        console.log(artists);
      });
  } else {
    artists = JSON.parse(localData);
    console.log(artists);
  }
}

function renderArtists() {}

function saveLocalStorage() {}

function handleClickFollow() {}
//SECCIÓN DE FUNCIONES DE EVENTOS

//SECCIÓN DE EVENTOS

//SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA

function init() {
  loadArtists();
}

init();

console.log(">> Ready :)");
