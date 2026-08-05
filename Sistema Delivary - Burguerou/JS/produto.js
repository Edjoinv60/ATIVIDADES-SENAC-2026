const detalhes = document.getElementById("produto-detalhes");

const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

const produto = produtos.find((item) => item.id === id);

const botaoVoltar = document.getElementById("botao-voltar");

botaoVoltar.addEventListener("click", () => {
  window.location.href = "index.html";
});

const card = document.createElement("div");
card.className = "card-detalhes";

// Imagem
const imagem = document.createElement("img");
imagem.src = produto.imagem;
imagem.alt = produto.nome;

// Título
const titulo = document.createElement("h1");
titulo.textContent = produto.nome;

// Preço
const preco = document.createElement("h2");
preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
preco.className = "preco-produto";

// Descrição
const itens = document.createElement("p");
itens.textContent = produto.itens;

// Detalhes
const lista = document.createElement("ul");
lista.setAttribute("id", "detalhes")




// =====================
// Quantidade
// =====================

let quantidadeAtual = 1;

const quantidadeTitulo = document.createElement("h3");
quantidadeTitulo.textContent = "Quantidade";
quantidadeTitulo.className = "quantidade-titulo";

const controle = document.createElement("div");
controle.className = "controle-quantidade";

const diminuir = document.createElement("button");
diminuir.textContent = "-";

const quantidade = document.createElement("span");
quantidade.textContent = quantidadeAtual;

const aumentar = document.createElement("button");
aumentar.textContent = "+";

// Atualiza o preço

function atualizarPreco() {
  preco.textContent = `R$ ${(produto.preco * quantidadeAtual).toFixed(2)}`;
}

// Botão +

aumentar.addEventListener("click", () => {
  quantidadeAtual++;

  quantidade.textContent = quantidadeAtual;

  atualizarPreco();
});

// Botão -

diminuir.addEventListener("click", () => {
  if (quantidadeAtual > 1) {
    quantidadeAtual--;

    quantidade.textContent = quantidadeAtual;

    atualizarPreco();
  }
});

// Botão Fazer Pedido

const botao = document.createElement("button");
botao.textContent = "Fazer Pedido";
botao.className = "botao-pedido";

botao.addEventListener("click", () => {

    window.location.href =
    `pedido.html?id=${produto.id}&quantidade=${quantidadeAtual}`;

});

// =====================
// Adicionando ao card
// =====================

card.appendChild(imagem);
card.appendChild(titulo);
card.appendChild(preco);
card.appendChild(itens);
card.appendChild(lista);

card.appendChild(quantidadeTitulo);

controle.appendChild(diminuir);
controle.appendChild(quantidade);
controle.appendChild(aumentar);

card.appendChild(controle);

card.appendChild(botao);

detalhes.appendChild(card);