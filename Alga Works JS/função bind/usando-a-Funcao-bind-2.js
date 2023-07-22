Estado=(function(){
    function Estado(){
        this.comboEstado=$('#combo-estado')
        
};
Estado.prototype.iniciar=function(){
             $.ajax({
                 url:'http://localhost:8080/estados',
                 method:'GET',
                 dataType:'jsonp',
                 success:onestadosretornados.bind(this),
                 error:onerror,   
                });
};

function onestadosretornados(estados){
           this.comboEstado.html('<option>selecionar estados</option>')
           estados.forEach(function(estado){
           optionEstado=$('<option>').val( estado.ul).text(estado.nome)
           this.comboEstado.append(optionEstado);
            }.bind(this));
       }
       function onerror(){
           alert("Ocorreu um erro no servidor!");
      }
    return Estado;
})();

$(function(){
    estado=new Estado();
    estado.iniciar();
    // cidades=new Cidade(estado);
    // cidades.iniciar()
});