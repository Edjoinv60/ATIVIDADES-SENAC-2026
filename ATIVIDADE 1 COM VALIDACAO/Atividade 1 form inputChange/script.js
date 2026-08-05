const formulario = document.getElementById("formulario");
const submitButton = document.getElementById("botao");
formulario.addEventListener("input", function (event) {
  console.log(event.target.value);

  const nomeInput = document.getElementById("nome")
  const emailInput = document.getElementById("email")
  const senhaInput = document.getElementById("senha")
  const c_senhaInput = document.getElementById("c_senha")

  const nomeRegex = /^[A-Za-zÀ-ÿ ]{12,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const senhaRegex = /^(?=.*[A-Z]).{8,}$/;

  nomeInput.addEventListener('input', validacao);
  emailInput.addEventListener('input', validacao);
  senhaInput.addEventListener('input', validacao);
  c_senhaInput.addEventListener('input', validacao);

  function validacao() {
    const nomeError = validacaoNome();
    const emailError = validacaoEmail();
    const senhaError = validacaoSenha();
    const c_senhaError = validacaoCSenha();

    if (nomeError && emailError && senhaError && c_senhaError) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }

  }

  function validacaoNome() {
    const nomeError = nomeRegex.test(nomeInput.value);
    setFieldStatus(nomeInput, nomeError, "Nome deve ter no mínimo 12 caracteres.");
    return nomeError;
  }

  function validacaoEmail() {
    const emailError = emailRegex.test(emailInput.value);
    setFieldStatus(emailInput, emailError, "Email inválido.");
    return emailError;
  }

  function validacaoSenha() {
    const senhaError = senhaRegex.test(senhaInput.value);
    setFieldStatus(senhaInput, senhaError, "Senha deve ter no mínimo 8 caracteres e pelo menos uma letra maiúscula.");
    return senhaError;
  }

  function validacaoCSenha() {
    const c_senhaError = senhaInput.value === c_senhaInput.value && c_senhaInput.value !== '';
    setFieldStatus(c_senhaInput, c_senhaError, "As senhas não coincidem.");
    return c_senhaError;
  }

  function setFieldStatus(input, isValid, errorMessage = '') {
    const errorSpan = input.parentElement.querySelector('.error-message');

    if (isValid === true) {
      input.classList.remove('invalid');
      input.classList.add('valid');
      errorSpan.textContent = '';
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      errorSpan.textContent = errorMessage;
    }
  }

});

