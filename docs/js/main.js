const r=document.querySelector(".js-artists-list"),a=document.querySelector(".js-counter");let n=[];function c(){const e=localStorage.getItem("artists");e===null?fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/artistas-urbanas.json").then(o=>o.json()).then(o=>{n=o.map(s=>({id:s.id,nombre_artistico:s.nombre_artistico,ciudad:s.ciudad,genero:s.genero,foto:s.foto,url_spotify:s.url_spotify,following:!1})),localStorage.setItem("artists",JSON.stringify(n)),l()}):(n=JSON.parse(e),l())}function l(){let e="";const o=[...n];o.sort((t,i)=>i.following-t.following);for(const t of o){let i="";t.foto===null?i="https://placehold.co/400x500/bcb6d4/322044/?text=Artista":i=t.foto,e+=`
      <li class="artist ${t.following?"artist--following":""}">
        
        <img
          class="artist__image"
          src="${i}"
          alt="${t.nombre_artistico}"
        />

        ${t.following?'<span class="artist__badge">♥️ Favorita</span>':""}

        <h3 class="artist__name">
          ${t.nombre_artistico}
        </h3>

        <p class="artist__info">
          ${t.ciudad} - ${t.genero}
        </p>

        <a
          class="artist__spotify"
          href="${t.url_spotify}"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎶 Playlist en Spotify
        </a>

        <button
          class="artist__follow js-follow-btn"
          data-id="${t.id}"
        >
          ${t.following?"Siguiendo":"🩷 Seguir"}
        </button>

      </li>
    `}r.innerHTML=e;const s=document.querySelectorAll(".js-follow-btn");for(const t of s)t.addEventListener("click",f);u()}function f(e){const o=e.currentTarget,s=Number(o.dataset.id),t=n.find(i=>i.id===s);t.following=!t.following,localStorage.setItem("artists",JSON.stringify(n)),l()}function u(){const e=n.filter(o=>o.following);a.innerHTML=`${e.length} artistas seguidas`}function d(){c()}d();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
