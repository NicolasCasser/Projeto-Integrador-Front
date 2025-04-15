// Função chamada quando o botão "Acessar" é clicado
// function enviar() {
//     // Previne o envio do formulário
//     e.preventDefault();

//     // Obtém os valores dos campos de entrada
//     let nomeUsuario = document.querySelector(".nome input").value;
//     let email = document.querySelector(".email input").value;
//     let senha = document.querySelector("#senha").value;
//     let confirmarSenha = document.querySelector("#cSenha").value;
//     let mErro = document.getElementById("mErro"); // Div onde as mensagens de erro são exibidas

//     mErro.innerHTML = "";

//     // Validação dos campos de entrada
//     if (!nomeUsuario || !email || !senha || !confirmarSenha) {
//         mErro.innerHTML = "<p style='color: #f4f4f4;'>Todos os campos são obrigatórios!</p>";
//         return;
//     }

//     if (senha !== confirmarSenha) {
//         mErro.innerHTML = "<p style='color: #f4f4f4;'>As senhas não coincidem!</p>";
//         return;
//     }

//     mErro.innerHTML = "<p style='color: #f4f4f4;'>Cadastro realizado com sucesso!</p>";
// }


function valida() {

    const senha = document.getElementById("senha").value;
    const lSenha = document.getElementById("lSenha");
    const iSenha = document.getElementById("senha");

    if (senha.length < 7) {

        iSenha.style.border = ("solid, 2px, red")
    }
    else {

        iSenha.style.border = ("solid, 2px,rgb(255, 176, 4)")
    }
    if (senha.length > 14) {

        iSenha.style.border = ("solid, 2px, green")
    }
}

const cadastro = document.getElementById("formRegistro");
console.log(cadastro);

cadastro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {
        nome,
        email,
        senha
    };
    console.log(usuario);
    

    const response = await fetch('http://localhost:1212/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

    
    if(response.ok) {
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Erro ao cadastrar usuário!');
    }
})

const login = document.getElementById("formLogin");
console.log(login);


login.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;
    

    console.log(email);
    
    
    const usuario = {
        email,
        senha
    };

    console.log("Tentando logar com:", { email, senha });
    
    const response = await fetch("http://localhost:1212/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    if(response.ok){
        window.location.href = "../Perfil/usuario.html"
    }else {
        alert("Erro ao fazer login!");
    }
});
