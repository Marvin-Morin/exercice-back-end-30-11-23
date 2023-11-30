class Recette { // Je créer une classe pour créer un constructer
    constructor(titre, ingredients) {
        this.titre = titre;
        this.ingredients = ingredients;
    }
}

module.exports = Recette; // J'importe ce constructer pour pouvoir l'utiliser dans ma fonction addRecette de mon fichier addRecette