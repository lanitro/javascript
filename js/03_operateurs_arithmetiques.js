//alert('hi');

/*===== 1 - les operateurs ======*/
/*===== 2 - les ecritures simplifiées ======*/

/*===== 1 - les operateurs ======*/
// je declare mes variables / constantes en debut de fichier
// je peux en declarer plusieurs a la volée :
var nb1, nb2, resultat;

// J'affecte des valeurs a certaines variables
nb1 = 10;
nb2 = 5;

/*--1 - additionner avec '+' */
resultat = nb1 + nb2;
console.log(resultat);

/*--2 - soustraire avec '-'*/
resultat =nb1 - nb2;
console.log(resultat);

/* --3 - multiplier avec '*' */
resultat = nb1 * nb2;
console.log(resultat);

/*--4 - diviser avec '/' */
resultat =nb1 / nb2;
console.log(resultat);

/*--5 - le reste d'une division avec le Modulo '%' */
resultat =nb1 / nb2;
console.log(resultat);

// je reaffecte un chiffre a nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log('le reste de la division de' +nb1 + 'par' + nb2 + 'est egal à:' + resultat);



/*======2 - les ecritures simplifiées ====*/
var ex = 15;
ex = ex + 5;
console.log(ex);

ex += 5;
console.log(ex);

nb1 -= 5;
console.log(nb1);

/*========3 - l'incrementation et la decrementation====*/
var nb1 = 1;
nb1 = nb1 +1; // nb1 += 1

nb1++; // ++ = +1
nb1+2; // +2 =+2

/* /!\ selon l'ordre le calcule n'est pas fait au meme moment*/
resultat_1 = --nb1;
resultat_2 = nb1--;
resultat_1 == resultat_2; // => true uniquement a la fin des calculs

/*
--nb1 => calcule tout de suite
nb1-- => commence a la valeur de nb1 PUIS calcule

pareil avec ++
*/

