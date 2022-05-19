//aula-1

// var x = 0;
const PRECO=50;

var total=PRECO+65;

////////////////////////////////

//aula-2

function multiplicar(e,d){
  
return e * d 

}

multiplicar(7,7)

/////////////////////////////////////

//aula-3

function EventArrayNumber(array) {
        let list=[];

        for(let i=0; i < array.length; i++) {

            if (array[i] % 2 === 0) {
                list.push(array[i])
                console.log(`Esse numero ${array[i]} é Par`);
            }else{
                console.log(`Essse numero ${array[i]} não é Par`);
            }   
        }            
    } 
let array=[1,2,5,6,7,8]
EventArrayNumber(array)

/////////////////////////////////////