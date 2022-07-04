function decode(array){

    let  dado = []

    for(let i = 0 ; i < array.length;i++){
        if(array[i] % 2 != 0){

           dado.push(i)
        }else{
            dado.push(array[i])
        }
    }
    
    return array
}

