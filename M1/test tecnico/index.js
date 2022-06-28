function sequencePosNum(num){
    let array = []
    
    for(let i = 0; i <= num;i++){
        if(i % 2 == 0){
            array.push(i)
        }
    }
   return array
}
