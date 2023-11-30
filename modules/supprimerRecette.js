// supprimerRecette.js
const fs = require('fs').promises;

async function supprimerRecette(nomFichier, titre) { // Création d'une fonction pour supprimer une recette par son titre qui va être appelé dans ma fonction main de mon fichier main
    try {
        const data = await fs.readFile(nomFichier, 'utf8'); // Lecture du contenu du fichier
        const lignes = data.split('\n'); // Séparation du contenu en lignes

        const nouvellesLignes = lignes.filter((ligne) => { // Filtrer les lignes pour exclure la recette avec le titre spécifié
            return !ligne.includes(titre); // Exclure les lignes qui contiennent le titre de la recette à supprimer
        });

        // Écrire les nouvelles lignes dans le fichier
        await fs.writeFile(nomFichier, nouvellesLignes.join('\n'), 'utf8'); // Écriture des nouvelles lignes dans le fichier

        console.log(`Recette "${titre}" supprimée avec succès.`); // Message de succès
    } catch (err) {
        throw new Error(`Erreur lors de la suppression de la recette : ${err.message}`); // Gestion des erreurs
    }
}

module.exports = supprimerRecette;
