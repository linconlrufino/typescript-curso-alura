import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from './../models/negociacoes.js';

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade  : HTMLInputElement;
    private inputValor  : HTMLInputElement;
    private negociacoes : Negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        
        this.negociacoes.add(negociacao);
        this.limparFormulario();

        console.log(this.negociacoes.getAll());
    }

    limparFormulario(): void { 
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }
}