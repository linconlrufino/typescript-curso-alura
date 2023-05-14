import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.addNegociacao();
    });
}
else {
    throw Error('Erro ao inicializar aplicação.');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error('Botão importa não localizado');
}
