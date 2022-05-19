
    let Banco=[
        {'tarefa':"Leonardo",'Status':'checked'},
        {'tarefa':"Eduardo",'Status':''},
        {'tarefa':"Fernanda",'Status':'checked'}
]
const criandoItem=(Text,Status="",indice)=>{

    const item=document.createElement('label');
    item.classList.add('Itemcheck');
    item.innerHTML=` 
    <div class="form-switch">
        <input class="check form-check-input" type="checkbox" ${Status} data-indice=${indice}>
        <span class="form-check-label">${Text}</span>
    </div>
        <button class="bi bi-x-square-fill" data-indice=${indice}></button>      
    `
    document.getElementById('ItemList').appendChild(item)

}


const limparTela=()=>{
let Tolist=document.getElementById('ItemList');
    while(Tolist.firstChild){

        Tolist.removeChild(Tolist.lastChild)
    }
}
const atualizandoTela=()=>{
    limparTela()
    Banco.forEach((item,indice)=>criandoItem(item.tarefa,item.Status,indice))


}

const adicionarItemBanco=(evento)=>{
    
    InputTexto=document.querySelector('#input-text')

    teclado=evento.type

    if(teclado === "click"){
 
        Banco.push({'tarefa':InputTexto.value,'Status':''})

        InputTexto.value=" ";

        atualizandoTela()      
    }  
}

const ClickCadaItem=(evento)=>{

    const itemElemento=evento.target

    
    if(itemElemento.type === 'submit'){

        const indiceElement = itemElemento.dataset.indice


        removeItemBanco(indiceElement)
        
        atualizandoTela()

        }else if(itemElemento.type === 'checkbox'){

            const checkboxElement = itemElemento.dataset.indice

            marcaCheckbox(checkboxElement)

        }
}

const removeItemBanco=(indice)=>{
    Banco.splice(indice,1)
    atualizandoTela()
}

const marcaCheckbox=(indice)=>{

    Banco[indice].Status=Banco[indice].Status === ' ' ? 'checked' :' ';

    atualizandoTela()
}


document.querySelector('#btn-enviar').addEventListener('click',adicionarItemBanco)
document.querySelector('#ItemList').addEventListener('click',ClickCadaItem)
atualizandoTela()


