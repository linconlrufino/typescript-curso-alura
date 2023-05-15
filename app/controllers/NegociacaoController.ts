import { daysOfWeek } from "../enums/daysOfWeek.js";
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

    addNegociacao(): void {
        if(this.isWeekend(this.inputData.valueAsDate)){
            return this.MensagemView.update('Apenas Negociação em dias úteis são aceitas');
        }

        const negociacao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
    
        this.negociacoes.add(negociacao);
        this.updateView();
        this.cleanForm();
    }

    importaDados(): void {
        fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: any[]) => {
            return dados.map( dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante)
            })
        })
        .then(negociacoesHoje => {
            for(let negociacao of negociacoesHoje) {
                this.negociacoes.add(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });

    }

    private isWeekend(data : Date): boolean {
        const day = data.getDay();

        if(day > daysOfWeek.sunday && day < daysOfWeek.saturday) 
            return false;
        else
            return true;
    }

    private cleanForm(): void { 
        this.inputData.value ='';
        this.inputQuantidade.value ='';
        this.inputValor.value ='';
        this.inputData.focus();
    }

    private updateView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
    }
}