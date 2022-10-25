/**Affichage de la page confirmation */

//récupération de la chaîne de requête dans l'url
const queryStringUrlId = document.location.search;
const urlSearchParams = new URLSearchParams(queryStringUrlId);
const urlorderId = urlSearchParams.get("id");
//Affichage de l'id de la commande sur la page
document.getElementById("orderId").innerHTML = `${urlorderId}`;
//Supression du contenu du local storage
localStorage.clear();