import { NegociacaoDoDia } from "../interfaces/NegociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    obterNegociacoes(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacaoDoDia[]) => {
            return dados.map( dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante)
            })
        });
    }
}