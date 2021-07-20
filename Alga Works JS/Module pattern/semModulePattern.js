contador={
    valor:'0',
        incrementar:function(){
        this.valor++;
    },
        resetar:function(){
            console.log('resultado do valor...',this.valor);
            this.valor='0';
},
}
contador.incrementar()
contador.incrementar()
contador.resetar()
contador.incrementar()
contador.resetar()
