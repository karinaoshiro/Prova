class Minhaclasse {
    constructor() {
      console.log("Sua classe foi inicializada.");
      <form onsubmit="enviarFormulario();">
      
      </form>
      function enviarFormulario() {

        document.getElementById("mensagem").innerHTML = "Mensagem enviada com sucesso";
      }
      let contador = 0;
const elementoContador = document.getElementById("contador");

function aumentarContador() {
  contador++;
  elementoContador.textContent = contador;
}

setInterval(aumentarContador, 1000);
const meuBotao = document.getElementById("meuBotao");

meuBotao.addEventListener("click", function() {
  meuBotao.classList.add("animar-botao");
  
  // Remova a classe de animação depois de um curto período de tempo
  setTimeout(function() {
    meuBotao.classList.remove("animar-botao");
  }, 200);
});


    }
    
    

}
  
  