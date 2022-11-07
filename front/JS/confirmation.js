/**Affichage de la page confirmation */

//récupération de la chaîne de requête dans l'url
const stringUrlId = document.location.search;
const urlSearchParams = new URLSearchParams(stringUrlId);
const urlOrderId = urlSearchParams.get("id");
//Affichage de l'id de la commande sur la page
document.getElementById("orderId").innerHTML = `${urlOrderId}`;
//Supression du contenu du local storage
localStorage.clear();