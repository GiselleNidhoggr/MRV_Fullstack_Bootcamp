console.log('Hello world!');

//var y=0;
var desconto=0.2;
const PRECO=2;
var total=PRECO-desconto;

function soma(a,b){
console.log(a+b);
return a+b; //8
}
soma(3,5);

function returnEvenValues(array){
    let evenNums=[];
    for(let i=0;i<array.lenght;i++){
    if(array[i]%2===0){
        evenNums.push(array[i]);
    } else{
        console.log(`${array[i]} não é par!`)
    }
}
console.log('Os numeros pares são: 'evenNums);
}
let array=[1,2,4,5,7,8];
returnEvenValues(array);
//retorna 2,4 e 8
//node nomeDoArquivo.JS no console