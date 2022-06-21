let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]


//console.log(nomeDosCompetidores.shift());
//console.log(nomeDosCompetidores.pop());

for(let i = 0; i < nomeDosCompetidores.length;i++){
    //console.log(nomeDosCompetidores[i])
}

//-------------------------------------------------------

function testaPosicao(lista, posicao){
    for(let i = 0;i < lista.length;i++){
        if(posicao == 0 && lista[i] == "Vou ser Dev"){
            return //console.log("Ganhou");
        }
    }
    return console.log("Não ganhou")
}

let carrinhoDeCompras =
    [
        "Funko Pop Kakashi",
        "Dragon Ball Collection",
        "Vou ser Dev"
    ]
testaPosicao(carrinhoDeCompras, 0)

