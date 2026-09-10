let precos = [100, 50, 230, 80, 15, 300];
    let precosComDesconto = precos.map(preco => preco * 0.8);
    let achadinhos = precosComDesconto.filter(precosComDesconto => precosComDesconto < 100)
console.log(precosComDesconto);
console.log(achadinhos);


