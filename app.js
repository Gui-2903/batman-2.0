
let dive = document.getElementById("resultados-pesquisa");

function Pesquisa(valorL,valorC){
   console.log(valorL);
   console.log(valorC);
    let resultado = "";
    let i=valorL;
    let L=valorC;
        for (  i ; i < L ; i++) {
            console.log("Era:", i );
           
            for (let j = 0; j < dados[i].length; j++) {
                
                const filme = dados[i][j];
                resultado += `
                <div class="item-resultado">
                
                <a href="https://www.dc.com/characters/batman" target="_blank" >
                <img id="ponto-de-destino" class="imgbat" src= "${filme.data}" alt="">
                
                <div class="texto">
                <h1 class="nomeF">${filme.nome}</h1>
                <h1 class="h1I">
                 ${filme.ator}
                </h1>
                
                
                </div>
                </a>
                </div>
                `;
                
                
                
                
                
            }
        }
        console.log(resultado)
        dive.innerHTML = resultado;
    
        
        var destino = document.getElementById('ponto-de-destino');
  
        // Faz a página rolar até o elemento de destino
        destino.scrollIntoView({ behavior: 'smooth' });
        
       
    }

    function verificarPosicao() {
        // Verifica se o usuário está abaixo do topo da página
        if (window.scrollY > 500) {
          // Mostra o botão
          document.querySelector('.botaoVoltar').style.display = 'block';
          document.querySelector('.botaoVoltar').style.animation = 'fadeIn 1s';
        } else {
            // Esconde o botão
            document.querySelector('.botaoVoltar').style.animation = 'fadeOut 1s';
            if(document.querySelector('.botaoVoltar').style.display =='block'){
               
                document.querySelector('.botaoVoltar').addEventListener('animationend', function(event) {
                    // Muda o display para none apenas quando a animação termina
                    if (event.animationName === 'fadeOut') {
                        // Muda o display para none apenas quando a animação 'fadeOut' termina
                        document.querySelector('.botaoVoltar').style.display = 'none';
                      }
                  });
            } 
                
         
        }
      }

      window.addEventListener('scroll', verificarPosicao);

      document.querySelector('.botaoVoltar').addEventListener('click', function() {
        // Faz a página voltar ao topo
        window.scrollTo(0, 0);
      });