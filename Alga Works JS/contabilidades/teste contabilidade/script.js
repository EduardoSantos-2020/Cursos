$(function(){
   var valorElement=$('#numero');
   var resultadoElement=$('#resultado');
   var resultadoMoney=$('#inresul');
   var configmask={
    prefix:'R$ ',
   decimal:',',
   thousands:'.'
   }

    valorElement.on('keyup',function(){
       
        resul=0;

        valor=valorElement.maskMoney('unmasked')[0];
         
        resul=valor
      
            resultadoMoney.maskMoney('mask',resul);
            resultadoMoney.maskMoney(configmask);
            valorElement.maskMoney(configmask);
            resultado.innerHTML=resultadoMoney.val();
        });
        
})