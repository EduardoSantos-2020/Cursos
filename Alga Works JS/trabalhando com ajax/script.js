$(function(){
    resposta=$.ajax({
        url:'http://localhost:8080/estados',
        method:'GET',
        dataType:'jsonp'
    })
    resposta.done(function(estado){
        comboEstado=$('#combo-estado');
        comboEstado.html('<option>selecionar estados</option>');
            estado.forEach(function(estado){
                 opitionEstado=$('<option>').val( estado.uf).text(estado.nome)
                 comboEstado.append(opitionEstado);
                });
    })
    resposta.fail(function(){
        alert("Ocorreu um erro no servidor!");
    })
})
