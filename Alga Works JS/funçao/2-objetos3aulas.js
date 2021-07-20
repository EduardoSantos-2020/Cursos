var carlos={
    Idade:'24',
    Nome:'Carlos Santos',
    Altura:'1,70',
    endereço:{
        Rua:'silva teles',
        Numero:'345',
        Complemento:'barbearia',
        Cidade:'são paulo',
}
    }
    console.log('carlos mora na rua',carlos.endereço.Rua);
    delete Idade;
    console.log(carlos);

    for(lista in carlos){
 console.log("-->",carlos[lista]);
    };


    