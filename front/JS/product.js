/**Affichage et intéractions avec la page product */

//récupération de la chaîne de requête dans l'url
const queryStringUrlId = document.location.search;
const urlSearchParams = new URLSearchParams(queryStringUrlId);
const urlProductId = urlSearchParams.get("id");
//récupération du domaine
loadConfig().then(data => {
    config = data;
//récupération de la ressource product
    fetch(config.host +"/api/products/"+urlProductId)
    .then(data => data.json())
//création d'un objet product
    .then(jsonProduct => {
        let product = new Product(jsonProduct);
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
//Ajout d'un event listener sur l'élément .quantity pour récupérer les changement de quantité sous la forme d'un attribut "data-quantity"
        document.getElementById("quantity").addEventListener("change", (event) => {
            document.getElementById("quantity").setAttribute("data-quantity", `${event.currentTarget.value}`);
        });

//Ajout d'un event listener sur l'élément .colors pour récupérer les changement de quantité sous la forme d'un attribut "data-color" 
        document.getElementById("colors").addEventListener("change", (event) => {
            document.getElementById("colors").setAttribute("data-color", `${event.currentTarget.value}`);
        });
//Ajout d'un event listener sur l'élément .addToCart pour appeler la fonction addToCart() et enregistrer les données dans le local storage
        document.getElementById("addToCart").addEventListener("click", () => {
            let productToAdd = {
                id: product._id,
                quantity: Number(document.getElementById("quantity").dataset.quantity),
                color: document.getElementById("colors").dataset.color
            };
            addToCart(productToAdd);
        });  
    })
})
