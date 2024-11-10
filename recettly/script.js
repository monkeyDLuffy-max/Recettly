document.getElementById('calculate-button').addEventListener('click', function() {
    const portionInput = document.getElementById('portion-input').value;
    const ingredients = document.querySelectorAll('#ingredients li');
  
    ingredients.forEach(ingredient => {
      const baseAmount = ingredient.getAttribute('data-base-amount');
      const newAmount = (baseAmount * portionInput).toFixed(2);
      ingredient.textContent = `${newAmount}g ${ingredient.textContent.split(' ')[1]}`; // Garder l'unité
    });
  });
  // Écouteur d'événement pour le bouton de calcul des portions
document.getElementById('calculate-button').addEventListener('click', function() {
    const portionInput = document.getElementById('portion-input').value;
    const ingredients = document.querySelectorAll('#ingredients li');

    ingredients.forEach(ingredient => {
        const baseAmount = ingredient.getAttribute('data-base-amount');
        const newAmount = (baseAmount * portionInput).toFixed(2);
        ingredient.textContent = `${newAmount}g ${ingredient.textContent.split(' ')[1]}`; // Garder l'unité
    });
});

// Fonctionnalité pour le bouton de mode sombre
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Exemple de code pour gérer la soumission des commentaires
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const commentText = document.getElementById('comment').value;
    const commentsList = document.querySelector('.comments-list ul');

    const newComment = document.createElement('li');
    newComment.innerHTML = `<strong>Utilisateur:</strong> ${commentText}`;
    commentsList.appendChild(newComment);

    // Réinitialiser le champ de commentaire
    document.getElementById('comment').value = '';
});

// Fonctionnalité pour générer une liste de courses
document.getElementById('generate-list').addEventListener('click', function() {
    const selectedRecipes = document.querySelectorAll('#selected-recipes li');
    const shoppingListOutput = document.getElementById('shopping-list-output');
    const shoppingListItems = document.getElementById('shopping-list-items');
    
    shoppingListItems.innerHTML = ''; // Réinitialiser la liste de courses

    selectedRecipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.textContent.replace('Retirer', '').trim(); // Retirer le bouton
        shoppingListItems.appendChild(listItem);
    });

    shoppingListOutput.style.display = 'block'; // Afficher la liste de courses
});

document.getElementById('customization-form').addEventListener('submit', function(event)) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les préférences sélectionnées
    const glutenFree = document.getElementById('gluten-free').checked;
    const vegan = document.getElementById('vegan').checked;
    const lowSugar = document.getElementById('low-sugar').checked;

    // Exemple de recettes de base
    const recipes = [
        { name: 'Pasta Primavera', glutenFree: false, vegan: false, lowSugar: false },
        { name: 'Salade de Quinoa', glutenFree: true, vegan: true, lowSugar: true },
        { name: 'Gâteau au Chocolat', glutenFree: false, vegan: false, lowSugar: true },
        // Ajoutez d'autres recettes ici
    ]};

