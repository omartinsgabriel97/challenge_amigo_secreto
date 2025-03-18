// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim(); // Capturar o valor corretamente

  // Validando se o campo não está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  // Validando se o nome já foi inserido anteriormente
  if (amigos.includes(nomeAmigo)) {
    alert(`O nome ${nomeAmigo} já foi inserido na lista!`);
    return;
  }

  // Adicionar o nome ao array de amigos
  amigos.push(nomeAmigo);

  // Limpar o campo de entrada
  inputAmigo.value = "";

  // Atualizar a lista na interface
  atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');

  // Limpar o conteúdo atual da lista
  listaAmigos.innerHTML = "";

  // Percorrer o array para exibir os nomes
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
  // Validar se há amigos disponíveis
  if (amigos.length === 0) {
    alert("Não há amigos disponíveis para sortear. Adicione amigos e tente novamente.");
    return;
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obter o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar o resultado no HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}