console.log("\nTrabalhando com Loopis")

const listadeDestinosposiveis=new Array //criar lista
("Sao Paulo", 
"Rio De Janeiro",
"Salvador",
"Fortaleza",)
const idadedocomprador= 12
const estaAcompanhada=true
let temPassagemComprada=true;
const destino="Sao Paulo";

const podeComprar = idadedocomprador >= 18 || temPassagemComprada==true;

let=destinoExiste=false;
let=contador=0
while(contador<3){
   if (listadeDestinosposiveis[contador]==destino){
    destinoExiste=true;
   contador=+1
}  
   console.log("Destino Existe",contador)

   if(podeComprar && destinoExiste){
       console.log("Boa Viagem")
   }else{
       console.log("Aconteceu um Erro")
   }
}