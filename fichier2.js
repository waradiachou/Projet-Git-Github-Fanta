function JourdelaSemaine(numerojour){
    let jour;
    switch(numerojour){
        case 1:
            jour = "Lundi";
            break;
        case 2:
            jour = "Mardi";
            break;
        case 3:
            jour = "Mercredi"
            break;
        case 4:
            jour = "Jeudi";
            break
        case 5:
            jour = "Vendredi";
            break;
        case 6:
            jour = "Samedi";
            break;
        case 7:
            jour = "Dimanche"
            break;
        default:
            jour = "Jour non valide";
    }
    return "Le ${numerojour} ne correspond pas à ${jour} ";
}
console.log(JourdelaSemaine(3));