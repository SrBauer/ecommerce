class Carrinho {
    constructor() {
        this.itens = [];
        // this.bodyCarrinho = document.getElementById('itens-carrinho')
    }

    adicionarItem(produto, quantidade) {
        let i;
        for (i = 0; i < quantidade; i++) {
            this.itens.push(produto);
        }
    }


    criaItemNoCarrinho(produto) {}

}