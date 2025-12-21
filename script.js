// Modèle de données pour le calendrier
const calendarData = [
    { id: 1, type: 'text', content: 'Une citation de Noël inspirante !', status: 'locked' },
    { id: 2, type: 'image', content: 'assets/image1.jpg', status: 'locked' },
    { id: 3, type: 'text', content: 'Le premier flocon de neige est le messager de l’hiver.', status: 'locked' },
    { id: 4, type: 'text', content: 'Une idée cadeau originale !', status: 'locked' },
    { id: 5, type: 'music', content: 'assets/music1.mp3', status: 'locked' },
    { id: 6, type: 'text', content: 'La magie de Noël est dans l\'air !', status: 'locked' },
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

// ============================================
// PARTIE JOUR 2 : LOGIQUE DE DATES ET ÉTATS
// ============================================

// 1. Initialisation du "Temps"
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Janvier = 0, donc +1
const currentYear = currentDate.getFullYear();

// Variable de debug pour tester différentes dates
// Pour tester, décommentez la ligne suivante et changez la valeur (1-31)
const DEBUG_DAY = currentDay; // Exemple: 10 pour le 10 décembre
// const DEBUG_DAY = 10; // Décommentez pour forcer le 10 décembre

// Le jour effectif utilisé (normal ou debug)
const effectiveDay = DEBUG_DAY;

console.log(`🔔 Jour 2 - Système de dates activé`);
console.log(`📅 Date actuelle: ${currentDay}/${currentMonth}/${currentYear}`);
console.log(`🔧 Jour utilisé (debug): ${effectiveDay}`);

// 2. Algorithme de Mapping
function checkState(caseNumber) {
    // Vérification si nous sommes en décembre
    if (currentMonth !== 12) {
        console.log("⚠️ Nous ne sommes pas en décembre ! Toutes les cases sont verrouillées.");
        return 'locked';
    }
    
    // Vérifier si la case est dans le futur, présente ou passée
    if (caseNumber > effectiveDay) {
        return 'locked'; // Case future
    } else if (caseNumber === effectiveDay) {
        return 'today'; // Case du jour
    } else {
        return 'available'; // Case passée
    }
}

// Fonction pour obtenir l'état initial d'une case (avant interaction utilisateur)
function getInitialState(caseNumber) {
    const state = checkState(caseNumber);
    
    // Vérifier dans le localStorage si la case a déjà été ouverte
    const openedDoors = JSON.parse(localStorage.getItem('openedDoors')) || [];
    if (openedDoors.includes(caseNumber)) {
        return 'opened'; // La case a déjà été ouverte
    }
    
    return state === 'today' ? 'available' : state; // 'today' est visuellement 'available' mais avec mise en avant
}

// 3. Fonction pour mettre à jour l'affichage de la date
function updateDateDisplay() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = currentDate.toLocaleDateString('fr-FR', options);
        
        // Ajouter un indicateur si on est en mode debug
        if (DEBUG_DAY !== currentDay) {
            dateElement.innerHTML += ` <span style="color: #D4AF37; font-size: 0.8em;">(TEST: ${DEBUG_DAY}/12)</span>`;
        }
    }
}

// Fonction pour générer les cases du calendrier
function generateCalendar() {
    // Vider le conteneur au cas où
    calendarContainer.innerHTML = '';
    
    // Pour chaque élément dans calendarData
    calendarData.forEach(day => {
        // Créer un élément div pour la case
        const doorElement = document.createElement('div');
        
        // Déterminer l'état initial de la case
        const initialState = getInitialState(day.id);
        
        // Ajouter les classes CSS de base
        doorElement.classList.add('door');
        
        // Ajouter la classe d'état
        doorElement.classList.add(initialState);
        
        // Si c'est la case du jour, ajouter la classe spéciale
        if (checkState(day.id) === 'today') {
            doorElement.classList.add('today');
        }
        
        // Ajouter l'attribut data-id pour identifier la case
        doorElement.setAttribute('data-id', day.id);
        doorElement.setAttribute('data-state', initialState);
        
        // Ajouter le numéro de la case
        doorElement.textContent = day.id;
        
        // Ajouter l'élément au conteneur
        calendarContainer.appendChild(doorElement);
        
        // Ajouter un écouteur d'événement pour le clic
        doorElement.addEventListener('click', () => handleDoorClick(day.id, doorElement));
    });
}

// 4. Protection des données (Logic Gate)
function handleDoorClick(id, doorElement) {
    const state = doorElement.getAttribute('data-state');
    
    // Vérifier l'état de la case
    if (state === 'locked') {
        // Case verrouillée (future)
        showMessage('⏳ Patience ! Cette case sera disponible plus tard.', 'info');
        console.log(`🔒 Case ${id} verrouillée - non disponible avant le ${id} décembre`);
        return;
    }
    
    if (state === 'opened') {
        // Case déjà ouverte
        showMessage(`🎁 Case ${id} déjà ouverte !\n\nContenu: ${calendarData.find(day => day.id === id).content}`, 'info');
        console.log(`📂 Case ${id} déjà ouverte`);
        return;
    }
    
    // Case disponible (available ou today)
    console.log(`🎯 Ouverture de la case ${id}`);
    
    // Marquer la case comme ouverte visuellement
    doorElement.classList.remove('available', 'today');
    doorElement.classList.add('opened');
    doorElement.setAttribute('data-state', 'opened');
    
    // Sauvegarder dans localStorage (préparation pour le jour 3)
    const openedDoors = JSON.parse(localStorage.getItem('openedDoors')) || [];
    if (!openedDoors.includes(id)) {
        openedDoors.push(id);
        localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
    }
    
    // Afficher le contenu (sera amélioré au jour 3)
    const dayData = calendarData.find(day => day.id === id);
    showMessage(
        `🎉 Case ${id} ouverte !\n\n` +
        `Type: ${getTypeLabel(dayData.type)}\n` +
        `Contenu: ${dayData.content}\n\n` +
        `Cette fonctionnalité sera complétée au jour 3 avec des surprises interactives !`,
        'success'
    );
}

// Fonction utilitaire pour obtenir un label lisible pour le type
function getTypeLabel(type) {
    const labels = {
        'text': '📝 Message',
        'image': '🖼️ Image',
        'music': '🎵 Musique',
        'game': '🎮 Mini-jeu'
    };
    return labels[type] || type;
}

// Fonction pour afficher des messages à l'utilisateur
function showMessage(text, type = 'info') {
    // Créer l'élément message
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = text;
    
    // Style du message
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Style selon le type
    if (type === 'info') {
        messageElement.style.backgroundColor = '#2F4F4F';
        messageElement.style.borderLeft = '4px solid #D4AF37';
    } else if (type === 'success') {
        messageElement.style.backgroundColor = '#1a472a';
        messageElement.style.borderLeft = '4px solid #90ee90';
    }
    
    // Ajouter l'animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Ajouter au document
    document.body.appendChild(messageElement);
    
    // Supprimer après 4 secondes
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 300);
    }, 4000);
}

// Fonction pour créer le panneau de contrôle debug
function createDebugPanel() {
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    debugPanel.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(47, 79, 79, 0.9);
        border: 2px solid #D4AF37;
        border-radius: 10px;
        padding: 15px;
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.9rem;
        z-index: 1000;
        max-width: 250px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        backdrop-filter: blur(5px);
    `;
    
    debugPanel.innerHTML = `
        <h3 style="margin-top: 0; color: #D4AF37; font-size: 1rem;">🎯 Mode Test</h3>
        <p style="margin: 10px 0;">Jour simulé: <strong>${effectiveDay}/12</strong></p>
        <p style="margin: 10px 0; font-size: 0.8em; color: #ccc;">
            Cases 1-${effectiveDay}: Disponibles<br>
            Case ${effectiveDay}: Jour actuel<br>
            Cases ${effectiveDay+1}-25: Verrouillées
        </p>
        <p style="margin: 10px 0; font-size: 0.8em; color: #D4AF37;">
            <i class="fas fa-info-circle"></i> Mode debug activé
        </p>
    `;
    
    document.body.appendChild(debugPanel);
}

// Fonction pour créer l'affichage de la date dans le header
function createDateDisplay() {
    const header = document.querySelector('header');
    if (header) {
        const dateDisplay = document.createElement('div');
        dateDisplay.id = 'current-date';
        dateDisplay.className = 'date-display';
        dateDisplay.style.cssText = `
            margin-top: 15px;
            font-size: 1.1rem;
            color: #D4AF37;
            background: rgba(0,0,0,0.2);
            padding: 8px 15px;
            border-radius: 20px;
            display: inline-block;
        `;
        
        // Insérer après les instructions
        const instructions = document.querySelector('.instructions');
        if (instructions) {
            instructions.parentNode.insertBefore(dateDisplay, instructions.nextSibling);
        } else {
            header.appendChild(dateDisplay);
        }
        
        updateDateDisplay();
    }
}

// Fonction d'initialisation
function init() {
    console.log("🔔 Initialisation du calendrier de l'Avent - Jour 2");
    console.log("📊 Logique de dates et états implémentée");
    
    // Créer l'affichage de la date
    createDateDisplay();
    
    // Créer le panneau debug si on est en mode debug
    if (DEBUG_DAY !== currentDay) {
        createDebugPanel();
    }
    
    // Générer le calendrier
    generateCalendar();
    
    // Afficher un message d'accueil
    setTimeout(() => {
        if (currentMonth !== 12) {
            showMessage('🎄 Ceci est un calendrier de l\'Avent pour décembre ! Pour tester, utilisez le mode debug.', 'info');
        } else if (effectiveDay > 25) {
            showMessage('🎅 Noël est passé ! Profitez quand même du calendrier en mode test.', 'info');
        }
    }, 1000);
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', init);