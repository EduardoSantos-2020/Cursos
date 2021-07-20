$(function(){
    $('#toque-botao').on('click',function(){
        console.log('clicou');
    });
    $('#12').on('keyup',function(e){ 
        console.log(e.keyCode);
        if(e.keyCode===13){
            console.log('Enter');
           
        }else{
            alert('Erro ao carregar')
        }
    })

});