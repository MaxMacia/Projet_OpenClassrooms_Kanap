/**Affichage et intéractions avec la page cart */
import { loadConfig } from "./config";
import { saveCart } from "./cartManager";
import { getCart } from "./cartManager";
import { removeFromCart } from "./cartManager";
import { validName } from "./formManager";
import { validAdress } from "./formManager";
import { validCity } from "./formManager";
import { validEmail } from "./formManager";
import { check } from "./formManager";


//Création d'un objet productDataById qui contiendra des objets product Data ayant pour clée l'id de l'objet
//et pour valeur les données non présentes dans le local storage
let productDataById = {};
//Récupération des données du panier
let listCart = getCart();
//Fonction permettant de calculer et mettre à jour la quantité totale et le prix total 
function updateQuantityAndPrice() {
//Récupération du panier
    const cart = getCart();
//Initiatisation de la quantité totale et du prix total
    let totalQuantity = 0;
    let totalPrice = 0;
//Boucle FOR pour calculer la quantité totale et le prix total 
    for (let product of cart) {
        totalQuantity += product.quantity;
//Condition IF permettant d'ignorer la ligne suivante si le prix est non défini
        if (productDataById[product.id]?.price === undefined) {
            continue;
        }
        totalPrice += productDataById[product.id].price * product.quantity;
    }
//Insertion des valeurs des variables totalQuantity et totalPrice dans le DOM
    document.getElementById("totalQuantity").innerHTML = totalQuantity;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}
//Boucle For pour créer un objet product pour chaque produit sauvé dans le panier
for (let product of listCart) {
//Appel API pour ajouter dans l'objet productData les données sur le prix, 
//l'url de l'image le texte alt de l'image et le nom, pour chaque objet product de la boucle For
    loadConfig().then(data => {
        const config = data;
        fetch(config.host + "/api/products/" + product.id)
            .then(data => data.json())
            .then(jsonProduct => {
                const productData = jsonProduct;
                productDataById[product.id] = productData;
//Pour chaque objet product et productData insertion des différentes propriétés dans
//le contenu html de l'élément #cart__items
                document.getElementById("cart__items").innerHTML += `
        <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
            <div class="cart__item__img">
                <img src="${productDataById[product.id].imageUrl}" alt="${productDataById[product.id].altTxt}" />
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                <h2>${productDataById[product.id].name}</h2>
                <p>${product.color}</p>
                <p>${productDataById[product.id].price} €</p>
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
//Modifier la quantité d'un produit
//selection de l'element .itemQuantity dans le DOM
            let itemQuantity = document.querySelectorAll(".itemQuantity");
//Boucle for pour ajouter un event listener sur chaque produit de la page
            for (let i = 0; i < itemQuantity.length; i++) {
                itemQuantity[i].addEventListener("change", (event) => {
//récupération de la valeur changée dans la variable newQuantity
                    let newQuantity = Number(itemQuantity[i].value);
//selection de l'objet ciblé dans le panier assigné à la variable productTochange
                    let productToChange = listCart.find(p => (
                        (p.id == itemQuantity[i].dataset.id)&&(p.color == itemQuantity[i].dataset.color)
                        ));
//et initialiasation de sa propriété quantity avec la variable newQuantity
                    productToChange.quantity = newQuantity;
//Supression du produit si la quantité est 0 ou négative
                    if(productToChange.quantity <= 0){
                        removeFromCart(productToChange);
                        window.location.reload();
//Enregistrement du produit modifié dans le panier
                    } else {
                        saveCart(listCart);
                    }
                    updateQuantityAndPrice();
                });    
            }
//Supression d'un produit
//Selection de l'element #deleteItem dans le DOM
            let deleteItem = document.querySelectorAll("#deleteItem");
//Boucle for pour ajouter un event listener sur chaque produit de la page            
            for (let i = 0; i < deleteItem.length; i++) {
                deleteItem[i].addEventListener("click", () => {
//Selection de l'objet ciblé dans le panier assigné à la variable productToBeRemoved, et supression de l'objet
                    let productToBeRemoved = listCart.find(p => (
                        (p.id == deleteItem[i].dataset.id)&&(p.color == deleteItem[i].dataset.color)
                        ));
                    removeFromCart(productToBeRemoved);
                    window.location.reload();
                })
            }
// update quantity and price html
            updateQuantityAndPrice();
        })
        .catch(err => {
            console.dir(err);
            document.getElementById("cart__items").innerHTML = "<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"
        }) 


    })
    .catch(err => {
        console.dir(err);
        document.getElementById("cart__items").innerHTML = "<h3>Nous n'avons pas réussi à afficher les produits, veuillez nous excuser pour le désagrément.</h3>"
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
//Création de l'objet contact pour la requête POST
        let contact = {
            firstName: `${document.getElementById("firstName").value}`,
            lastName: `${document.getElementById("lastName").value}`,
            address: `${document.getElementById("address").value}`,
            city: `${document.getElementById("city").value}`,
            email: `${document.getElementById("email").value}`
        };
//Création du tableau des id des produits du panier pour la requête POST
        const products = listCart.map(p => p.id);
//Création d'un objet request contenant l'objet contact et le tableau d'id des produits pour la requête POST
        const request = {
                contact: contact,
                products: products
            };
//Requête POST        
        loadConfig().then(data => {
            const config = data;
            fetch(config.host + "/api/products/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request)
            })
            .then(response => response.json())
//Redirection vers la page confirmation avec l'id de la commande dans l'url
            .then(result => {
                location.href = `/front/html/confirmation.html?id=${result.orderId}`
            })
//Si la promesse ne fonctionne pas, récupération de l'erreur et insertion d'un message d'erreur dans le DOM
            .catch(err => {
                console.dir(err);
                let errorElt = document.createElement("div");
                document.querySelector("#emailErrorMsg").appendChild(errorElt);
                errorElt.innerHTML = `<h3>Une erreur est survenue lors de la commande, 
                                        veuillez nous excuser pour le désagrément.</h3>`
            })
        })
//Si la promesse ne fonctionne pas, récupération de l'erreur et insertion d'un message d'erreur dans le DOM
        .catch(err => {
            console.dir(err);
            let errorElt = document.createElement("div");
            document.querySelector("#emailErrorMsg").appendChild(errorElt);
            errorElt.innerHTML = "<h3>Une erreur est survenue lors de la commande, veuillez nous excuser pour le désagrément.</h3>"
        }) 
    }
}))












