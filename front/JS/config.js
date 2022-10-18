/* Permet de récupérer l'url du serveur */

async function loadConfig(){
    let result = await fetch("../../config.json");
    return result.json();
}