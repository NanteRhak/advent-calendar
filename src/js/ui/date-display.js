import { CONFIG, isDebugMode, getEffectiveDay } from '../core/config.js';
import { formatDate } from '../utils/date-utils.js';

// Crée l'affichage de la date dans le header
export function createDateDisplay() {
    const header = document.querySelector('header');
    if (!header) return;
    
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

// Met à jour l'affichage de la date
export function updateDateDisplay() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;
    
    dateElement.textContent = formatDate(CONFIG.currentDate);
    
    // Ajouter un indicateur si on est en mode debug
    if (isDebugMode()) {
        dateElement.innerHTML += ` <span style="color: #D4AF37; font-size: 0.8em;">(TEST: ${getEffectiveDay()}/12)</span>`;
    }
}