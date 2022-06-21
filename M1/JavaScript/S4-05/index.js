function soma(valor1, valor2, valor3, valor4){
    return valor1 + valor2 + valor3 + valor4
}

function media(value){
    return value / 4
}

function resultado(nota1, nota2, nota3, nota4){ 
    return media(soma(nota1, nota2, nota3, nota4))
}
  
console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

//--------------------------------------------------------------------//


function convert(currentValue, currentType1, currentType2){
    if(currentType1 == 'Celsius' && currentType1 != currentType2){

        return convertToCelsius(currentType2, currentValue)

    }else if(currentType1 == 'Fahrenheit' && currentType1 != currentType2){

        return convertToFahrenheit(currentType2, currentValue)

    }else if(currentType1 == 'Kelvin' && currentType1 != currentType2){

        return convertToKelvin(currentType2, currentValue)

    }else{
        return console.log("Digite um tipo diferente do atual para ser convertido")
    }
}
convert(1, 'Kelvin', 'Celsius')


function convertToCelsius(currentType, currentValue){
    if (currentType == 'Fahrenheit') {

        return  console.log((currentValue * 1.8) +32);
    }
    if (currentType == 'Kelvin') {
        return console.log(currentValue + 273.15);
    }
}

function convertToFahrenheit(currentType, currentValue){

    if (currentType == 'Celsius') {

        return  console.log((currentValue - 32) * 5/9);
    }
    if (currentType == 'Kelvin') {
        return console.log((currentValue - 32)* 5/9 + 274.15);
    }
}

function convertToKelvin(currentType, currentValue){
    if (currentType == 'Celsius') {

        return  console.log(currentValue - 273.15);
    }
    if (currentType == 'Fahrenheit') {

        return  console.log((currentValue -273.15)* 9/5 +32);
    }
}







function valor(valor){
    console.log(` ${typeof(x)}`)
}



valor(2)


