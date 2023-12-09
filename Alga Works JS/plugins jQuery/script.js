$(function(){
    var valorElement= $('#valor');
    var resulElement=document.getElementById('resultado');
    var totalresultado=$('#total-resultado');
    var mascaraConfig={
    decimal:',',
    thousands:'.',
    prefix:'R$ ',
    }

    valorElement.maskMoney(mascaraConfig)
    
    valorElement.on('keyup',function(){
        
        resultado=0;
        
        valor=valorElement.maskMoney('unmasked')[0]; // quando estiver importado jquery
        //valor= parseFloat(valorElement.val()? valorElement.val():0); val() / usado no jquery
        //valor = parseFloat(valorElement.valor? valorElement.valor:0);  / usando javascritp 
        
        if(valor > 0 && valor < 10){
            resultado = valor + valor*0.3+5;    
            
        }else if(valor >= 10 && valor < 50){
            
            resultado=valor+valor*0.1+2;
        }else{
            resultado=valor;   
        } 
        
        totalresultado.maskMoney('mask',resultado);
        totalresultado.maskMoney(mascaraConfig);
        resulElement.innerHTML=totalresultado.val();
    });
    
});


