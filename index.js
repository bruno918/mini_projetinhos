var algumacoisa = "hello world!"

console.log(typeof algumacoisa)

/////////////////////////////////
var nome = "Bruno ";
var idade = 16
var deMaior = false
var prof = ["Ricardo", "Régis", "André", "Elias", "Valdecir"]

var profs =  { eu: "Bruno", idade: 16, dmaior: false }

console.log("Eu: " + profs.eu + "\nIdade: " + profs.idade + "\nDe maior: " + profs.dmaior)
console.log(nome + "\nIdade: " + idade + "\nDe maior: " + deMaior + "\nProfessores: " + prof)
////////////////////////////////
var um = 1;
var dois = 2;
var tres = um + dois 
console.log(tres)
//////////////////////////////
function doisp(p1, p2) {
  
     if (p1 === p2) {
       return console.log(true)
     } else {
        return console.log(false)
     }
}

doisp("opa", "oi") 
doisp('OLA', 'HELLO WORLD')
doisp('OLA', "OLA")
////////////////////////////
function nsei(){
    array = ["Ricardo", "Régis", "André", "Elias", "Valdecir"]
    console.log("array " + array[1])
}
nsei()
////////////////////////////////
function nseitbm(){
    array = ["Ricardo", "Régis", "André", "Elias", "Valdecir"]
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
        
    }
}
nseitbm()

function verificar () {
    var peso = document.querySelector("#peso").value
    var altura = document.querySelector("#altura").value
    
    var resultado =  (peso / altura)
    if (resultado < 17) {
        return alert(resultado + " , você está muito abaixo do peso")
    } else if (resultado >= 17 && resultado <= 18.49) {
        return alert(resultado + " , você está abaixo do peso")
    } else  if (rresultado >= 18 && resultado <= 24.99) {
        return alert(resultado + " , você está peso normal")
    } else  if (rresultado >= 25 && resultado <= 29.99) {
        return alert(resultado + " , você está acima do peso")
    }else  if (rresultado >= 30 && resultado <= 34.99) {
        return alert(resultado + " , você está obeso")
    }else  if (rresultado >= 35 && resultado <= 39.99) {
        return alert(resultado + " , gordãokkkkkkkkk")
    } 
}
