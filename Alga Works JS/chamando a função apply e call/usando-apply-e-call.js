Estado = (function (){
    function Estado(){
        this.comboEstado=$('#combo-estado');
        this.emitter =$({});
        this.on=this.emitter.on.bind(this.emitter)
    };
    Estado.prototype.iniciar = function () {
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onestadosretornados.bind(this),
            error: onerror
        });
        this.comboEstado.on('change',onEstadosAlterado.bind(this))

    };
    function onEstadosAlterado(){
        this.emitter.trigger('alterado',this.comboEstado.val());
       
    };
    function onestadosretornados(estados){
        this.comboEstado.html('<option value="">selecionar estados</option>')
        estados.forEach(function(estado){
            opitionEstado=$('<option>').val(estado.uf).text(estado.nome)
            this.comboEstado.append(opitionEstado);
        }.bind(this))
    }
    function onerror() {
        alert("Ocorreu um erro no servidor!");
    };
    return Estado;
})();
Cidade = (function() {
    function Cidade(estado) {
        this.comboCidade=$('#combo-cidade');
        this.estado=estado
    };
    Cidade.prototype.iniciar = function(){ 
        this.estado.on('alterado',onEstadoselecionado.bind(this));
    };
    
    function onEstadoselecionado(evento,uf){
        
        if(uf){
            $.ajax({
            url: 'http://localhost:8080/cidades',
            method:'GET',
            dataType:'jsonp',
            data:{uf:uf},
            success:onCidadesRetornadas.bind(this),
            error:onError
        });
            }else{ 
                reset.call(this);
                //reset.apply(this) Array 
            }
            function reset(){;
                this.comboCidade.html("");
                this.comboCidade.attr('disabled','disabled');
            }
}
function onCidadesRetornadas(cidades){
    this.comboCidade.removeAttr('disabled');
    this.comboCidade.html('<option value="">Selecinar cidades</option>');
    cidades.forEach(function(cidade){
        opitionCidades=$('<option>').val(cidade.codigo).text(cidade.nome)
        this.comboCidade.append(opitionCidades);
    }.bind(this));
}

function onError(){
    alert('Erro ao carregar as cidades')
}
    return Cidade;
})();

$(function(){
    estado=new Estado()
    estado.iniciar();

    cidade=new Cidade(estado)
    cidade.iniciar();
})