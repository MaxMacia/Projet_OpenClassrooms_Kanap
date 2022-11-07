/**Affichage et intéractions avec la page product */
import { loadConfig } from "./config";
import { addToCart } from "./cartManager";


//cibler un produit en fonction de l'id dans l'url
const stringUrlId = document.location.search;
const urlSearchParams = new URLSearchParams(stringUrlId);
const urlProductId = urlSearchParams.get("id");
//récupération du domaine
loadConfig().then(data => {
    const config = data;
//récupération de la ressource product
    fetch(config.host + "/api/products/" + urlProductId)
    .then(data => data.json())
//création d'un objet product
    .then(jsonProduct => {
        let product = jsonProduct;
//insertion des propriétés imageUrl et altTxt de l'objet product dans l'élément .item__img
        document.querySelector(".item__img").innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
//insertion de la propriété name de l'objet product dans l'élément #title
        document.getElementById("title").innerHTML = `${product.name}`;
//insertion de la propriété price de l'objet product dans l'élément #price
        document.getElementById("price").innerHTML = `${product.price}`;
//insertion de la propriété description de l'objet product dans l'élément #description
        document.getElementById("description").innerHTML = `${product.description}`;
//insertion des élément de la propriété colors de l'objet product dans l'élément #colors
        for(let i = 0; i < product.colors.length; i++){
            document.getElementById("colors").innerHTML += `<option value="${product.colors[i]}">${product.colors[i]}</option>`;
        };
//Ajout d'un event listener sur l'élément .quantity pour récupérer
//les changement de quantité sous la forme d'un attribut "data-quantity"
        document.getElementById("quantity").addEventListener("change", (event) => {
            document.getElementById("quantity").setAttribute("data-quantity", `${event.currentTarget.value}`);
        });
//Ajout d'un event listener sur l'élément .colors pour récupérer
//les changement de quantité sous la forme d'un attribut "data-color" 
        document.getElementById("colors").addEventListener("change", (event) => {
            document.getElementById("colors").setAttribute("data-color", `${event.currentTarget.value}`);
        });
//Création d'une variable elt qui correspond à un nouvel élément div
        let elt = document.createElement("div");
//Rattachement de ce nouvel élément à l'élément ayant pour classe .item__content
        document.querySelector(".item__content").appendChild(elt);
//Ajout d'un event listener qui se déclanche au click sur le bouton addToCart
        document.getElementById("addToCart").addEventListener("click", () => {
//Condition if afin d'afficher un message d'erreur si la quantité ou la couleur ne sont pas renseignés
            if ((document.getElementById("quantity").dataset.quantity == null)
                ||(document.getElementById("colors").dataset.color == "")) {
                elt.innerHTML = "<h3>Veuillez s'il vous plaît renseigner une couleur et une quantité</h3>";
            } else {
//Si les conditions sont remplis, création d'un objet productToAdd avec l'id, la quantité et la couleur du produit
                let productToAdd = {
                    id: product._id,
                    quantity: Number(document.getElementById("quantity").dataset.quantity),
                    color: document.getElementById("colors").dataset.color
                };
//Ajout du produit via la fonction addToCart()                
                addToCart(productToAdd);
                elt.innerHTML = "<h3>Votre produit a été ajouté au panier</h3>";            }    
        });  
    })
    .catch(err => {
        console.dir(err);
        document.querySelector(".item__content").innerHTML = "<h3>Nous n'avons pas réussi à afficher le produit demandé, veuillez nous excuser pour le désagrément.</h3>"
    })
})
.catch(err => {
    console.dir(err);
    document.querySelector(".item__content").innerHTML = "<h3>Nous n'avons pas réussi à afficher le produit demandé, veuillez nous excuser pour le désagrément.</h3>"
})
