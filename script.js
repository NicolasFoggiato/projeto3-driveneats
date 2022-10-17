let tituloPrato;
let tituloBebida;
let tituloSobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

let total;

function selecionarPratos(pratoClicado){
   
    pratoSelecionado = document.querySelector('.dishes .selecionado');
   
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove('selecionado');
    }

   pratoClicado.classList.add('selecionado');

   tituloPrato = pratoClicado.querySelector('.food-title').innerHTML;
   precoPrato = pratoClicado.querySelector('.food-price').innerHTML;

   ativarBotao();

}

function selecionarBebidas(bebidaClicada){
   
    bebidaSelecionada = document.querySelector('.drinks .selecionado');
   
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove('selecionado');
    }

   bebidaClicada.classList.add('selecionado');

   tituloBebida = bebidaClicada.querySelector('.food-title').innerHTML;
   precoBebida = bebidaClicada.querySelector('.food-price').innerHTML;
    ativarBotao();
}

function selecionarSobremesa(sobremesaClicada){
   
    sobremesaSelecionada = document.querySelector('.desserts .selecionado');
   
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove('selecionado');
    }

   sobremesaClicada.classList.add('selecionado');
    
   tituloSobremesa = sobremesaClicada.querySelector('.food-title').innerHTML;
   precoSobremesa = sobremesaClicada.querySelector('.food-price').innerHTML;
    ativarBotao();
}

function ativarBotao(){

    if (tituloPrato !== undefined){
     if (tituloBebida !== undefined){
       if (tituloSobremesa !== undefined){
        const fecharPedido = document.querySelector('.finish-button')
                fecharPedido.classList.add('botaoSelecionado');

                fecharPedido.innerHTML = 'Fazer o Pedido';
             }
        }
    }
    
}

function fecharPedido(){
    console.log('fechar pedido')
}


