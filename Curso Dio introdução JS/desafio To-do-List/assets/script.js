0
let Banco = [{ 'tarefa': 'Estudar as 8 horas da manhã', 'Status': true, }];

const criandoItem = (Text, indice) => {
    let item = document.createElement('div');
    item.classList.add('Itemcheck');

    let contCheck = document.createElement('label');
    contCheck.classList.add('container-check');

    let inputCheck = document.createElement('input');
    inputCheck.classList.add('check');
    inputCheck.setAttribute('type', 'checkbox');
    inputCheck.setAttribute('data-indice', indice);

    let customCheck = document.createElement('div');
    customCheck.classList.add('checkmark');

    contCheck.append(inputCheck, customCheck);

    let containerText = document.createElement('div');
    containerText.classList.add('container-text');

    let text = document.createElement('p');
    text.classList.add('text-list');
    text.setAttribute('data-indice', indice);
    text.textContent = Text;

    containerText.append(text);

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('fa-solid');
    button.classList.add('fa-xmark');
    button.setAttribute('data-indice', indice);

    item.append(contCheck, containerText, button);
    
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
    Banco.forEach((item, indice) => criandoItem(item.tarefa, indice))
    Banco.forEach((itemBox, i) => marcaCheckbox(itemBox, i))
}
const adicionarItemBanco = (evento) => {
    InputTexto = document.querySelector('#input-text');

    if (InputTexto.value > " " && evento.type === "click") {

        Banco.push({ 'tarefa': InputTexto.value, "Status": false });
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
    }
    else if (evento.target.type === 'checkbox') {
        const checkboxElement = evento.target.dataset.indice;
        verificarCheckbox(checkboxElement)
    }
}

const removeItemBanco = (indice) => {
    Banco.splice(indice, 1)
    atualizandoTela()
}


const verificarCheckbox = (indice) => {
    Banco[indice].Status = Banco[indice].Status == false ? true : false;
    atualizandoTela()
}

const marcaCheckbox = (itemBox, i) => {
    let label = document.getElementsByClassName('text-list')[i];
    let checkbox = document.querySelectorAll('.check')[i];

    if (itemBox.Status == true) {
        checkbox.checked = true;
        label.style.textDecoration = 'line-through';
    } else {
        checkbox.checked = false;
        label.style.textDecoration = 'none';
    }
}

atualizandoTela();

document.querySelector('#btn-enviar').addEventListener('click', adicionarItemBanco);
document.querySelector('#ItemList').addEventListener('click', ClickCadaItem);













