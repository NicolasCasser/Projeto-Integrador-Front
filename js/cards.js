async function carregaPerfis() {
    try {
      // Busca os dados da API, altere a URL se necessário (ex: http://localhost:1212/perfis)
      const response = await fetch("http://localhost:1212/perfis");
  
      if (!response.ok) {
        console.error("Erro na requisição:", response.status);
        return;
      }
  
      // Converte a resposta para JSON
      const perfis = await response.json();
      console.log(perfis);
  
      // Seleciona a seção onde os cards serão inseridos
      const cartoesContainer = document.getElementById("cartoes");
  
      // Mapeia os dados para criar o HTML de cada card e junta tudo em uma única string
      cartoesContainer.innerHTML = perfis.map(perfil => {
        return `
          <div class="cardsBack">
            <div class="usuario">
                <h3>${perfil.nome}</h3>
            </div>
            <div class="pedido">
                <h3>${perfil.titulo}</h3>
                <p>${perfil.descricao}</p>
            </div>
            <a href="#">Acessar</a>
          </div>
        `;
      }).join('');
  
    } catch (error) {
      console.error("Erro ao carregar perfis:", error);
    }
  }
  
  // Garante que a função seja chamada depois que a página estiver totalmente carregada
  document.addEventListener("DOMContentLoaded", carregaPerfis);
