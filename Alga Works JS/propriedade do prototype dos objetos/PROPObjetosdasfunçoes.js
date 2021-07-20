Carro=function(nome,placa,fabricante){
this.nome=nome,
this.placa=placa,
this.fabricante=fabricante
};

gol=new Carro('fox','YUI-77965','VW')
  

hb20= new Carro('HB20','FJKF-7689','hunday')
  

Carro.prototype.ano='2020',

console.log('ANO',gol.ano);
console.log('ANO',hb20.ano);