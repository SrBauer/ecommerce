function criarProduto(produto) {

    let divPrincipal = document.createElement('div');
    divPrincipal.title = produto.nome;

    let divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.classList.add('p-3');
    divPrincipal.append(divItem);

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.width = 160;
    divItem.append(img);

    let divDescricao = document.createElement('div');
    divDescricao.classList.add('row');
    divDescricao.append(montarDescricao(produto.valor, produto.nome));
    divDescricao.append(montarBotaoDetalhes(produto));
    divItem.append(divDescricao);

    document.getElementById('containerProdutos').appendChild(divPrincipal);
}


function montarDescricao(valor, nome) {
    let divPrincipal = document.createElement('div');
    divPrincipal.classList.add('col-12');

    let divNome = document.createElement('div');
    divNome.classList.add('text-start');
    divNome.classList.add('item-nome');
    divNome.innerText = nome;
    divNome.title = nome;

    let divValor = document.createElement('div');
    divValor.classList.add('d-flex');
    divValor.classList.add('justify-content-start');
    divValor.classList.add('mb-3');
    divValor.innerText = getDescricaoValor(valor);

    divPrincipal.append(divNome);
    divPrincipal.append(divValor);

    return divPrincipal;
}

function montarBotaoDetalhes(produto) {
    let botao = document.createElement('button');

    botao.style.margin = 'auto';
    botao.classList.add('btn');
    botao.classList.add('btn-outline-primary');
    botao.classList.add('mx-2');
    botao.classList.add('col-11');

    botao.title = 'Mais Detalhes';
    botao.innerText = 'Mais Detalhes';

    botao.onclick = altertarModel.bind(this, produto);

    return botao;
}

function createAttribute(name, value) {
    const attr = document.createAttribute(name);
    attr.value = value;

    return attr;
}

function getDescricaoValor(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}