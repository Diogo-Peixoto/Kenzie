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

console.log(divisors(12))