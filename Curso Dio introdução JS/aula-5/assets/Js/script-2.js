btnL=document.getElementById('btn-left');
btnR=document.getElementById('btn-right');
contadornumber=document.getElementById("contador");

contador =0;

btnL.addEventListener('click',function(){
  
            contador--
          
            if ( contador >= -10) {
                 contadornumber.innerHTML=contador; 
                 
                 if (contador<=-1) {
                    contadornumber.style.color='red'
                 }      
            }
       
}) 

btnR.addEventListener('click',function () {
   
          contador++

          if ( contador <= 10) {
               contadornumber.innerHTML=contador
            
               if (contador>=0) {
                   contadornumber.style.color='white'
               }
          }
   
})

