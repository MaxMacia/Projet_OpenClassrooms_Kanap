/**Affichage et intéractions avec la page cart */

//Création d'un objet qui contiendra les données non présentes dans le local storage
let productData = {};
//Initialisation des variables totalQuantity et totalPrice qui contiendront le nombre d'article total dans le panier et le prix total
let totalQuantity = 0;
let totalPrice = 0;
//Récupération des données du panier
let listCart = getCart();
//Boucle For pour créer un objet product pour chaque produit sauvé dans le panier
for (let product of listCart) {
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
                    data-id="${product.id}"
                    data-color="${product.color}"
                    />
                </div>
                <div class="cart__item__content__settings__delete">
                    <p 
                    id="deleteItem" 
                    data-id="${product.id}" 
                    data-color="${product.color}"
                    >
                    Supprimer</p>
                </div>
                </div>
            </div>
            </article>`;

            let itemQuantity = document.querySelectorAll(".itemQuantity");
            for (let i = 0; i < itemQuantity.length; i++) {
                itemQuantity[i].addEventListener("change", (event) => {
                    let newQuantity = Number(itemQuantity[i].value);
                    let productToChange = listCart.find(p => ((p.id == itemQuantity[i].dataset.id)&&(p.color == itemQuantity[i].dataset.color)));
                    productToChange.quantity = newQuantity;
                    console.log(typeof newQuantity);
                    if(productToChange.quantity <= 0){
                        removeFromCart(productToChange);
                        window.location.reload();
                    } else {
                        saveCart(listCart);
                    }
                    totalQuantity += productToChange.quantity;
                    totalPrice += productData.price * productToChange.quantity;
                    window.location.reload();
                });    
            }
            let deleteItem = document.querySelectorAll("#deleteItem");
            for (let i = 0; i < deleteItem.length; i++) {
                deleteItem[i].addEventListener("click", () => {
                    let productToBeRemoved = listCart.find(p => ((p.id == deleteItem[i].dataset.id)&&(p.color == deleteItem[i].dataset.color)));
                    removeFromCart(productToBeRemoved);
                    window.location.reload();
                })
            }
                            
//mise à jour des variables totalQuantity et totalPrice à chaque tour de la boucle For
                totalQuantity += product.quantity;
                totalPrice += productData.price * product.quantity;
//insertion des variables totalQuantity et totalPrice dans le contenu html des éléments #totalQuantity et #totalPrice
                document.getElementById("totalQuantity").innerHTML = totalQuantity;
                document.getElementById("totalPrice").innerHTML = totalPrice;
            })


    })
           
    
}

