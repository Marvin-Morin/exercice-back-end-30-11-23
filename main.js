const fs = require('fs').promises; // J'importe le module fs pour pouvoir accéder au méthode qui va me permettre ici de lire et écrire dans un fichier txt
const addRecette = require('./modules/addRecette'); // J'importe ma méthode addRecette
const lireFichier = require('./modules/lire_fichier_txt'); // J'importe ma fonction qui va me permettre de lire le fichier txt

const recettes = []; // Je créer un tableau vide pour pousser les nouvelles recettes dans la fonction main



async function main() { // Je créer une fonction pour ajouter une nouvelle recette et lire le fichier txt
    try {
        await addRecette(recettes, 'Poulet frites', 'Poulet, frites'); // J'importe une recette graçe à ma méthode addRecette dans mon fichier addRecette
        console.log('Recette ajouté avec succès'); // Je vérifie si tout c'est bien déroulé
        await lireFichier('Recettes.txt') // puis je lis le fichier txt

    } catch (err) { // S'il y a des erreurs, je les catch
        console.error("\n Erreur lors de l'jour de la recette : \n", err.message); // puis je les logs - L'utilisation de err.message dans les messages d'erreur permet d'afficher uniquement le message d'erreur, fournissant ainsi des informations plus précises sur la nature de l'erreur.
    }
}

main(); // J'appel ma fonction main pour que ca fonctionne