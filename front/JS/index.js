/* Affichage et intéractions avec la page d'accueil */

//récupération du domaine
loadConfig().then(data => {
    config = data;
//récupération des ressources products
    fetch(config.host + "/api/products")
    .then(data => data.json())
    .then(jsonListProducts => {
//création d'objets product pour chaque produit et insertion des propriétés de ces objets dans le contenu html de l'élément #items
        for(let jsonProduct of jsonListProducts){
            let product = new Product(jsonProduct);
            document.getElementById("items").innerHTML += `<a href="./product.html?id=${product._id}">
                                                                <article>
                                                                <img
                                                                    src="${product.imageUrl}"
                                                                    alt="${product.altTxt}, ${product.name}"
                                                                />
                                                                <h3 class="productName"> ${product.name}</h3>
                                                                <p class="productDescription">
                                                                    ${product.description}
                                                                </p>
                                                                </article>
                                                            </a>`;
        }
    })
})