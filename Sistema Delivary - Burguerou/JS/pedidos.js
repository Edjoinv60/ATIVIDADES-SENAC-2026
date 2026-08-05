const lista = document.getElementById("lista-pedidos");

const pedido = JSON.parse(sessionStorage.getItem("pedido"));

if (pedido) {

    const card = document.createElement("div");
    card.className = "card-pedido";

    const titulo = document.createElement("h2");
    titulo.textContent = pedido.produto;

    const cliente = document.createElement("p");
    cliente.textContent = `Cliente: ${pedido.nome}`;

    const quantidade = document.createElement("p");
    quantidade.textContent = `Quantidade: ${pedido.quantidade}`;

    const total = document.createElement("p");
    total.textContent = `Total: R$ ${pedido.valorTotal.toFixed(2)}`;

    const pagamento = document.createElement("p");
    pagamento.textContent = `Pagamento: ${pedido.pagamento}`;

    card.appendChild(titulo);
    card.appendChild(cliente);
    card.appendChild(quantidade);
    card.appendChild(total);
    card.appendChild(pagamento);

    lista.appendChild(card);

}