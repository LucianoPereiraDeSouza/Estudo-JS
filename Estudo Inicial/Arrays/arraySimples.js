const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stout
});
class Opcao {
    constructor(callback) {
        rl.question("Selecione alguma opção: (1)Soma    (2)Subtração"), input => {
            this.valor = parseFloat(input);
            callback(this.valor);
        };
    }
}
function Calculadora(){
    if(Opcao() == 1) {
        return Soma();
    }
    else{
        return Subtracao();
    }
    rl.close();
}
function Soma(){
    let a = 1;
    let b = 2;
    return a + b;
}
function Subtracao(){
    let c= 3;
    let d = 4;
    return d - c;
}
funciton Main(){
    new Opcao(Calculadora);
}
Opcao.Main();