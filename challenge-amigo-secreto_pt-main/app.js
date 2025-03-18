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
        alert(`O nome ${nomeAmigo} já foi inserido na lista!`);
        return;
    }

    //Adicionar o nome ao array de amigos
    amigos.push(nomeAmigo);

    //Limpar o campo de entrada
    inputAmigo.ariaValu = "";  

    //Atualizar a lista no HTML
    atualizarLista();

}

//Função para atualizar a lista de amigos na interface
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos')

    //Limpar o conteúdo atual da Lista
    listaAmigos.innerHTML = "";

    //Percorrer pelo array através do for
    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


//Função para sortear um amigo aleatório
function sortearAmigo(){
    //Validar que haja amigos disponíveis
    if (amigos.length == 0){
        alert("Não há amigos disponíveis para sortear. Adicione todos os amigos e refaça o sorteio.");
        return;

    }


    //Gerando um indíce aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtendo um número sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa o indíce aleatório para obter um nome do array.

    //Mostrando o resultado no HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigosorteado}</strong>`;
}


