contador=(function(){
    valor='0';
    incrementar=function(){
        valor++
    }
    reset=function(){
       console.log('resultado...',valor);
       valor='0';
    } 
    return{
        incrementar:incrementar,
        reset:reset
    }
}())
contador.incrementar(),
contador.incrementar(),
contador.reset()

    