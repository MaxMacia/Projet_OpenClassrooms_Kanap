/**Permet de récupérer le domaine du serveur */

export async function loadConfig(){
    let result = await fetch("../config.json");
    return result.json();
}