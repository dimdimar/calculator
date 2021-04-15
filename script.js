var display = document.getElementById('display')
var clearDisplay = false;
var firstNumber = 0;
var secondNumber = 0;
var symbol ='';
var previousSymbol;
var afterDecimals = false;
var denominator = 10

function getNumber(value) {
  if (afterDecimals == true && (Number(display.innerHTML) + value == 0 || Number(display.innerHTML) + value == NaN)){
    denominator = denominator*10
    display.innerHTML += value 
  }else {  
    if(afterDecimals && Number(display.innerHTML) == parseInt(display.innerHTML)){
      firstNumber = firstNumber + (value/denominator)
      display.innerHTML = firstNumber.toString()
      denominator = 10
      afterDecimals = false
    }else{
      if(display.innerHTML == "0" || clearDisplay) {
          display.innerHTML = value.toString()
          firstNumber = Number(value)
          clearDisplay = false
        } 
        else {
          display.innerHTML += value.toString()
          firstNumber = Number(display.innerHTML)
      }
    }
  }
console.log(firstNumber)
console.log(secondNumber)
}

function getSymbol(value) {
if (symbol !== ""){
  calculate()
  clearDisplay = true;
}
  symbol = value
  previousSymbol = value
  console.log(symbol)
  secondNumber = Number(display.innerHTML)
  firstNumber = 0
  clearDisplay = true;


}

function calculate() {
if(firstNumber == 0){
  firstNumber = Number(display.innerHTML)
  symbol = previousSymbol
}
switch(symbol) {
  case '+': 
    display.innerHTML = ( secondNumber + firstNumber ).toString()
    break
  case '-':
    display.innerHTML = ( secondNumber - firstNumber ).toString()
    break
  case '*':
    display.innerHTML = ( secondNumber * firstNumber ).toString()
    break
  case '/':
  display.innerHTML = ( secondNumber / firstNumber ).toString()
    break
  case '%':
  display.innerHTML = ( secondNumber / firstNumber ).toString()
    break
}

firstNumber = 0
previousSymbol = symbol
symbol = ""
}

function AC(){
firstNumber = 0
secondNumber = 0
display.innerHTML= '0'
symbol = ""
}

function decimals(){
  afterDecimals = true
  display.innerHTML = `${firstNumber}.`
}

function plusMinus (){
  let x = Number(display.innerHTML)
  if ( x> 0){
    x= x - x*2
    display.innerHTML = x.toString()
  }else if (x < 0 ){
    x= x + Math.abs(x)*2
    display.innerHTML = x.toString()
  }else{
    display.innerHTML = "0";
  }
}

function percentage() {
  firstNumber = (secondNumber * firstNumber)/100 
  calculate()
}