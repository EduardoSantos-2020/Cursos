function Carro(placa,modelo){
    this.placa=placa;
    this.modelo=modelo

}
fox={};
Carro.call(fox,'AFR-4457','FOX')

console.log(fox);

fiat={};
Carro.apply(fiat,['HJK-6687','UNO']);

console.log(fiat);