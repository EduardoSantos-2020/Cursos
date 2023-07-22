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
                 optionEstado=$('<option>').val( estado.uf).text(estado.nome)
                 comboEstado.append(optionEstado);
                });
    })
    resposta.fail(function(){
        alert("Ocorreu um erro no servidor!");
    })
})
