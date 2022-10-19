/**Affichage et intéractions avec la page cart */

let jsonListProducts = getCart();
let totalQuantity = 0;
let totalPrice = 0;
for(let jsonProduct of jsonListProducts){
    let product = new Product(jsonProduct);
    document.getElementById("cart__items").innerHTML += `
    <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
        <div class="cart__item__img">
            <img src="${product.imageUrl}" alt="${product.altTxt}" />
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
            <h2>${product.name}</h2>
            <p>${product.color}</p>
            <p>${product.price} €</p>
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
                <p class="deleteItem">Supprimer</p>
            </div>
            </div>
        </div>
        </article>`;
    totalQuantity += product.quantity;
    totalPrice += product.price*product.quantity;
}
document.getElementById("totalQuantity").innerHTML = totalQuantity;
document.getElementById("totalPrice").innerHTML = totalPrice;
