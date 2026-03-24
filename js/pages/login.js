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
const register = document.getElementById('register')

nome.addEventListener('input', () => {
  nome.value = nome.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
  console.log(nome.value);
});

senha.addEventListener('input', () => {
  validarSenha()
});

cpf.addEventListener('input', () => {
  value = cpf.value.replace(/\D/g, "");

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  cpf.value = value;
})

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
  else if (validarIdade()) {
    alert('Usuário menor de idade, não é possível continuar com o cadastro');

  } else {
    alert("Usuário cadastrado com sucesso!");
  }
})



const validarEmail = () => {
  const regex = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return regex.test(email.value);
}
const validarIdade = () => {
  return idade.value < 18;
}


const validarSenha = () => {
  if (!/[^a-zA-Z0-9]/.test(senha.value)) {
    return 'senha não tem caracteres especiais';

  } else if (!/[A-Z]/.test(senha.value)) {
    return 'senha precisa de letras maiúsculas';
  }
  else if (!/\d/.test(senha.value)) {
    return 'senha precisa ter um número';
  }
  else if (senha.value.length < 10) {
    return 'senha precisa ter no mínimo 10 caracteres';
  }
}