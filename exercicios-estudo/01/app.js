
let dia = parseInt(prompt('digite o dia do vencimento da fatura:'));
let mes = parseInt(prompt('digite o mes do vencimento da fatura:'));
let ano = parseInt(prompt('digite o ano do vencimento da fatura:'));

let valor = parseInt(prompt('informe o valor da fatura:'));


const data_vencimento = new Date(dia, mes, ano);

const hoje = new Date();

if (data_vencimento < hoje) {
    alert('sua fatura está atrasada, será cobrada uma taxa de 10%');
    alert('o valor original era: ' + valor);
    valor *= 1.1;
    alert('o valor atualizado a pagar é:' + valor);
} else {
    alert('tudo certo com o prazo de vencimento. o valor continua o mesmo: ' + valor);
}