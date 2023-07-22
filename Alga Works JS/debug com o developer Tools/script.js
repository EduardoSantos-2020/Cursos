
   var valorElement=document.getElementById('numero');
   var resultadoElement=document.getElementById('resultado');
   
    valorElement.addEventListener('keyup',function(){
    let valor=valorElement.value;
    let valorFloat=parseFloat(valor?valor:0);// Pegando valor do input de str para number
    
        if(valorFloat > 0 && valorFloat < 10){
            resultado = valorFloat + valorFloat*0.3+5;    
            
        }else if(valorFloat >= 10 && valorFloat < 50){
            
            resultado=valorFloat+valorFloat*0.1+2;
        }else{
            resultado=valorFloat;   
        } 
    resultadoElement.innerHTML=resultado;
    });
       
 
        
