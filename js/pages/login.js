const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});


const nome = document.getElementById('Username');
const email = document.getElementById('E-mail');
const senha = document.getElementById('Password');
const confirmSenha = document.getElementById('Confirm password');
const idade = document.getElementById('Idade');
const cpf = document.getElementById('CPF');
const register = document.getElementById('register');

function setError(input, message) {
  const box = input.parentElement;
  const span = box.querySelector("span");
  span.textContent = message;
}

function clearError(input) {
  const box = input.parentElement;
  const span = box.querySelector('span');
  span.textContent = "";
}


nome.addEventListener('input', () => {
  nome.value = nome.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
  if (!nome.value) {
    setError(nome, "Nome obrigatório");
  } else {
    clearError(nome);
  }
});

email.addEventListener('input', () => {
  if (!validarEmail()) {
    setError(email, "Email inválido");
  } else {
    clearError(email);
  }
})

senha.addEventListener('input', () => {
  if (validarSenha()) {
    setError(senha, validarSenha());
  } else {
    clearError(senha);
  }
});


cpf.addEventListener('input', () => {
  value = cpf.value.replace(/\D/g, "");

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  cpf.value = value;
});

confirmSenha.addEventListener('input', () => {
  if (confirmSenha.value !== senha.value) {
    setError(confirmSenha, "Senhas não coincidem");
  } else {
    clearError(confirmSenha);
  }
});

idade.addEventListener('input', () => {
   idade.value = idade.value.replace(/\D/g, "");
  if (idade.value < 18) {
    setError(idade, "Precisa ser maior de idade");
  } else {
    clearError(idade);
  }
});

cpf.addEventListener('input', () => {
  let value = cpf.value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  cpf.value = value;

  if (cpf.value.length < 14) {
    setError(cpf, "CPF inválido");
  } else {
    clearError(cpf);
  }
});

register.addEventListener('click', (e) => {
  e.preventDefault();
  if (!nome.value || !email.value || !senha.value || !confirmSenha.value || !idade.value || !cpf.value) {
    alert('Um ou mais campos não foram preenchidos');

  }
  else if (!validarEmail()) {
    alert('Email inválido!');
  }
  else if (!/[^a-zA-Z0-9]/.test(senha.value)) {
    alert('A senha precisa de 1 caractere especial');


  } else if (!/[A-Z]/.test(senha.value)) {
    alert('A senha precisa de 1 letra maiúscula');
    const strong = document.createElement('strong');
    strong.textContent = "Ta errado"
    senha.append(strong)
  }
  else if (!/\d/.test(senha.value)) {
    alert('A senha precisa ter 1 número');
  }
  else if (senha.value.length < 10) {
    alert('A senha precisa ter no mínimo 10 caracteres');
  }
  else if (confirmSenha.value !== senha.value) {
    alert('As senhas não são iguais');
  }
  else if (idade.value < 18) {
    alert('Usuário menor de idade, não é possível continuar com o cadastro');

  } else {
    alert("Usuário cadastrado com sucesso!");
  }
})




const validarEmail = () => {
  const regex = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return regex.test(email.value);
}


const validarSenha = () => {
  if (!/[^a-zA-Z0-9]/.test(senha.value)) {
    return 'Senha precisa de caractere especiail';

  } else if (!/[A-Z]/.test(senha.value)) {
    return 'Senha precisa de letra maiúscula';
  }
  else if (!/\d/.test(senha.value)) {
    return 'Senha precisa de número';
  }
  else if (senha.value.length < 10) {
    return 'Senha precida de no mínimo 10 caracteres';
  }
}