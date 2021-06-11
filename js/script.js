document.getElementById("botaoEnviar").addEventListener("click",ValidaFormulario )

function ValidaFormulario(){
  if(document.getElementById("nome").value != "" && 
    document.getElementById("email").value != "" &&
    document.getElementById("numero").value != ""){
    alert("Prontinho!Você receberá as informações por email.")
  }else{
  alert("Por favor, preencha os campos nome e email!")
  }
}
