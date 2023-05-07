import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes : Negociacao[] = []

    add (negociacao: Negociacao ) {
        this.negociacoes.push(negociacao);
    }

    getAll (): readonly Negociacao[] {
        return this.negociacoes;
    }
}