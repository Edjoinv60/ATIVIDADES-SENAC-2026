const cardProduto = document.getElementById("card-produto");
let indiceAtual = 0;

const botaoProximo = document.getElementById("proximo");
botaoProximo.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % produtos.length;
  exibirProduto(indiceAtual);
});

const botaoAnterior = document.getElementById("anterior");
botaoAnterior.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
  exibirProduto(indiceAtual);
});

function exibirProduto(indice) {
  const produto = produtos[indice];

  cardProduto.innerHTML = "";

  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;

  const titulo = document.createElement("h2");
  titulo.className = "titulo-produto";
  titulo.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.className = "preco-produto";
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  const descricao = document.createElement("p");
  descricao.className = "descricao-produto";
  descricao.textContent = produto.descricao;

  const botao = document.createElement("button");
  botao.textContent = "Ver Mais";
  botao.className = "botao-ver-mais";

  botao.addEventListener("click", () => {
    window.location.href = `produto.html?id=${produto.id}`;
  });
  cardProduto.appendChild(imagem);
  cardProduto.appendChild(titulo);
  cardProduto.appendChild(preco);
  cardProduto.appendChild(descricao);
  cardProduto.appendChild(botao);
}

exibirProduto(indiceAtual);
