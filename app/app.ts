import { NegociacaoController } from './controllers/NegociacaoController.js';
import { NegociacoesView } from './views/NegociacoesView.js';


const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adicionar();
});