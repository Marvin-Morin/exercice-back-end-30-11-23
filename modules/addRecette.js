const Recette = require('./constructeur'); // J'importe mon constructeur
const fs = require('fs').promises; // J'importe la méthode fs pour accéder au fichier de l'ordinateur dans lequel s'execute node.js

async function addRecette(push, titre, ingredients) { // Je créer une fonction qui me permettre de créer une nouvelle recette juste en l'appelan dans le main
    const newRecette = new Recette(titre, ingredients); // Je créer une nouvelle instance de mon constructeur

    await push.push(newRecette); // J'attend de pousser ma nouvelle recette dans mon tabelau recettes de mon fichier main

    try { // J'essai
        if (typeof newRecette.titre !== 'string' || typeof newRecette.ingredients !== 'string') { // Si mon titre et mes ingrédients de ma nouvelle recette ne sont pas des strings
            throw new Error('\n Le titre et les ingrédients doivent être des chaînes de caractères. \n'); // Alors je créer une nouvelle instance de la méthode ErrorConstructor de node.js puis j'indique le message d'erreur ciblé
        }
        await fs.appendFile('Recettes.txt', `Titre de la recette : ${newRecette.titre} \n Ingrédients nécessaires : ${newRecette.ingredients}\n\n`, 'utf8'); // Si mon titre et mes ingrédients de ma nouvelle recette sont des strings 
        console.log('Recette ajoutée avec succès dans le fichier. \n'); // alors j'indique que l'ajout de cette recette c'est bien déroulé
    } catch (err) { // Sinon, j'attrape l'erreur
        console.error(`Erreur lors de l'ajout de la recette dans le fichier : \n `, err.message); // Puis je log l'erreur ciblé en question
    }
}

module.exports = addRecette; // J'exporte cette fonction pour pouvoir l'utiliser dans la fonction main de mon fichie rmain
