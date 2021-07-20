var gol={cor:"vermelho",modelo:"gol G7",ano:"2020",portas:"2 portas"}

//Mudar obigeto da lista

gol.portas="4 portas";//

console.log(typeof gol);

console.log(gol);

//adicionar 
gol.potencia="1.5";//

gol.ligar=function(){ 
    console.log("ligando");
} 
gol.ligar();

var camaro={
        cor:"azul", 
        modelo:"sedan",
        motor:"2.5",
            ligando:function(){
             console.log("Ligando o carro");
            }
        };
        camaro.ligando();
        console.log('Camaro',camaro);