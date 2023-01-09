function calculadora(){
    const operacoes= Number(prompt('Escolha as opções de operação:\n 1 - soma (+)\n 2- Subtração (-)\n 3-Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira (%)\n 6 - Pontenciação (**)'
    ))

    if(!operacoes || operacoes>=7){
        alert(" Erro --operação Invalida--")
        calculadora()
    }
    else{
    
    let n1=Number(prompt('Insira o Primeiro Valor'));
    let n2=Number(prompt('Insira o Segundo Valor'));
    let resultado
        if(!n1 ||!n2){
            alert("Erro opção invalida")
            calculadora()
        }else{
            function soma() {
                resultado=n1+n2;
                alert(`${n1} + ${n2} = ${resultado}`)  
                novaOperação()
            }
            function subrtracao() {
                resultado=n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`)  
                novaOperação()
            }
            function multiplicar() {
                resultado=n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`) 
                novaOperação()
            }
            function divisaoReal() {
                resultado=n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`)  
                novaOperação()
            }

            function divisaoInteira() {
                resultado=n1 % n2;
                alert(` O resto da divisão ${n1} e ${n2} Igual a ${resultado}`)  
                novaOperação()
            }
            function pontenciacao() {
                resultado=n1**n2;
                alert(`${n1} É elevado a ${n2} o resutaldo é ${resultado}`)  
                novaOperação()
            }  
            function novaOperação() {
                let opcoes=prompt(`Deseja fazer outra operação ? \n 1 - Sim \n 2 - Não`)
                if(opcoes==1) {
                    calculadora()
                    }else if( opcoes==2){
                    alert('Até a proxima');
                    }else{
                    alert('Opção Ivalida');
                    }
             }
    }
    
        // if(operacoes==1){
        // soma() 
        //     }else if(operacoes==2){
        //     subrtracao()
        //     }else if(operacoes==3){
        //      multiplicar()
        //      }else if(operacoes==4){
        //         divisaoReal()
        //         }else if(operacoes==5){
        //             divisaoInteira()
        //             }else if(operacoes==6){
        //                 pontenciacao()
        //             }
        switch(operacoes){
            case 1:
            soma()
            break
            case 2:
            subrtracao()
            break
            case 3:
            multiplicar()
            break
            case 4:
            divisaoReal()
            break
            case 5:
            divisaoInteira()
            break
            case 6:
            pontenciacao()
            break
        }
    }
}

calculadora()