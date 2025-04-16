async function carregarPerfil() {
  // Pega o ID da URL (query string)
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    console.error("ID não encontrado na URL");
    return;
  }

  try {
    // Faz a requisição para a API com o ID
    const response = await fetch(`http://localhost:1212/perfis/${id}`);

    if (!response.ok) {
      console.error("Erro ao buscar perfil:", response.status);
      return;
    }

    const perfil = await response.json();

    // Exibe as informações do perfil na tela
    const cardContainer = document.getElementById("card");

    cardContainer.innerHTML = `
      <div class="card">
        <h1>${perfil.nome}</h1>
        <div class="email">
          <i class="bi bi-envelope"></i>
          <p>${perfil.email}</p>
        </div>
        <!-- Adicione qualquer outra informação que desejar -->
      </div>
    `;

  } catch (error) {
    console.error("Erro ao carregar o perfil:", error);
  }
}

document.addEventListener("DOMContentLoaded", carregarPerfil);
