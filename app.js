// Array que armazenará os amigos
let amigos = []; 

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo"); // Captura o campo de texto
  const nome = input.value.trim(); // Remove espaços extras

  // Validação: Verificar se o nome é válido
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Adiciona o nome ao array e atualiza a lista na tela
  amigos.push(nome);
  atualizarLista();

  // Limpa o campo de entrada
  input.value = "";
}

// Atualiza a exibição da lista de amigos no DOM
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de recriá-la

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Adiciona um botão para remover o amigo
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerAmigo(index);

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
  amigos.splice(index, 1); // Remove o amigo do array
  atualizarLista(); // Atualiza a lista exibida
}

// Função para sortear um amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  // Sorteia um amigo aleatório
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o resultado
  const li = document.createElement("li");
  li.textContent = `🎉 O amigo sorteado foi: ${amigoSorteado}`;
  resultado.appendChild(li);
}

function exibirAmigos() {
    // Obter o elemento da lista onde os amigos serão exibidos
    const lista = document.getElementById("listaAmigos");
  
    // Limpar a lista existente para evitar duplicados
    lista.innerHTML = "";
  
    // Percorrer o array de amigos e criar elementos <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
      lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
  }

  function sortearAmigo() {
    // Obter o elemento onde o resultado será exibido
    const resultado = document.getElementById("resultado");
  
    // Validar se há amigos no array
    if (amigos.length === 0) {
      resultado.innerHTML = "A lista está vazia. Adicione amigos antes de sortear.";
      return;
    }
  
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Mostrar o resultado
    resultado.innerHTML = `🎉 O amigo sorteado foi: ${amigoSorteado}`;
  }
  