import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [];

  setProdutos(lista: Produto[]) {
    this.produtos = lista;
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  adicionar(produto: Omit<Produto, 'id'>) {
    if (this.existeNome(produto.nome)) {
      throw new Error('Produto com este nome já existe.');
    }

    const novoId = this.produtos.length
      ? Math.max(...this.produtos.map(p => p.id)) + 1
      : 1;

    this.produtos.push({ id: novoId, ...produto });
    return novoId;
  }

  editar(id: number, nome: string, quantidade: number) {
    if (this.existeNome(nome, id)) {
      throw new Error('Já existe produto com esse nome');
    }

    const p = this.produtos.find(p => p.id === id)!;
    const nomeAntigo = p.nome;
    p.nome = nome;
    p.quantidade = quantidade;
    return nomeAntigo;
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }

  private existeNome(nome: string, ignorarId?: number) {
    return this.produtos.some(p =>
      p.nome.toLowerCase() === nome.toLowerCase() &&
      p.id !== ignorarId
    );
  }
}
