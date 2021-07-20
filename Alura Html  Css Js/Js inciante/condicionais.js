console.log("condicionais")

const listadeDestinosposiveis = new Array(//criar lista
    "Sao Paulo", "Rio De Janeiro", "Salvador", "Fortaleza")

const idadedocomprador = 12
const estaAcompanhada = true //false

if(idadedocomprador >= 18) {
    console.log("Comprador maior de idade");
    console.log("Destinos Posiveis");
    listadeDestinosposiveis
}else if(estaAcompanhada == true) {
        console.log("comprador com acompanhate");
        console.log("Destinos Posiveis");
        console.log(listadeDestinosposiveis);
}
else {
    (idadedocomprador <= 18 && estaAcompanhada == false)
    listadeDestinosposiveis.splice;
    console.log("Comprador menor de idade");
    console.log("Nao posso vender");
    console.log("Não esta acompanhada")
}
