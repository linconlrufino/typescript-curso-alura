import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { Negociacoes } from './../models/negociacoes.js';
import { MensagemView } from './../views/MensagemView.js';

export class NegociacaoController {
    private inputData : HTMLInputElement;
    private inputQuantidade  : HTMLInputElement;
    private inputValor  : HTMLInputElement;
    private negociacoes : Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private MensagemView = new MensagemView('#mensagemView');

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    adicionar(): void {
        const negociacao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        
        this.negociacoes.add(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }

    limparFormulario(): void { 
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }
}