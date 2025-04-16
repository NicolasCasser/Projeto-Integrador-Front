// Função para redirecionar
function redirecionarParaContato(id) {
  window.location.href = `../contato/contato.html?id=${id}`;
}

// Função para criar os cartões
function criarCartoes(perfis) {
  const cartoesContainer = document.querySelector('#cartoes');
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
        <button onclick="redirecionarParaContato(${perfil.id})" class="btn-acessar">Acessar</button>
      </div>
    `;
  }).join('');
}

// Requisição para a API
fetch('http://localhost:1212/perfis')
  .then(response => response.json())
  .then(data => {
    criarCartoes(data);
  })
  .catch(error => {
    console.error('Erro ao buscar perfis:', error);
  });
