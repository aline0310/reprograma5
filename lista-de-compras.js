const database = require("./database");

const readline = require("readline-sync");

const {produtos} = database
 
produtos.sort((a,b) => a.preco -b.preco);

const carrinho = [];
 let valorCupom = 0

const categorias = readline.question("Oiii, voce deseja encontrar seu produto por categoria?(S/N)")

if( categorias.toUpperCase() === "S"){
    console.log('--------------------------------------')
        console.log('Essas sao as nossas categorias:')
        console.log('Alimento, Bebida, Casa, Higiene, Informatica')
        console.log('--------------------------------------')

    const categoriaTipo = readline.question("Qual dessas categorias voce se interessa?");
    const categoriasFiltro = produtos.filter(produto => produto.categoria === categoriaTipo)
    console.table(categoriasFiltro);
}else {
    categorias.toUpperCase() === "N"
    console.log("Esses sao todos os nossos produtos disponiveis:")
    console.table(produtos);
}

const compras = () => {

const buscarId = parseInt(readline.question("Digite o id do produto: "));
for (i = 0; i <= 1000; i++){
    idEncontrado = produtos.find(produto => produto.id === buscarId)
    if(idEncontrado){
        break
    }else{
        console.log("Id solicitado nao encontrado, tente novamente:");
        buscarId = parseInt(readline.question("Digite o id do produto: "));
    }
}
quantidadeProdutos = parseInt(readline.question("Quantas unidades do produto selecionado voce deseja?"))

for(i = 0; i <= 1000; i++){
    if(quantidadeProdutos > 0){
        break
    }else{
        console.log("Por favor, insira uma quantidade valida!");
        quantidadeProdutos = parseInt(readline.question("Quantas unidades do produto selecionado voce deseja?"))
    }
}
const produtosCarrinho = {
    ...idEncontrado, quantidade: quantidadeProdutos 
}

carrinho.push(produtosCarrinho)

const desejaContinuar = readline.question("Voce deseja continuar comprando?(S/N)");
const desejaContinuarFormatado = desejaContinuar.toUpperCase();

if(desejaContinuarFormatado === "S"){
    {(categorias.toUpperCase() === "S")
    console.log("Esses sao os produtos disponiveis:");
    console.table(produtos)
}
    compras()
     
}else{
     temCupom = readline.question("Voce tem algum cupom de desconto? (S/N)").toUpperCase()
    {
        if (temCupom === "S"){
        valorCupom = parseInt(readline.question("Qual o valor do cupom?"))
    }
    }

}

for (i = 0; i<=1000; i++){
    if(valorCupom > 15 || valorCupom < 0 ){
    console.log("Valor invalido, digite novamente:");
    valorCupom = parseInt(readline.question("Qual e o valor do cupom?"))
}else{
    break
}}}

compras()

class Pedido{
    constructor(carrinho){
        this.produtoNovo = carrinho,
        this.subtotal = 0
    }
    calculoSubtotal(){
        this.subtotal  = this.produtoNovo.reduce((accumulator, produto) => accumulator + (produto.preco * produto.quantidade), 0 )
    }
}

const pedido = new Pedido(carrinho)
console.table(pedido.produtoNovo)

pedido.calculoSubtotal()
console.log(`O valor do pedido foi R$ ${pedido.subtotal.toFixed(2)}`);

const desconto = pedido.subtotal*(valorCupom/100)

console.log(`O valor do desconto foi R$ ${desconto.toFixed(2)}`);

const valorFinal = pedido.subtotal - desconto
console.log(`O valor final do seu pedido é R$ ${valorFinal.toFixed(2)}`);






