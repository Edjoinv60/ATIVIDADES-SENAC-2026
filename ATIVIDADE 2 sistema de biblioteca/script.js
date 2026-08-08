const formulary = document.getElementById("formularyLibrary");
const tableBody = document.getElementById("tableBodyLibrary");
// Seleciona a div container da tabela
const tableContainer = document.querySelector(".table-library");

// Função que controla a visibilidade da tabela
function checkTableVisibility() {
    // Conta quantas linhas (tr) existem dentro da tbody
    const totalRows = tableBody.querySelectorAll("tr").length;

    if (totalRows > 0) {
        tableContainer.classList.remove("hidden"); // Exibe a tabela
    } else {
        tableContainer.classList.add("hidden");    // Esconde a tabela
    }
}

// 1. Cadastrar Livro
formulary.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nomeInput = document.getElementById("name").value;
    const authorInput = document.getElementById("author").value;
    const genderInput = document.getElementById("gender").value;
    const quantityInput = document.getElementById("quantity").value;

    const newRowHTML = `
        <tr>
            <td>${nomeInput}</td>
            <td>${authorInput}</td>
            <td>${genderInput}</td>
            <td class="text-center">${quantityInput}</td>
            <td class="text-center">${quantityInput}</td>
            <td class="text-center">
                <button type="button" class="delete-button">Excluir</button>
            </td>
        </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", newRowHTML);

    // Verifica e exibe a tabela
    checkTableVisibility();

    formulary.reset();
});

// 2. Excluir Livro
tableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const row = event.target.closest("tr");
        row.remove();
        
        // Verifica se ainda existem itens; se não houver, esconde a tabela
        checkTableVisibility();
    }
});