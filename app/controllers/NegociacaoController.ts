import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade  : HTMLInputElement;
    private inputValor  : HTMLInputElement;

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
        console.log(negociacao);
        this.limparFormulario();
    }

    limparFormulario(): void { 
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }
}