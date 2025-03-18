//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//Array para armanezar os nomes dos amigos
let amigos = [];

//Função para adicionar um amigo
function adicionarAmigo (){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    //Validando se o campo não está vazio
    if (nome == ""){
        alert("Por favor, insira um nome válido!")
        return;
    }

    //Validando se o nome já foi inserido anteriormente
    if(amigos.includes(nomeAmigo)){
        alert("O nome ${nomeAmigo} já foi inserido na lista!");
        return;
    }

    //Adicionar o nome ao array de amigos
    amigos.push(nomeAmigo);

    //Limpar o campo de entrada
    inputAmigo.ariaValu = "";  

    //Atualizar a lista no HTML
    atualizarLista();

}


