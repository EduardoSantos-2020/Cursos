criarCarrodafiat= function(nome,placa,fabricante){
    return{
        nome:nome,
        placa:placa,
        fabricante:fabricante,
    }
}

fox=criarCarrodafiat('fiat','ASD-457','FIAT')
    console.log('FOX',fox);

gol=criarCarrodafiat('gol','QWF-589','GOL')
console.log('GOL',gol)