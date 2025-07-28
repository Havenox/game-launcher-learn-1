//infos do usuario - temporario
var usuarioLogado = false;
var emailDoUsuario = "";

//function pra fazer login
function fazerLogin(){
    //pegar oq foi digitado nas caixas
    var email = document.querySelector('input[type="email').value;
    var senha = document.querySelector('input[type="password').value;


    //verificar se foi preenchido algo
    if (email===""|| senha===""){
        alert("Por favor, preencha email e senha!")
        return;
    }

    //verificação no servidor - simulação
    if (email==="teste@teste.com" && senha === "1234"){
        usuarioLogado=true;
        emailDoUsuario = email;
        alert("Login Realizado com Sucesso!");
        atualizarInterface();
    }else{
        alert("Email ou senha incorretos!");
    }

}

//função pra jogar
function iniciarJogo(){
    if(usuarioLogado){
        alert("Iniciando o jogo para " + emailDoUsuario + "...");
        //aqui abriria o jogo
    }else{
        alert("Você precisa fazer login primeiro!");
    }
}


//funcao para atualizar a interface
function atualizarInterface(){
    var botaoJogar = document.getElementById("botao-jogar");
    if (usuarioLogado){
        botaoJogar.style.backgroundColor = "#00ff00"; // se ta logado fica verde
        botaoJogar.innerHTML = "🎮 Jogar Agora!"
    }else{
        botaoJogar.style.backgroundColor = "#666666"; //se nao logar fica cinza
        botaoJogar.innerHTML = "❌ Faça Login"
    }
}

//ao carregar a pagina ele faz isso
window.onload = function(){
    //conecta os botao nas respesctivas funcoes
    document.querySelector('button').onclick = fazerLogin;
    document.getElementById('botao-jogar').onclick = iniciarJogo;


    //atualiza ainterface
    atualizarInterface();

    //motra mensagem de boas vindas
    alert("Seja bem vindo ao Jogo XYZ: O Sonho!");
}