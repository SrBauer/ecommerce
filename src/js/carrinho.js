class Carrinho {
    constructor() {
        this.itens = [];
        this.valor = 0;
        this.bodyCarrinho = document.getElementById('itens-carrinho');
        this.divTotal = document.getElementById('carrinho-total');
        this.divQuantidade = document.getElementById('carrinho-quantidade');

    }

    adicionarItem(produto, quantidade) {
        let i;
        for (i = 0; i < quantidade; i++) {
            this.itens.push(produto);
            this.criaItemNoCarrinho(produto, this.itens.length);
            this.valor += produto.valor;
        }

        this.atualizarValor();
    }

    limparCarrinho() {
        this.itens = [];
        this.valor = 0;
        while (this.bodyCarrinho.firstChild) {
            this.bodyCarrinho.removeChild(this.bodyCarrinho.firstChild);
        }

        this.atualizarValor();
    }

    criaItemNoCarrinho(produto, index) {
        const img = document.createElement('img');
        img.alt = produto.nome;
        img.src = produto.imagem;
        img.classList.add('col-4');
        img.classList.add('img-fluid');


        const divDescricao = document.createElement('div');
        divDescricao.classList.add('col-5');
        divDescricao.classList.add('py-3');
        divDescricao.classList.add('d-flex');
        divDescricao.classList.add('flex-column');

        const divNome = document.createElement('div');
        divNome.classList.add('descricao-item-carrinho');
        divNome.title = produto.nome;
        divNome.innerText = produto.nome;

        const valor = getDescricaoValor(produto.valor);
        const divValor = document.createElement('div');
        divValor.title = valor;
        divValor.innerText = valor;

        divDescricao.append(divNome);
        divDescricao.append(divValor);


        const divBotao = document.createElement('div');
        divBotao.classList.add('col-3');
        divBotao.classList.add('p-0');
        divBotao.classList.add('d-flex');
        divBotao.classList.add('align-items-center');

        const botaoExcluir = document.createElement('button');
        botaoExcluir.classList.add('btn');
        botaoExcluir.classList.add('btn-outline-danger');
        botaoExcluir.classList.add('m-2');
        botaoExcluir.innerText = 'Excluir';

        divBotao.append(botaoExcluir);


        const linha = document.createElement('div');
        linha.classList.add('row');
        linha.classList.add('border-bottom');

        linha.append(img);
        linha.append(divDescricao);
        linha.append(divBotao);

        this.bodyCarrinho.append(linha);

        botaoExcluir.onclick = this.excluirProduto.bind(this, linha);
    }

    excluirProduto(divLinha) {
        const indexItem = Array.prototype.indexOf.call(this.bodyCarrinho.children, divLinha);

        let produto;
        if (indexItem > -1) {
            produto = this.itens[indexItem];
            this.itens.splice(indexItem, 1);
        }

        this.bodyCarrinho.removeChild(divLinha);

        this.valor -= produto.valor;
        this.atualizarValor();
    }

    atualizarValor() {
        this.divQuantidade.innerText = this.itens.length;
        this.divTotal.innerText = getDescricaoValor(this.valor);
    }

    /**
     * <div class="row border-bottom">
     *       <img class="col-4" src="https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw4c62adf3/images/funko/67510-2.png?sw=800&sh=800" alt="mdo" class="img-fluid">
     *          <div class="col-5 py-3 d-flex flex-column">
     *              <div style="font-weight: bold; text-overflow: ellipsis; word-break: break-all; white-space: nowrap; overflow: hidden;" title="POP! GROOT">POP! GROOT</div>
     *              <div>R$ 12,00</div>
     *          </div>
     *          <div class="col-3 p-0 d-flex align-items-center">
     *              <button type="button" class="btn btn-outline-danger m-2">Excluir</button>
     *          </div>
     * </div>
     */
}