const formulario = document.getElementById("formulario")

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome").value
    const emailInput = document.getElementById("email").value
    const senhaInput = document.getElementById("senha").value
    const c_senhaInput = document.getElementById("c_senha").value

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const senhaRegex = /^(?=.*[A-Z]).{8,}$/;

    if (
        !emailRegex.test(emailInput)
    ) {
        alert('Email ínvalido')
    }
    if (
        !senhaRegex.test(senhaInput)
    ) {
        alert('Senha Ínvaldia')
    }

    if (senhaRegex.test(senhaInput)) {

        if (senhaInput != c_senhaInput) {
            alert('Senhas não Conferem')
        }

    }
    
    formulario.reset ()

    console.log(nomeInput)
});

