// Modèle de données pour le calendrier
const calendarData = [
    { id: 1, type: 'text', content: 'Une citation de Noël inspirante !', status: 'locked' },
    { id: 2, type: 'image', content: 'assets/image1.jpg', status: 'locked' },
    { id: 3, type: 'text', content: 'Le premier flocon de neige est le messager de l’hiver.', status: 'locked' },
    { id: 4, type: 'text', content: 'Une idée cadeau originale !', status: 'available' },
    { id: 5, type: 'music', content: 'assets/music1.mp3', status: 'locked' },
    { id: 6, type: 'text', content: 'La magie de Noël est dans l’air !', status: 'locked' },
    { id: 7, type: 'image', content: 'assets/image2.jpg', status: 'locked' },
    { id: 8, type: 'game', content: 'Un mini-jeu de Noël', status: 'locked' },
    { id: 9, type: 'text', content: 'Une recette de biscuits de Noël', status: 'locked' },
    { id: 10, type: 'text', content: 'Une histoire de Noël à découvrir', status: 'locked' },
    { id: 11, type: 'music', content: 'assets/music2.mp3', status: 'locked' },
    { id: 12, type: 'image', content: 'assets/image3.jpg', status: 'locked' },
    { id: 13, type: 'text', content: 'Une tradition de Noël du monde entier', status: 'locked' },
    { id: 14, type: 'game', content: 'Un puzzle de Noël', status: 'locked' },
    { id: 15, type: 'text', content: 'Une belle image de paysage enneigé', status: 'locked' },
    { id: 16, type: 'text', content: 'Une chanson de Noël à écouter', status: 'locked' },
    { id: 17, type: 'image', content: 'assets/image4.jpg', status: 'locked' },
    { id: 18, type: 'text', content: 'Un conte de Noël pour enfants', status: 'locked' },
    { id: 19, type: 'text', content: 'Une décoration de Noël à fabriquer', status: 'locked' },
    { id: 20, type: 'music', content: 'assets/music3.mp3', status: 'locked' },
    { id: 21, type: 'image', content: 'assets/image5.jpg', status: 'locked' },
    { id: 22, type: 'text', content: 'Un vœu de Noël spécial pour vous', status: 'locked' },
    { id: 23, type: 'game', content: 'Un memory de Noël', status: 'locked' },
    { id: 24, type: 'text', content: 'La veille de Noël, magique !', status: 'locked' },
    { id: 25, type: 'text', content: 'Joyeux Noël ! Une grande surprise vous attend !', status: 'locked' }
];

// Référence au conteneur du calendrier
const calendarContainer = document.getElementById('calendar-container');

// Fonction pour générer les cases du calendrier
function generateCalendar() {
    // Vider le conteneur au cas où
    calendarContainer.innerHTML = '';
    
    // Pour chaque élément dans calendarData
    calendarData.forEach(day => {
        // Créer un élément div pour la case
        const doorElement = document.createElement('div');
        
        // Ajouter les classes CSS
        doorElement.classList.add('door');
        doorElement.classList.add(day.status); // locked, available, opened
        
        // Ajouter l'attribut data-id pour identifier la case
        doorElement.setAttribute('data-id', day.id);
        
        // Ajouter le numéro de la case
        doorElement.textContent = day.id;
        
        // Ajouter l'élément au conteneur
        calendarContainer.appendChild(doorElement);
        
        // Ajouter un écouteur d'événement pour le clic
        doorElement.addEventListener('click', () => handleDoorClick(day.id));
    });
}

// Fonction pour gérer le clic sur une case
function handleDoorClick(id) {
    // Pour le jour 1, nous n'avons pas encore la logique des dates
    // donc toutes les cases sont verrouillées
    // Cette fonction sera enrichie aux jours suivants
    
    // Afficher un message à l'utilisateur (sera remplacé par l'ouverture réelle au jour 3)
    alert(`Jour 1 : Cette fonctionnalité sera implémentée au jour 2-3.\n\nCase ${id} : ${calendarData.find(day => day.id === id).content}\n\nPour l'instant, toutes les cases sont verrouillées.`);
}

// Fonction d'initialisation
function init() {
    // Générer le calendrier
    generateCalendar();
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);