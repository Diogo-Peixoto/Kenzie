function divisors(integer) {
    let a = [];
    let b = 0
    
    for(let i = 2;i < integer;i++){

        if(integer % i == 0){
            if(i != integer){
                a.push(i)
            }
            b++
        }
        
    }

    if(b < 1){
        return `${integer} is prime`
    }

    return a
    
};

function friend(friends){
   let dado = []
   
}

function descendingOrder(n){
    let dadoArray = []
    let dadoNum = ""
    let z = n.toString()
    
    for(let i = 0;i <= z.length -1;i++){
        dadoArray.push(z[i])
    }
    dadoArray.sort((a,b)=> b-a)

    for(let i = 0;i <= dadoArray.length -1;i++){
        dadoNum += parseInt(dadoArray[i])
    }
    
    return parseInt(dadoNum)
}

console.log(descendingOrder(432390))

