/**Affichage et intéractions avec la page d'accueil */
import { loadConfig } from "./config";

//récupération du domaine via la fonction loadConfig()
loadConfig().then(data => {
    const config = data;
//récupération des ressources products via un appel API ave la fonction fetch
    fetch(config.host + "/api/products")
        .then(data => data.json())
//récupération de la réponse sous la forme d'une liste qui sera parcourue pour inserer ses éléments dynamiquement dans le DOM
        .then(jsonListProducts => {
            for (let jsonProduct of jsonListProducts) {
//A chaque tour de boucle, création d'un objet product qui correspond à chaque produit affiché sur la page
                let product = jsonProduct;
                document.getElementById(
                    "items"
                    ).innerHTML += `<a href="./product.html?id=${product._id}">
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
//Si la promesse ne fonctionne pas, récupération de l'erreur et insertion d'un message d'erreur dans le DOM
        .catch(err => {
            console.dir(err);
            document.getElementById("items").innerHTML = "<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"
        })
})
//Si la promesse ne fonctionne pas, récupération de l'erreur et insertion d'un message d'erreur dans le DOM
    .catch(err => {
        console.dir(err);
        document.getElementById("items").innerHTML = "<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"
    })