const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Econômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProduts=products.map(product=>{
if(product.price>=30){

return {name:product.name,price:product.price/2}
}
})
console.log(products);
console.log(saleProduts);