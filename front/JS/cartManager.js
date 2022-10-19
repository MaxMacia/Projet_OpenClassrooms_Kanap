/**Gestion du panier, 
 * enregistrement d'un article dans le panier,
 * retrait d'un produit du panier et récupération de la liste du panier */

function saveCart(listCart){
    localStorage.setItem("listCart", JSON.stringify(listCart))
}

function getCart(){
    let listCart = localStorage.getItem("listCart");
    if(listCart == null){
        return [];
    } else {
        return JSON.parse(listCart);
    }
}

function addToCart(product){
    let listCart = getCart();
    let findProduct = listCart.find(p => ((p.id == product.id)&&(p.color == product.color)))
    if(findProduct != undefined){
        findProduct.quantity += product.quantity;
    } else {
        listCart.push(product);
    }
    saveCart(listCart);
}

function removeFromCart(product){
    let listCart = getCart();
    listCart = listCart.filter(p => ((p.id != product.id)&&(p.color != product.color)));
    saveCart(listCart);
}




