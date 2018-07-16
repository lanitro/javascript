//alert('bonjour');

// 2 slashes pour un commentaire sur une ligne

/*
commentaire
sur
plusieurs
lignes
*/

/* (shift + alt+ a)
le DOM (document object model) est un programme interne au navigateur qui fait en sorte que
-chaque balise HTML
-chaque attribut des balises (clas, id, name...)
-chaque evenement (clic, double-clic, survol de la souris...)
deviennent des objet que l'on peut cibler, stocker dans une variable
et manipuler*/

/*
1. l'objet WINDOW en JS => le navigateur
  -alert('bonjour'); est pareil que window.alert('bonjour');
  -window est le seul objet du DOM qui peut s'utliser implicitement(sans l'ecrire)
2. l'objet DOCUMENT en JS=> la page HTML
   -document.getElementBy....
   */
  
   /*============= 1- Les variables==========*/
   /*============= 2- Les types de données==========*/
   /*============= 3- Les constantes==========*/


   /*============= 1- Les variables==========*/
   /*--1- declarer une variable*/
   var maVariable;

   /*--2-affecter une valeur (stocker une valeur) */
   maVariable = "fleur";
   var coucou = "bonjour"; //declarer + affecter
   
   /* --3- une instruction se termine toujours par un point-virgule(;)
   mais je peux ecrire plusieurs instructions sur la meme ligne*/
   
   /*instruction_1;
   instruction_2; instruction_3; instruction_4;
   */

   /*--4- afficher une boite de dialogue*/
   /*window.alert('hello world');
   alert('hello world');
*/
   /*--5-afficher dans la console /!\ tres important pour debuger son code*/
   console.log('mila');

   /*--6- afficher du texte dans la page web*/
   document.write('VLG 2018-2019 adore le javascript!!');

/* --7- demander une info a l'internaute */
window.prompt('on mange quand ?');
prompt('on mange quoi?');

/*var mangerOu = window.prompt('on mange ou ?');
var mangerQuoi = prompt('on mange quoi?');
console.log(mangerou);
console.log(mangerQuoi); */

/*--8- LE JS est sensible a la casse (case sensitive)*/
/*mavariable =/= maVariable
monPrenom =/= mon_prenom
mon_nom =/= mon-nom

Ecriture camelCase
Ecriture snake_case
*/
/* --9- une variable 
       -ne peut pas commencer par un chiffre
       -ne doit contenir que des caracteres alphanumerique(lettre et chiffres - pas de caracteres speciaux type accents ou & ou + par ex.)
       -ne doit pas etre un mot reservé (var, for...des elements natifs du JS)
       https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
       */

/*--10- une variable peut-etre declarée:
   - de façon explicite: var manger = "oui"
   - ou implicite: quand = "13 heures"   
*/    


/*=========== 2- les types de donnés=========*/
/*--1 - une chaine de caracteres (string)*/
//var les_meilleurs ="VLG"; ou var les_meilleurs = 'VLG';
//var les_meilleurs ="2018" ou var les_meilleurs = '2018';

/*--2 - un nombre entier (integer ou int) */
var les_meilleurs = 2018;

/*--3 - Un nombre decimal (float)*/
var nb_a_virgule = -5.32;
/*
/!\ s'ecrit avec un point '.'

/!\ tous les nombres peuvent etre soi positifs soit negatifs*/

/*--4-un booleen (boolean) : VRAI/FAUX (TRUE/FALSE)*/
var vrai = true;
var faux = false;

/*--5- un tableau (array)*/
var gateau =['farine','oeuf','chocolat', 4, true];

/*--6- un objet*/
var voiture ={
    marque: 'Porsche',
    modele: '911',
    couleur: 'gris',
    vitesse: 'true',
    options: ['radio', 'ABS','freins', 4]
};



/*========= 3- les constantes============== */

/*on declare une constante avec le mot clé CONST
ses particularités:
   -elle est accessible uniquement en lecture
   -donc une fois declarée et une valeur affectée elle ne peut plus changer
   -elle ne peut etre declarée qu'une fois dans le meme script
   -par convention on ecrit son nom en majuscules
   */

const PAYS ="france";


/*============ 4- la concatenation ============*/
var annee = 2018;
var jo = 6;
var certificat_dev = "2019";

var calcul_1 = annee + jo;
console.log(calcul_1);
document.write("<hr>" + calcul_1 + "<br>");

var calcul_2 = annee + certificat_dev;
console.log(calcul_2);
document.write("<hr>" + calcul_2 + "<br>");

/* ******EXO***** */
var DebutPhrase ="Aujourd'hui ";
var NbStagiaires = 12;
var SuitePhrase ="stagiaires";
var FinPhrase ="sont presents.";

/* nous souahitons afficher la phrase en un seul morceau avecv la 
concatenation => a vos claviers ! /!\ attention aux espaces entre les mots*/

document.write(DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase);