$(function(){
selecaotodosOsusuarios=$('#selecao-de-todos-email');
selecionarCadausuarios=$('.selecionar-usuarios');

function subliarUsuarios(){
  selecionarCadausuarios.filter(':checked').parents('tr').addClass('estilizar');
  selecionarCadausuarios.filter(':not(:checked)').parents('tr').removeClass('estilizar');

}
    selecionarCadausuarios.click(function(){

    todososusuarios=selecionarCadausuarios.filter(':checked').length;
    checked=selecionarCadausuarios.length===todososusuarios;
    selecaotodosOsusuarios.prop('checked',checked);
    });

    selecaotodosOsusuarios.click (function(){
    selecionarCadausuarios.prop('checked',selecaotodosOsusuarios.prop('checked'));
      // if(selecaotodosOsusuarios.prop('checked')){
      //   selecionarCadausuarios.parents('tr').addClass('estilizar');
      //   }else{selecionarCadausuarios.parents('tr').removeClass('estilizar')};

   subliarUsuarios();
  });

selecionarCadausuarios.on('change',function(event){
  // selecionarCadausuarios=$(event.target);
  // if(selecionarCadausuarios.prop('checked')){
  //   selecionarCadausuarios.parents('tr').addClass('estilizar');
  //   }else{selecionarCadausuarios.parents('tr').removeClass('estilizar')};
   subliarUsuarios();
  });
});






