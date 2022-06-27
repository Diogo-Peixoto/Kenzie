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

function calculateAge(s1, s2) {
    if(s1 < s2){
        if(s2-s1 > 1){
            return `You are ${s2-s1} years old.`
        }else{
            return "You are 1 year old."
        }

    }else if(s1 > s2){
        if(s2-s1 > 1){
            return `You will be born in ${s1-s2} years.`
        }else{
            return "You will be born in 1 year."
        }

    }else{
        return "You were born this very year!"
    }
}

function monkeyCount(n) {
    let dado =[]
    for(let i = 1; i <= n;i++){
      dado.push(i)
    }
    return dado
}


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
        
       if(mpg * fuelLeft >= distanceToPump){
        return true
    }else{
        return false
    }
};

function updateLight(current) {
  
    if(current == "green"){
        return "yellow"
    }else if(current == "yellow"){
        return "red"
    }else if(current == "red"){
        return "green"
    }
  
}

