var hoje = new Date();
var hora = hoje.getHours();
var mensagem = "";

const body = document.querySelector('body');
const header = document.querySelector('header');
const section = document.querySelector('section');

hora = prompt('digite a hora atual:');

if (hora >= 6 && hora < 12) {
    mensagem = "Bom dia";
    body.style.background = "linear-gradient(45deg,rgb(245, 245, 213),rgb(207, 189, 146))";
    header.style.backgroundColor = "rgb(207, 189, 146)";
    
}
else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde";
    body.style.background = "linear-gradient(45deg,rgb(237, 176, 130),rgb(198, 126, 72))";
    header.style.backgroundColor = "rgb(198, 126, 72)";

}
else if (hora >= 18) {
    mensagem = "Boa noite";
    body.style.background = "linear-gradient(45deg,rgb(42, 62, 116),rgb(12, 31, 79))";
    body.style['color'] = "white";
    header.style.backgroundColor = "rgb(19, 38, 88)";
    
}

section.innerHTML = mensagem;

var dia  = parseInt(prompt('digite o dia da semana:'));
var m = '';

switch(dia){
    case 1:
        m = '2a-feira';
        break;
    case 2:
        m = '3a-feira';
        break;
    case 3:
        m = '4a-feira';
        break;
    case 4:
        m = '5a-feira';
        break;
    case 5:
        m = '6a-feira';
        break;
    default:
        m = 'fim de semana';
}

section.innerHTML += `<br>hoje é ${m}`;

var idade = prompt('digite a sua idade:');

(idade>=18)? section.innerHTML+='<br>de maior' : section.innerHTML+='<br>novo';

section.innerHTML+='<br>';

let pessoa = 'classe media';
let salario = 2000;

section.innerHTML+=`<br>classe: ${pessoa}`;
section.innerHTML+=`<br>salario: ${salario}`;

while(pessoa == 'classe media' && salario < 7000){
    salario *= 1.15;

    section.innerHTML+=`<br>salario: ${salario.toFixed(2)}`;

    if (salario >= 7000){
        pessoa = 'rica';
    }
}

section.innerHTML+=`<br>classe: ${pessoa}`;
section.innerHTML+=`<br>salario: ${salario.toFixed(2)}`;

section.innerHTML+='<br>';

var num = prompt('digite numero:');

for(let i=0; i<10; i++){
    section.innerHTML+=`<br>${i} * ${num} = ${i*num}`;
}


section.innerHTML+='<br>';

let lista_frutas = ['banana', 'maça', 'abacaxi', 'pitaya', 'morango', 'uva', 'caqui', 'laranja'];
lista_frutas.forEach((fruta) => {section.innerHTML+=`<br>${fruta}`} );
