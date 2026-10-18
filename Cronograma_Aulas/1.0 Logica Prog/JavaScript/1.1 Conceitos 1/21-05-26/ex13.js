// 13. Verifique se um produto está fora do estoque.

let estoque = +(prompt(`Quanto tem no Estoque:`));

let foraDeEstoque = (estoque <= 0);

if (foraDeEstoque) {
    console.log("Produto fora de estoque.");
} else {
    console.log("Produto em estoque.");
}

