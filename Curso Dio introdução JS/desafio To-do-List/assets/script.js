
let Banco = [{ 'tarefa': 'Ir Estudar as 8 horas', 'Status': 'checked' },];

const criandoItem = (Text, Status = "", indice) => {
    const item = document.createElement('label');
    item.classList.add('Itemcheck');
    item.innerHTML = `<div class="form-switch">
                        <div class="container-check">
                            <input class="check" type="checkbox" ${Status} data-indice=${indice}>
                            <span class="checkmark"></span>
                            <span class="form-check-label">${Text}</span> 
                        </div>
                    </div>
                    <button type='button' class="bi bi-x-square-fill" data-indice=${indice}></button>`

    document.getElementById('ItemList').appendChild(item);
}


const limparTela = () => {
    let Tolist = document.getElementById('ItemList');

    while (Tolist.firstChild) {
        Tolist.removeChild(Tolist.lastChild);
    }
}

const atualizandoTela = () => {
    limparTela()
    Banco.forEach((item, indice) => criandoItem(item.tarefa, item.Status, indice))
}
const adicionarItemBanco = (evento) => {
    InputTexto = document.querySelector('#input-text');

    if (InputTexto.value > " " && evento.type === "click") {
        Banco.push({ 'tarefa': InputTexto.value, 'Status': ' ' });
        InputTexto.value = '';
        InputTexto.placeholder = 'Insira Mais Tarefas !!';
    }
    atualizandoTela();
}

const ClickCadaItem = (evento) => {

    if (evento.target.type === 'button') {
        const indiceElement = evento.target.dataset.indice;
        removeItemBanco(indiceElement)
        atualizandoTela()
    }else if(evento.target.type === 'checkbox') {
        const checkboxElement = evento.target.dataset.indice
        marcaCheckbox(checkboxElement)
    }

}

const removeItemBanco = (indice) => {
    Banco.splice(indice, 1)
    atualizandoTela()
}

const marcaCheckbox = (indice) => {
    Banco[indice].Status = Banco[indice].Status == ' ' ? 'checked' : ' ';
    atualizandoTela()
}

document.querySelector('#btn-enviar').addEventListener('click', adicionarItemBanco)
document.querySelector('#ItemList').addEventListener('click', ClickCadaItem)
atualizandoTela()


