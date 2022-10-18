/* Affichage et intéractions avec la page d'accueil */

loadConfig().then(data => {
    config = data;
    fetch(config.host + "/api/products")
    .then(data => data.json())
    .then(jsonListProducts => {
        for(let jsonProduct of jsonListProducts){
            let product = new Product(jsonProduct);
            document.getElementById("items").innerHTML += `<a href="./product.html?id=${product._id}">
                                                                <article>
                                                                <img
                                                                    src="${product.imageUrl}"
                                                                    alt="${product.altTxt}, Kanap ${product.name}"
                                                                />
                                                                <h3 class="productName">Kanap ${product.name}</h3>
                                                                <p class="productDescription">
                                                                    ${product.description}
                                                                </p>
                                                                </article>
                                                            </a>`;
        }
    })
})