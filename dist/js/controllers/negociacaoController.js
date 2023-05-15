import { daysOfWeek } from "../enums/daysOfWeek.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { Negociacoes } from './../models/negociacoes.js';
import { MensagemView } from './../views/MensagemView.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.MensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    addNegociacao() {
        if (this.isWeekend(this.inputData.valueAsDate)) {
            return this.MensagemView.update('Apenas Negociação em dias úteis são aceitas');
        }
        const negociacao = new Negociacao(this.inputData.valueAsDate, this.inputQuantidade.valueAsNumber, this.inputValor.valueAsNumber);
        this.negociacoes.add(negociacao);
        this.updateView();
        this.cleanForm();
    }
    importaDados() {
        fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        })
            .then(negociacoesHoje => {
            for (let negociacao of negociacoesHoje) {
                this.negociacoes.add(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    isWeekend(data) {
        const day = data.getDay();
        if (day > daysOfWeek.sunday && day < daysOfWeek.saturday)
            return false;
        else
            return true;
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
    }
}
