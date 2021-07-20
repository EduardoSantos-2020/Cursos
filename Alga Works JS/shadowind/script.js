
 fiat={
marca:'FIAT',    
modelo:'UNO',
placa:'wee-888',
ano:'2019',
}
ano={ano:'2020'
}
console.log('FIAT',fiat)
console.log('fiat ano',ano);

Object.setPrototypeOf(fiat,ano)
console.log('FIAT ano->',fiat);//ano 2019
delete fiat.ano
console.log('FIAT ano-->',fiat);//ano 2020

for(propriedade in fiat){
    console.log(propriedade,fiat.hasOwnProperty(propriedade));
}