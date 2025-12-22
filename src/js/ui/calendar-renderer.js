import { calendarData, getDayData } from '../data/calendar-data.js';
import { getInitialState } from '../core/state-manager.js';
import { checkState } from '../utils/date-utils.js';
import { CONFIG } from '../core/config.js';
import { handleDoorClick } from './door-handler.js';

// Référence au conteneur du calendrier
let calendarContainer;

// Initialise le renderer
export function initRenderer(containerId = 'calendar-container') {
    calendarContainer = document.getElementById(containerId);
    if (!calendarContainer) {
        console.error(`Conteneur avec l'ID "${containerId}" non trouvé`);
        return false;
    }
    return true;
}

// Génère toutes les cases du calendrier
export function generateCalendar() {
    if (!calendarContainer) {
        console.error('Renderer non initialisé. Appelez initRenderer() d\'abord.');
        return;
    }
    
    // Vider le conteneur
    calendarContainer.innerHTML = '';
    
    // Pour chaque élément dans calendarData
    calendarData.forEach(day => {
        createDoorElement(day.id);
    });
}

// Crée un élément de case individuel
export function createDoorElement(id) {
    const doorElement = document.createElement('div');
    
    // Déterminer l'état initial
    const initialState = getInitialState(id);
    
    // Ajouter les classes CSS de base
    doorElement.classList.add(CONFIG.CSS_CLASSES.DOOR);
    doorElement.classList.add(initialState);
    
    // Si c'est la case du jour, ajouter la classe spéciale
    if (checkState(id) === 'today') {
        doorElement.classList.add('today');
    }
    
    // Ajouter les attributs data
    doorElement.setAttribute('data-id', id);
    doorElement.setAttribute('data-state', initialState);
    
    // Ajouter le numéro de la case
    doorElement.textContent = id;
    
    // Ajouter l'élément au conteneur
    calendarContainer.appendChild(doorElement);
    
    // Ajouter un écouteur d'événement pour le clic
    doorElement.addEventListener('click', () => handleDoorClick(id, doorElement));
    
    return doorElement;
}

// Met à jour l'état visuel d'une case
export function updateDoorState(doorElement, newState) {
    const oldState = doorElement.getAttribute('data-state');
    
    // Retirer l'ancienne classe d'état
    doorElement.classList.remove(oldState);
    
    // Ajouter la nouvelle classe
    doorElement.classList.add(newState);
    doorElement.setAttribute('data-state', newState);
    
    // Gérer la classe today spéciale
    if (newState === 'opened' || newState === 'available') {
        doorElement.classList.remove('today');
    }
}

// Récupère un élément de case par son ID
export function getDoorElementById(id) {
    return document.querySelector(`.door[data-id="${id}"]`);
}