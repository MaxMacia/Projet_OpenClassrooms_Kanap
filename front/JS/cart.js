/**Affichage et intéractions avec la page cart */

//Création d'un objet qui contiendra les données non présentes dans le local storage
let productData = {};
//Initialisation des variables totalQuantity et totalPrice qui contiendront le nombre d'article total dans le panier et le prix total
let totalQuantity = 0;
let totalPrice = 0;
//Récupération des données du panier
let jsonListProducts = getCart();
//Boucle For pour créer un objet product pour chaque produit sauvé dans le panier
for (let jsonProduct of jsonListProducts) {
    let product = new Product(jsonProduct);
//Appel API pour ajouter dans l'objet productData les données sur le prix, l'url de l'image le texte alt de l'image et le nom, pour chaque objet product de la boucle For
    loadConfig().then(data => {
        config = data;
        fetch(config.host + "/api/products/" + product.id)
            .then(data => data.json())
            .then(jsonProduct => {
                productData.price = jsonProduct.price;
                productData.imageUrl = jsonProduct.imageUrl;
                productData.altTxt = jsonProduct.altTxt;
                productData.name = jsonProduct.name;
                console.log(productData);
//Pour chaque objet product et productData insertion des différentes proiétés dans le contenu html de l'élément #cart__items
                document.getElementById("cart__items").innerHTML += `
        <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
            <div class="cart__item__img">
                <img src="${productData.imageUrl}" alt="${productData.altTxt}" />
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                <h2>${productData.name}</h2>
                <p>${product.color}</p>
                <p>${productData.price} €</p>
                </div>
                <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté :</p>
                    <input
                    type="number"
                    class="itemQuantity"
                    name="itemQuantity"
                    min="1"
                    max="100"
                    value="${product.quantity}"
                    />
                </div>
                <div class="cart__item__content__settings__delete">
                    <p id="deleteItem">Supprimer</p>
                </div>
                </div>
            </div>
            </article>`;
//mise à jour des variables totalQuantity et totalPrice à chaque tour de la boucle For
                totalQuantity += product.quantity;
                totalPrice += productData.price * product.quantity;
                document.getElementById("deleteItem").addEventListener("click", () => {
                    removeFromCart(product);
                    window.location.reload();
                });
//insertion des variables totalQuantity et totalPrice dans le contenu html des éléments #totalQuantity et #totalPrice
                document.getElementById("totalQuantity").innerHTML = totalQuantity;
                document.getElementById("totalPrice").innerHTML = totalPrice;
            })

    })

}


