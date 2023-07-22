 estados=(function(){

     comboEstado=$('#combo-estado')
        iniciar=function(){
                    $.ajax({
                        url:'http://localhost:8080/estados',
                        method:'GET',
                        dataType:'jsonp',
                        success:onestadosretornados,
                        error:onerror
                    })
        }
        return{
            iniciar:iniciar()
        }
        function onestadosretornados(estados){
            comboEstado.html('<option>selecionar estados</option>')
            estados.forEach(function(estado){
            optionEstado=$('<option>').val( estado.ul).text(estado.nome)
            comboEstado.append(optionEstado);
             });
        }
        function onerror(){
            alert("Ocorreu um erro no servidor!");
        }
 }())
// $(function(){
//     resposta=$.ajax({
//             resposta=$.ajax({
//                 url:'http://localhost:8080/estados',
//                 method:'GET',
//                 dataType:'jsonp'
//             })
//             resposta.done(function(estado){
//                 comboEstado.html('<option>selecionar estados</option>')
//                     estado.forEach(function(estado){
//                          opitionEstado=$('<option>').val( estado.ul).text(estado.nome)
//                          comboEstado.append(opitionEstado);
//                         });
//             })
//             resposta.fail(function(){
//                 alert("Ocorreu um erro no servidor!");
//             })
//      
// })
