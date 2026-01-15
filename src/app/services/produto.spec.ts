import { ProdutoService } from './produto';

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    service = new ProdutoService();
  });

  it('deve adicionar produto com ID incremental', () => {
    service.setProdutos([]);
    const id1 = service.adicionar({ nome: 'Banana', quantidade: 2 });
    const id2 = service.adicionar({ nome: 'Maçã', quantidade: 3 });

    expect(id1).toBe(1);
    expect(id2).toBe(2);
  });

  it('não deve permitir nomes duplicados (case insensitive)', () => {
    service.setProdutos([{ id: 1, nome: 'Banana', quantidade: 1 }]);
    expect(() =>
      service.adicionar({ nome: 'banana', quantidade: 2 })
    ).toThrow();
  });

  it('deve remover produto', () => {
    service.setProdutos([{ id: 1, nome: 'Banana', quantidade: 1 }]);
    service.remover(1);
    expect(service.getProdutos().length).toBe(0);
  });
});
