// alert ('test');

/*--1- structure de base IF*/
/*--2- structure IF ....ELSE*/
/*--3 -structure IF ....ELSE IF ....ELSE*/


/*--1 - structure de base IF*/
if (true){ // par defaut le IF verifie si la condition est VRAIE (true)
    /*...code...*/
    
}
var nb1 = 99;
if (nb1 < 100){
    console.log (nb1 + 'est plus petit que 100');

}
/*--2- structure IF ...ELSE*/
if (true) { // par defaut le IF verifie si la condition est VRAIE (true)
    /*...code si condition VRAIE*/
} 
else { 
    /*...code si condition FAUSSE*/
}
var nb2= 399;
if (nb2 > 200){
    console.log(nb2 + ' est plu petite que 500');

}
else {
    console.log(nb2 + ' est plus grand que 500');

}

/*--3- structure IF... ELSE IF...ELSE*/
if (true) { // par defaut le IF verifie si la condition est VRAIE (true)
    /*...code si condition VRAIE*/
}
else if (true){
    /*...code si condition 1 est FAUSSE et la 2 est vraie...*/
} else {
    /*....code si condition 1 et 2 sont fausses*/

}
var nb4 =50; 
if (nb4 < 50) {
    console.log(nb4 + ' plus petit que 50');

}else if (nb4 > 50) {
    console.log (nb4 + 'plus grand que 50');

}else{
    console.log(nb4 + 'est egal a 50')
}

/*--EXO--*/
