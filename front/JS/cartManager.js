/**Gestion du panier, 
 * enregistrement d'un article dans le panier,
 * retrait d'un produit du panier et récupération de la liste du panier */

function addToCart(productId, productQuantity, productColor){
    let listCart = getCart();
    for(let i = 0; i < listCart.length; i++){
        if((listCart[i][0] == productId)&&(listCart[i][2] == productColor)){
            let listCartQuantity = Number(listCart[i][1]) + Number(productQuantity)
            listCart[i][1] = listCartQuantity;
        } 
    }
    listCart.push([productId, productQuantity, productColor]);
    saveCart(listCart);
}

function getCart(){
    let listCart = localStorage.getItem("listCart");
    if(listCart == null){
        return [];
    } else {
        return JSON.parse(listCart);
    }
}

function saveCart(listCart){
    localStorage.setItem("listCart", JSON.stringify(listCart))
}

