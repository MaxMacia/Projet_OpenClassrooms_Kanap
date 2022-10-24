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
//selection de l'element .itemQuantity
            let itemQuantity = document.querySelectorAll(".itemQuantity");
//Boucle for pour ajouter un event listener sur chaque produit de la page
            for (let i = 0; i < itemQuantity.length; i++) {
                itemQuantity[i].addEventListener("change", (event) => {
//récupération de la valeur changée dans la variable newQuantity, selection de l'objet ciblé dans le panier assigné à la variable productTochange, et initialiasation de sa propriété quantity avec la variable newQuantity
                    let newQuantity = Number(itemQuantity[i].value);
                    let productToChange = listCart.find(p => ((p.id == itemQuantity[i].dataset.id)&&(p.color == itemQuantity[i].dataset.color)));
                    productToChange.quantity = newQuantity;
//Supression du produit si la quantité est 0 ou négative
                    if(productToChange.quantity <= 0){
                        removeFromCart(productToChange);
                        window.location.reload();
//Enregistrement du produit modifié dans le panier
                    } else {
                        saveCart(listCart);
                    }
//mise à jour des variables totalQuantity et totalPrice en cas de modification
                    totalQuantity += productToChange.quantity;
                    totalPrice += productData.price * productToChange.quantity;
                    window.location.reload();
                });    
            }
//Selection de l'element #deleteItem
            let deleteItem = document.querySelectorAll("#deleteItem");
//Boucle for pour ajouter un event listener sur chaque produit de la page            
            for (let i = 0; i < deleteItem.length; i++) {
                deleteItem[i].addEventListener("click", () => {
//Selection de l'objet ciblé dans le panier assigné à la variable productToBeRemoved, et supression de l'objet
                    let productToBeRemoved = listCart.find(p => ((p.id == deleteItem[i].dataset.id)&&(p.color == deleteItem[i].dataset.color)));
                    removeFromCart(productToBeRemoved);
                    window.location.reload();
                })
            }
                            
//mise à jour des variables totalQuantity et totalPrice à chaque tour de la boucle For lors du chargement de la page
                totalQuantity += product.quantity;
                totalPrice += productData.price * product.quantity;
//insertion des variables totalQuantity et totalPrice dans le contenu html des éléments #totalQuantity et #totalPrice
                document.getElementById("totalQuantity").innerHTML = totalQuantity;
                document.getElementById("totalPrice").innerHTML = totalPrice;
            })


    })
           
    
}
//Ajout d'un event listener à l'élément #firstName et appel la fonction validName
document.getElementById("firstName").addEventListener("change", () => {
    validName(document.getElementById("firstName"));
})
//Ajout d'un event listener à l'élément #lastName et appel la fonction validName
document.getElementById("lastName").addEventListener("change", () => {
    validName(document.getElementById("lastName"));
})
//Ajout d'un event listener à l'élément #adress et appel la fonction validAdress
document.getElementById("address").addEventListener("change", () => {
    validAdress(document.getElementById("address"));
})
//Ajout d'un event listener à l'élément #city et appel la fonction validCity
document.getElementById("city").addEventListener("change", () => {
    validCity(document.getElementById("city"));
})
//Ajout d'un event listener à l'élément #email et appel la fonction validemail
document.getElementById("email").addEventListener("change", () => {
    validEmail(document.getElementById("email"))
})
//Ajout d'un event listener à l'élément input[type='submit']
document.querySelector(".cart__order__form input[type='submit']").addEventListener("click", (event => {
    event.preventDefault();
//Selectionne tout les champs du formulaire sauf le bouton commander
    let fields = document.querySelectorAll(".cart__order__form input:not(:last-child)");
    let valid = true;
//Boucle For qui verifie la validité de chacun des champs
    for (let field of fields){
        valid &= check(field);
        if (!valid){
            break;
        }
    }
    if (valid){
        console.log("le formulaire est OK")
    }
}))












