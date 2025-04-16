async function contato() {
    const response = await fetch("http://localhost:1212/perfis");

    const perfis = await response.json();
    console.log(perfis);
    

    const cartoesContainer = document.getElementById("cartoes");

    cartoesContainer.innerHTML = perfis.map(perfil => {
      return `
      <div class="card">
        <h1>${perfil.nome}</h1>
        <img src="" alt="">
            <div class="contato">
            <i class="bi bi-envelope"></i>
            <p>${perfil.email}</p>
        </div>
    </div>
     </div>
          <!-- Passando nome e email como parâmetros na URL -->
        <a href="contato/contato.html?nome=${encodeURIComponent(perfil.nome)}&email=${encodeURIComponent(perfil.email)}">Acessar</a>
    </div>
    `;
}).join('');
}

document.addEventListener("DOMContentLoaded", carregaPerfis);
