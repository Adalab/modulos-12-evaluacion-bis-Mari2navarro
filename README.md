# 🌱 Raíz Urbana

> Un archivo vivo para descubrir, escuchar y seguir a mujeres que pintan, riman y suenan.

## 📖 Descripción

**Raíz Urbana** es una aplicación web Full Stack desarrollada durante el Bootcamp de Desarrollo Web de Adalab.

El proyecto nace con el objetivo de dar visibilidad a mujeres de la escena urbana mediante un directorio interactivo desde el que es posible descubrir nuevas artistas, acceder a sus perfiles de Spotify y crear una colección personalizada de favoritas.

La aplicación consume una **API REST desarrollada por mí** durante el módulo de Backend del bootcamp, integrando una base de datos propia con una interfaz responsive diseñada a partir de un prototipo en Figma.

---

## ✨ Funcionalidades

- Consulta de artistas desde una API REST propia.
- Acceso directo a los perfiles de Spotify.
- Posibilidad de seguir y dejar de seguir artistas.
- Contador dinámico de artistas seguidas.
- Persistencia de las favoritas mediante LocalStorage.
- Imagen placeholder para artistas sin fotografía.
- Diseño responsive adaptado a dispositivos móviles y escritorio.

---

## 🛠️ Tecnologías utilizadas

### Frontend

- HTML5
- SCSS
- JavaScript (ES6)
- Vite

### Backend

- Node.js
- Express.js
- MySQL

### Herramientas

- Fetch API
- LocalStorage
- Git
- GitHub
- Figma

---

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/Adalab/modulos-12-evaluacion-bis-Mari2navarro.git
```

Instala las dependencias:

```bash
npm install
```

Inicia el proyecto:

```bash
npm run dev
```

Genera la versión para producción:

```bash
npm run docs
```

---

## 💡 Decisiones de desarrollo

Durante el desarrollo del proyecto se han aplicado distintas decisiones para mejorar la organización del código y la experiencia de usuario:

- Organización del SCSS mediante una arquitectura basada en componentes.
- Uso de la metodología BEM para nombrar las clases CSS.
- Consumo de una API REST propia mediante Fetch.
- Persistencia de las artistas favoritas utilizando LocalStorage.
- Uso de una imagen placeholder cuando una artista no dispone de fotografía.
- Implementación de un diseño responsive siguiendo el prototipo proporcionado en Figma.

---

## 🔮 Mejoras futuras

- Incorporar un buscador por nombre.
- Añadir filtros por ciudad y género musical.
- Crear una página de detalle para cada artista.
- Incorporar iconografía SVG en la interfaz.
- Añadir animaciones y microinteracciones.
- Implementar autenticación para guardar las favoritas en la base de datos.

---

## 👩‍💻 Autora

Desarrollado por **Mari Navarro** como proyecto final de los módulos Frontend y Backend del **Bootcamp de Desarrollo Web Full Stack de Adalab**.
