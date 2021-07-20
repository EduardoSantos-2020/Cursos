$(function(){
     var acaoatividades=$('#ação-atividades');
     var listadeAtividades=$('#lista-atividades');

    acaoatividades.on('keyup',function(evento){
         keyCode=evento.keyCode;
         
         if(keyCode === 13){  
              acaoatividades.trigger('enter',acaoatividades.val())
              acaoatividades.val('')
          }; 
     });
     acaoatividades.on('enter',function(evento,text){
          listadeAtividades.prepend('<li>'+text+'</li>')
        });  
    });