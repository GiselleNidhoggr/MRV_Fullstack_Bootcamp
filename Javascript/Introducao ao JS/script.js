alert('Se você lê isso é porque está funcionando!');
//Tipos Primitivos
//boolean
var vOuF=false;
console.log(typeof(vOuF));

var comparacao='0'==0;
console.log(comparacao);

var comparacao2='0'===0;
console.log(comparacao2);

//number
var numerox=1;
console.log(typeof(numerox));

//string
var nome='Giselle Nidhoggr'
console.log(typeof(nome));
console.log(nome);

//variavel
var funcao=function(){}
console.log(typeof(funcao));

var variavel='no,inho';
var variavel='aqui';
console.log(variavel);

//let em escopo local
let variavel2='algo';
variavel2='NA BASE DO TESTE SE APRENDE JAVASCRIPT'
console.log(variavel2);

//constante
const constante='Giselle';
console.log(constante);

//escopo
var escopoglobal='global';
console.log(escopoglobal);

function escopolocal(){
    let escopolocalinterno='local';
    console.log(escopolocalinterno);
};
escopolocal();

//Regras de Uso
//Iniciar variavel com letras, não numeros
//Sem espaços
//nomeMinusculo nome_minusculo
//variaveis devem ser declaradas no topo do bloco de codigo

//Operacoes aritimeticas
var adicao=1+1;
console.log(adicao);

var subtracao=1-1;
console.log(subtracao);

var divisao=6/2;
console.log(divisao);

var divisao_int=6%2;
console.log(divisao_int);

var multipl=2*5;
console.log(multipl);

//  && - e  - todos valores verdadeiros
//  || - ou - aceita qualquer valor
//  ! - nao - inverte o valor

//O que são vetores ou arrays
let array=['string',1,true,['array2'],['array3']];
console.log(array);

console.log(array[3]);

array.forEach(function(item,index){console.log(item,index)});

array.push('novo item');
console.log(array);

//push adiciona item
//pop remove item
//shift remove item do inicio
//unshift adiciona item no inicio do array
//indexOf indica o numero de um indice dentro do array
//splice apaga itens de um array
//slice retorna parte de um array existente

//Objetos sao dados que possuem propriedades e valores

//estruturas condicionais
var j1=1;
var j2=1;
var placar;

if(j1>0){
    console.log('Jogador 1 marcou ponto');
} else if(j2>0){
    console.log('Jogador 2 marcou ponto');
}else{
    console.log('Ninguem marcou ponto');
}