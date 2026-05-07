
const formCadastrar = document.getElementById("form-cadastrar")

formCadastrar.addEventListener("submit", function(event){
   event.preventDefault()

   var nome = document.getElementById("nome").value
   var sobrenome = document.getElementById("sobrenome").value
   var email = document.getElementById("email").value
   var senha = document.getElementById("senha").value
   var ddd = document.getElementById("ddd").value
   var telefone = document.getElementById("telefone").value
   var endereco = document.getElementById("endereco").value
   var numero = document.getElementById("numero").value
   var cidade = document.getElementById("cidade").value
   var cep = document.getElementById("cep").value
   var dataNascimento = document.getElementById("data-nascimento").value
   var genero = document.getElementById("genero").value


   const usuario = {
      nome: nome,
      senha: senha,
      email: email,
      senha: senha,
      ddd: ddd,
      telefone: telefone,
      endereco: endereco,
      numero: numero,
      cidade: cidade,
      cep: cep,
      dataNascimento: dataNascimento,
      genero: genero
   }

   localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))


   alert("Cadastro Realizado com Sucesso!" +  localStorage.getItem("usuarioCadastrado"))
})




const formLogar = document.getElementById("form-logar")

formLogar.addEventListener( 'submit', function(event) {

   event.preventDefault()

   const usuarioCadastrado = localStorage.getItem("usuarioCadastrado")

   const usuarioLogin =  JSON.parse(usuarioCadastrado)

   console.log(usuarioLogin.email)
   

   var emailDigitado = document.getElementById("email").value

   var senhaDigitada = document.getElementById("senha").value

   if(emailDigitado==usuarioCadastrado.email && senhaDigitada==usuarioCadastrado.senha){
      window.alert("Usuário Logado com sucesso!")
      window.location.href="index.html"
   }  else {
      window.alert("Atenção: Usuário ou Senha Incorretos")
   }

})
