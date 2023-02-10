let listaProdutos = document.getElementById("container-produtos")

let produtos = {
    imagem: "https://th.bing.com/th/id/OIP.KA1INekA938pu2_BntKLCQHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7",
    titulo: "Espelho Dental",
    preco: "R$100,00",
    comprar: "Comprar"
}




let produtosLi = [produtos]

produtosLi.forEach(item => {
    let produtosLiLista = document.createElement("li")
    produtosLiLista.innerHTML = `
    <img src=${item.imagem} alt="coca-cola" class="coca-cola">
    <p class="container-produtos-titulo">${item.titulo}</p>
    <div class="container-produtos-li-descricao">
        <p>${item.preco}</p>
        <p class="comprar">${item.comprar}</p>
    </div>`

    listaProdutos.appendChild(produtosLiLista)
    produtosLiLista.classList = "container-produtos-li"
})
