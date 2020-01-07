// TP 02

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

function afficher(element, index, array) {
    console.log(element);
};

//A l’aide de la fonction forEach(), afficher tous les éléments du tableau dans la console.
// premiere méthode 
villes.forEach(afficher);

// seconde méthode
villes.forEach(function (element) {
    console.log(element);
});


// A l’aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent
//la lettre a.
var lettreADansToutesLesVilles = function (element) {
    return element.includes('a');
};
var result = villes.every(lettreADansToutesLesVilles);
console.log(result);

//A l’aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le
//caractère '-'.
var auMoinsUneVilleAvecUnTiret = villes.some(function (element) {
    return element.includes('-');
});
console.log(auMoinsUneVilleAvecUnTiret);

//A l’aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un
//tableau dont les villes n’ont ni tiret, ni espace.
var villesSansTiretSansEspace = villes.filter(function (ville) {
    return !ville.includes('-') && !ville.includes(' ');
});
console.log('villesSansTiretSansEspace = ', villesSansTiretSansEspace);


//Chainer les Fonctions
//A partir du tableau villes, construire un tableau dont :
//◦ la dernière lettre du nom est 's'
//◦ les noms des villes sont en majuscules

var villesMajusculeSeTerminantParS = villes.filter(function (ville) {
    return ville.endsWith("s");
}).map(function (ville) {
    return ville.toUpperCase();
});
console.log('villesMajusculeSeTerminantParS = ', villesMajusculeSeTerminantParS);