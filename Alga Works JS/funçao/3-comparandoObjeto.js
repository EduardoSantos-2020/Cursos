var Gabriel={
nome:"Gabriel Silva",
idade:"12 anos",
sexo:'masculino',
email:'text@email.com',
comp:function(obj){
    return this.email===obj.email;
}
}
 Geovana={
nome:"Geovana Silva",
idade:"23 anos",
sexo:'feminino',
email:'text@email.com'

}
console.log('O email do Gabriel e igual da Geovana',Gabriel.comp(Geovana))