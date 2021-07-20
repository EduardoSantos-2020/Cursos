ano={
    ano:'2020',
}
 gol=Object.create(ano)
gol.marca='VW',
gol.modelo='POLO',
gol.placa='qwe-777',
// gol={
//     marca:'VW',
//     modelo:'Polo',
//     placa:'qwe-777'
// }
// fiat={
//     marca:'FIAT',
//     modelo:'UNO',
//     placa:'wee-888'
// }
fiat=Object.create(ano);
fiat.marca='FIAT',
fiat.modelo='UNO',
fiat.placa='wee-888',

console.log('GOL',gol);
console.log('FIAT',fiat);

console.log('gol ano',ano);
console.log('fiat ano',ano);

console.log(Object.getPrototypeOf(gol)===Object.getPrototypeOf(fiat));

Object.setPrototypeOf(gol,ano);
Object.setPrototypeOf(fiat,ano)
console.log('Gol ano->',gol.ano);
console.log('FIAT ano->',fiat.ano);

console.log('tostrng',gol);