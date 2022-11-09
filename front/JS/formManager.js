/**Gestion du formulaire */

//Contrôle le nom et le prénom, retournre vrai ou faux, écris un message d'érreur si faux
export function validName(nameInput){
    let nameRegexp = new RegExp("^[a-zA-Zéèêôîëï-]+$", 'g');
    let nameTest = nameRegexp.test(nameInput.value);
    let nameErrorMsg = nameInput.nextElementSibling;
    if(!nameTest){
        nameErrorMsg.innerHTML = "Veuillez entrer un nom ou prénom correct";
        return false;
    } else {
        nameErrorMsg.innerHTML = "";
        return true;
    }
}
//Contrôle l'adresse, retournre vrai ou faux, écris un message d'érreur si faux
export function validAdress(adressInput){
    let adressRegexp = new RegExp("^[0-9]+[a-zA-Zéèêôîëï-\\s']", 'g');
    let adressTest = adressRegexp.test(adressInput.value);
    let adressErrorMsg = adressInput.nextElementSibling;
    if(!adressTest){
        adressErrorMsg.innerHTML = "Veuillez entrer une adresse correcte";
        return false;
    } else {
        adressErrorMsg.innerHTML = "";
        return true;
    }
}
//Contrôle la ville, retournre vrai ou faux, écris un message d'érreur si faux
export function validCity(cityInput){
    let cityRegexp = new RegExp("[a-zA-Zéèêôîëï-\\s']", 'g');
    let cityTest = cityRegexp.test(cityInput.value);
    let cityErrorMsg = cityInput.nextElementSibling;
    if(!cityTest){
        cityErrorMsg.innerHTML = "Veuillez entrer un nom de ville correct";
        return false;
    } else {
        cityErrorMsg.innerHTML = "";
        return true;
    }
}
//Contrôle l'email, retournre vrai ou faux, écris un message d'érreur si faux
export function validEmail(emailInput){
    let emailRegexp = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", 'g');
    let emailTest = emailRegexp.test(emailInput.value);
    let emailErrorMsg = emailInput.nextElementSibling;
    if(!emailTest){
        emailErrorMsg.innerHTML = "Veuillez entrer un email correct";
        return false;
    } else {
        emailErrorMsg.innerHTML = "";
        return true;
    }
}
//Contrôle les différents inputs et retourne la fonction appropriée
export function check(input){
    if (input == document.getElementById("firstName")
        ||
        input == document.getElementById("lastName")){
        return validName(input);
    }
    if (input == document.getElementById("address")){
        return validAdress(input);
    }
    if (input == document.getElementById("city")){
        return validCity(input);
    }
    if (input == document.getElementById("email")){
        return validEmail(input);
    }
}