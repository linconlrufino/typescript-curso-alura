import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './models/negociacao.js';


const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adicionar();
});