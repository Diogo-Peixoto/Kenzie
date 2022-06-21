function somar(valor1, valor2){
    return console.log(valor1 + valor2);
}


function valor(valor){
    console.log(`O valor (${valor}) é do tipo (${typeof(valor)})`)
}



function somarNotas(nota1, nota2, nota3, nota4){
    if(typeof(nota1,nota2,nota3, nota4) == 'number'){
        return console.log(nota1+nota2+nota3+nota4)
    }else{
        return console.log("O campo só pode receber números")
    }
}


somarNotas(2,2,2,2)