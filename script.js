// Exercice 1
// Déclarez deux variables : prenom (contenant un prénom) et nombre (contenant un nombre).
// Concaténez le prénom avec une chaîne de caractères pour créer une phrase incluant le nombre.
// Affichez le résultat dans la console.

let prenom = "Xadija";
let nombre = 21;

let phrase = prenom + " a " + nombre + " ans.";
console.log(phrase);

/* ---------------------------------------------------------------------- */

// Exercice 2
// Déclarez trois variables : nombre1 et nombre2 (contenant des nombres) et chaine (contenant une chaîne de caractères).
// Effectuez une opération mathématique en utilisant les deux nombres.
// Concaténez le résultat avec la chaîne de caractères.
// Affichez le résultat final dans la console.

let nombre1 = 10;
let nombre2 = 5;
let chaine = "Le résultat de l'opération est : ";

let resultat = nombre1 * nombre2;
let phraseFinale = chaine + resultat;
console.log(phraseFinale);

/* ---------------------------------------------------------------------- */

// Exercice 3
// Déclarez une variable chaineNombre contenant une chaîne de caractères représentant un nombre.
// Convertissez cette chaîne en un nombre entier (nombreEntier1).
// Déclarez une autre variable (autreNombre) contenant un nombre entier.
// Soustrayez autreNombre de nombreEntier1 et affichez le résultat dans la console.

let chaineNombre = "42";
let nombreEntier1 = parseInt(chaineNombre);
let autreNombre = 15;

let resultatSoustraction = nombreEntier1 - autreNombre;
console.log(resultatSoustraction);

/* ---------------------------------------------------------------------- */

// Exercice 4
// Déclarez une variable chaineLongue contenant une chaîne de caractères.
// Déclarez une variable nombreMultiplicateur contenant un nombre.
// Multipliez la longueur de chaineLongue par nombreMultiplicateur.
// Affichez le résultat dans la console.

let chaineLongue = "Bonjour";
let nombreMultiplicateur = 3;

let resultatMultiplication = chaineLongue.length * nombreMultiplicateur;
console.log(resultatMultiplication);

/* ---------------------------------------------------------------------- */

// Exercice 5
// Déclarez deux variables : prenomPersonne (contenant un prénom) et agePersonne (contenant un âge).
// Utilisez des template literals pour créer une phrase indiquant le prénom et l'âge.
// Affichez le résultat dans la console.

let prenomPersonne = "Aline";
let agePersonne = 23;

let phraseTemplateLiteral = `${prenomPersonne} a ${agePersonne} ans.`;
console.log(phraseTemplateLiteral);