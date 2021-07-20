var nomes=['Bruna ','Alexandre','Fernanda','Felipe',]

for(var i=0 ; i < nomes.length ; i++){
    console.log('Nomes[',i,']=',nomes[i])
}

nomes.forEach((function(funname){
    console.log(funname);
}))