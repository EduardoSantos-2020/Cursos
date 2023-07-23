0
let Banco = [{ 'tarefa': 'Estudar as 8 horas da manhã', 'Status': 'checked' },];

const criandoItem = (Text, Status = ' ', indice) => {
    let item = document.createElement('div')
    item.classList.add('Itemcheck');
    item.innerHTML = `<label class="container-check">
                        <input class="check" type=checkbox ${Status} data-indice=${indice}>
                        <div class="checkmark"></div>
                    </label>
                    <div class="container-text">
                        <p class="text-list" data-indice=${indice}>${Text}</p>
                    </div>
                    <button type="button" class="fa-solid fa-xmark" data-indice=${indice} ></button>`;

    document.getElementById('ItemList').appendChild(item);

    itemBox = document.querySelectorAll('.check')[indice];

    label = document.getElementsByClassName('text-list')[indice]

    if (itemBox.checked) {
        label.style.textDecoration = 'line-through';
    } else {
        label.style.textDecoration = 'none';
    }

}


const limparTela = () => {
    let Tolist = document.getElementById('ItemList');

    while (Tolist.firstChild) {
        Tolist.removeChild(Tolist.lastChild);
    }
}

const atualizandoTela = () => {
    limparTela()
    Banco.forEach((item, indice) => criandoItem(item.tarefa, item.Status, indice));
}
const adicionarItemBanco = (evento) => {
    InputTexto = document.querySelector('#input-text');

    if (InputTexto.value > " " && evento.type === "click") {

        Banco.push({ 'tarefa': InputTexto.value, 'Status': ' ' });
        InputTexto.value = '';
        InputTexto.placeholder = 'Qual é sua tarefa !!';
    }
    atualizandoTela();
}


const ClickCadaItem = (evento) => {

    if (evento.target.type === 'button') {
        const indiceElement = evento.target.dataset.indice;
        removeItemBanco(indiceElement)
        atualizandoTela()

    } else if (evento.target.type === 'checkbox') {
        const checkboxElement = evento.target.dataset.indice;
        marcaCheckbox(checkboxElement);
        atualizandoTela()
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

atualizandoTela()
document.querySelector('#ItemList').addEventListener('click', ClickCadaItem)
document.querySelector('#btn-enviar').addEventListener('click', adicionarItemBanco)













