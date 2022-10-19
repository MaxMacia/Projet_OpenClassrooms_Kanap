/**Affichage et intéractions avec la page cart */

let productData = {};
let totalQuantity = 0;
let totalPrice = 0;
let jsonListProducts = getCart();
for(let jsonProduct of jsonListProducts){
    let product = new Product(jsonProduct);
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
   
    totalQuantity += product.quantity;
    totalPrice += productData.price*product.quantity;
    document.getElementById("deleteItem").addEventListener("click", () =>{
        removeFromCart(product);
        window.location.reload();
    });
    document.getElementById("totalQuantity").innerHTML = totalQuantity;
    document.getElementById("totalPrice").innerHTML = totalPrice;
})

})

}


