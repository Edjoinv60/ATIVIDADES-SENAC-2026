const botaoVoltar = document.getElementById("botao-voltar");

botaoVoltar.addEventListener("click", () => {
    history.back();
});

const resumo = document.getElementById("resumo-pedido");

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));
const quantidade = Number(parametros.get("quantidade"));

const produto = produtos.find(item => item.id === id);

const total = produto.preco * quantidade;

// ==========================
// RESUMO DO PEDIDO
// ==========================

const card = document.createElement("div");
card.className = "card-resumo";

const imagem = document.createElement("img");
imagem.src = produto.imagem;
imagem.alt = produto.nome;

const titulo = document.createElement("h2");
titulo.textContent = produto.nome;

const quantidadeTexto = document.createElement("p");
quantidadeTexto.textContent = `Quantidade: ${quantidade}`;

const precoUnitario = document.createElement("p");
precoUnitario.textContent = `Valor Unitário: R$ ${produto.preco.toFixed(2)}`;

const precoTotal = document.createElement("h3");
precoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;

card.appendChild(imagem);
card.appendChild(titulo);
card.appendChild(quantidadeTexto);
card.appendChild(precoUnitario);
card.appendChild(precoTotal);

resumo.appendChild(card);

// ==========================
// FORMULÁRIO
// ==========================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const pedido = {

        produto: produto.nome,
        quantidade: quantidade,
        valorUnitario: produto.preco,
        valorTotal: total,

        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value,
        pagamento: document.getElementById("pagamento").value

    };

    sessionStorage.setItem("pedido", JSON.stringify(pedido));

    window.location.href = "pedidos.html";

});