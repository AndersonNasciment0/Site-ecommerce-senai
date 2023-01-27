//efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
//Validação de Login
function login() {
  let logado = 0;
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let aviso = document.querySelector(".aviso");

  if (usuario == "Anderson" && senha == "acessandoconta") {
    window.location = "index.html";
    logado = 1;
  }
  if (logado == 0) {
    aviso.textContent = 'Dados incorretos!'
    aviso.style.color = 'red'
    aviso.style.textAlign = 'center'


  }
}

//Ativar alert no botão cadastrar

function cadastro () {
    alert("Cadastrado com sucesso!")
    window.location.href = "index.html"
}

// Manipulação do formulário
/*let form1 = document.querySelector("#section-login");
let form2 = document.querySelector("#form-cadastrar");
let btnCadastro = document.querySelector(".btn-info");

btnCadastro.addEventListener("click", ocultOrNot);

function ocultOrNot() {
  form1.style.display = "none";
  form2.style.display = "block";
  btnCadastro.style.display = "none";
}*/
