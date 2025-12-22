import { showMessage } from './message-manager.js';
import { getDayData, getTypeLabel } from '../data/calendar-data.js';
import { saveOpenedDoor, isDoorOpened } from '../core/localStorage.js';
import { updateDoorState } from './calendar-renderer.js';

// Gère le clic sur une case
export function handleDoorClick(id, doorElement) {
    const state = doorElement.getAttribute('data-state');
    
    // Vérifier l'état de la case
    switch (state) {
        case 'locked':
            handleLockedDoor(id);
            break;
            
        case 'opened':
            handleOpenedDoor(id);
            break;
            
        case 'available':
        case 'today':
            handleAvailableDoor(id, doorElement);
            break;
            
        default:
            console.warn(`État inconnu: ${state} pour la case ${id}`);
    }
}

// Gestion d'une case verrouillée
function handleLockedDoor(id) {
    showMessage('⏳ Patience ! Cette case sera disponible plus tard.', 'info');
    console.log(`🔒 Case ${id} verrouillée - non disponible avant le ${id} décembre`);
}

// Gestion d'une case déjà ouverte
function handleOpenedDoor(id) {
    const dayData = getDayData(id);
    if (dayData) {
        showMessage(
            `🎁 Case ${id} déjà ouverte !\n\n` +
            `Type: ${getTypeLabel(dayData.type)}\n` +
            `Contenu: ${dayData.content}`,
            'info'
        );
    }
    console.log(`📂 Case ${id} déjà ouverte`);
}

// Gestion d'une case disponible
function handleAvailableDoor(id, doorElement) {
    console.log(`🎯 Ouverture de la case ${id}`);
    
    // Mettre à jour l'état visuel
    updateDoorState(doorElement, 'opened');
    
    // Sauvegarder dans localStorage
    const wasNew = saveOpenedDoor(id);
    
    // Afficher le contenu
    const dayData = getDayData(id);
    if (dayData) {
        showMessage(
            `🎉 Case ${id} ouverte !\n\n` +
            `Type: ${getTypeLabel(dayData.type)}\n` +
            `Contenu: ${dayData.content}\n\n` +
            `Cette fonctionnalité sera complétée au jour 3 avec des surprises interactives !`,
            'success'
        );
    }
    
    if (wasNew) {
        console.log(`✅ Case ${id} sauvegardée comme ouverte`);
    }
}