import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from './models/produto.model';
import { ProdutoService } from './services/produto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  produtos: Produto[] = [];
  filtroId = '';
  filtroNome = '';
  filtroQuantidade = '';

  nome = '';
  quantidade: number | null = null;
  editando: Produto | null = null;

  constructor(
    private http: HttpClient,
    private service: ProdutoService
  ) { }

  ngOnInit() {
    this.http.get('assets/lista.txt', { responseType: 'text' })
      .subscribe(texto => {
        const linhas = texto
          .split('\n')
          .slice(1)
          .map(l => l.trim())
          .filter(l => l !== '');
        const lista = linhas
          .map(l => {
            const [id, nome, qtd] = l.split(';');
            return {
              id: Number(id),
              nome: nome?.trim(),
              quantidade: Number(qtd)
            };
          })
          .filter(p =>
            !isNaN(p.id) &&
            !!p.nome &&
            !isNaN(p.quantidade)
          );
        this.service.setProdutos(lista);
        this.atualizar();
      });
  }

  atualizar() {
    this.produtos = [...this.service.getProdutos()];
  }

  salvar() {
    if (!this.nome || this.quantidade === null) return;

    try {
      if (this.editando) {
        const antigo = this.service.editar(
          this.editando.id,
          this.nome,
          this.quantidade
        );
        alert(`${antigo} editado para ${this.nome}`);
      } else {
        this.service.adicionar({
          nome: this.nome,
          quantidade: this.quantidade
        });
        alert(`${this.nome} adicionado`);
      }
      this.cancelar();
      this.atualizar();
    } catch (e: any) {
      alert(e.message);
    }
  }

  editar(produto: Produto) {
    this.editando = produto;
    this.nome = produto.nome;
    this.quantidade = produto.quantidade;
  }

  cancelar() {
    this.editando = null;
    this.nome = '';
    this.quantidade = null;
  }

  remover(id: number, nome: string) {
    if (confirm(`Deseja remover ${nome}?`)) {
      this.service.remover(id);
      alert(`${nome} removido`);
      this.atualizar();
    }
  }

  get filtrados() {
    return this.produtos.filter(p =>
      (!this.filtroId || p.id.toString().includes(this.filtroId)) &&
      (!this.filtroNome || p.nome.toLowerCase().includes(this.filtroNome.toLowerCase())) &&
      (!this.filtroQuantidade || p.quantidade.toString().includes(this.filtroQuantidade))
    );
  }

  get totalProdutos() {
    return this.filtrados.length;
  }

  get somaQuantidade() {
    return this.filtrados.reduce((s, p) => s + p.quantidade, 0);
  }
}
