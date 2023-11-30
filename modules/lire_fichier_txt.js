const fs = require('fs').promises; // J'importe le module fs pour pouvoir accéder au méthode qui va me permettre ici de lire et écrire dans un fichier txt


async function lireFichier(chemin) { // Je créer une fonction pour lire mon fichier txt avec en paramètre le chemin du fichier que je vais passer dans l'appel de cette fonciton dans la fonciton main de mon fichier main
    try { // J'essaie de 
        const data = await fs.readFile(chemin, 'UTF-8'); // lire le fichier txt et j'attend avant de passer à la suite
        console.log('Contenu du fichier :'); // Si tout c'est bien passer j'envoie un message 
        console.log(data); // puis je log les data du fichier txt

    } catch (err) { // S'il y a des erreurs, je les catch
        console.error("\n Erreur lors de la lecture du fichier : \n", err.message); // puis je les logs - L'utilisation de err.message dans les messages d'erreur permet d'afficher uniquement le message d'erreur, fournissant ainsi des informations plus précises sur la nature de l'erreur.
    }
}

module.exports = lireFichier; // J'importe cette fonction pour pouvoir l'utiliser dans ma fonction main de mon fichier main