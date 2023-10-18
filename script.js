function calcularMedia(notas) {

    let soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c];
    }

    media=soma / notas.length

    return media;

}

let media; // escopo global

function aprovacao(notas){

    let media = calcularMedia(notas); //escopo função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


//Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
    contagemRegressiva(proximoNumero);

}

// contagem regressiva (50);

/*
*Formulário envio de dados para cálculo da média
*/
 document.getElementById('formulario-01').addEventListener('submit', function(evento){;

        evento.preventDefault();
        evento.stopPropagation();

        if(this.getAttribute('class').match(/erro/)){
            return false;
        }

        let dados = new FormData(this);
        
        let notas = [];

        for(let key of dados.keys()) {
           
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; //parseFloat permite numeros inteiro e decimais
           
           if(!isNaN(numero)) {
                notas.push(numero)
           }

        }

        console.log(notas);

        texto = aprovacao(notas);

        document.getElementById('resultado').innerHTML = texto;
    
    });


    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposNumericos = document.querySelectorAll('input.numero');

    for(let emFoco of camposObrigatorios){
        validaCampo(emFoco);
    }
    
    function validaCampo(elemento){

        elemento.addEventListener('focusout', function(event) {

            event.preventDefault();

            if(this.value == ""){
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            } else{
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
             }

        });

    }

    function validaCampoNumerico(elemento) {

        elemento.addEventListener('focusout', function(event) {

            event.preventDefault();

            console.log(this.value);

            //let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;//

            if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.pareNode.classList.remove('erro');
            }else{
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                this.classList.add('erro');
                this.pareNode.classList.add('erro');
                return false;
            }
        
        });
    
    }


    function validaEmail(elemento){

        elemento.addEventListener('focusout', function(event){

            event.preventDefault();

            const emailValido = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+(\.[a-z]+)?/i;
            if(this.value.match(emailValido)){
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.pareNode.classList.remove('erro');
            } else {
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                this.classList.add('erro');
                this.pareNode.classList.add('erro');
                return false;
            }
            
        });
        
    }