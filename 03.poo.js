//Créer une fonction constructeur Personne qui permet de créer un objet ayant les caractéristiques
//suivantes :
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + this.prenom + this.pseudo;
    }
}

//Créer un objet jules 
var jules = new Personne('Jules', 'LEMAIRE', 'jules77');

//Créer un objet paul 
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

//Afficher dans la console :
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

//Répéter l’affichage précédent pour l’objet paul (créer une fonction réutilisable
//afficherPersonne)
function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}
afficherPersonne(paul);

//Modifier le pseudo de l’objet jules en jules44
jules.pseudo = 'julles44';
afficherPersonne(jules);


//Ajouter une propriété à Personne
//Afficher la propriété age de l’objet jules, ◦ Vérifier que la valeur est undefined.
console.log(jules.age);

//Ajouter la propriété age à la structure Personne avec la valeur par défaut NON RENSEIGNE
Personne.prototype.age = 'NON RENSEIGNE';

//Afficher la propriété age de l’objet jules dans la console
console.log(jules.age);

//• Modifier l’age de l’objet jules à 30 et afficher le dans la console
jules.age = 30;
console.log(jules.age);


//Ajouter une méthode à Personne
//Ajouter la méthode getInitiales à la structure Personne qui retourne une chaine de caractères
//composée de la première lettre du prénom et de la première lettre du nom.
function getInitiales() {
    return (this.prenom.charAt(0) + this.nom.charAt(0));
}
Personne.prototype.getInitiales = getInitiales;
console.log(jules.getInitiales());


//Objet sans fonction constructeur
//Créer un objet robert sans fonction constructeur 
var robert = {
    prenom:'Robert',
    nom:'LEPREFET',
    pseudo:'robert77',
    getNomComplet:function () {
        return this.nom + this.prenom + this.pseudo;
    }
};
afficherPersonne(robert);


//Héritage via une fonction constructeur
//Créer une fonction constructeur Client qui possède les mêmes caractéristiques que Personne et
//qui en contient  plus 

var Client = function (nom,prenom,pseudo,numeroClient) {
    Personne.call(this, nom,prenom,pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.nom +" "+this.prenom+" "+this.pseudo+" "+this.numeroClient;
    }
};

var steve = new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
