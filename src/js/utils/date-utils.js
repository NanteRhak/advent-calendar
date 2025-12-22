import { CONFIG, getEffectiveDay } from '../core/config.js';

// Vérifie si nous sommes en décembre
export function isDecember() {
    return CONFIG.currentDate.getMonth() + 1 === CONFIG.CHRISTMAS_MONTH;
}

// Formate une date en français
export function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
}

// Détermine l'état d'une case basé sur la date
export function checkState(caseNumber) {
    // Vérification si nous sommes en décembre
    if (!isDecember()) {
        console.log("⚠️ Nous ne sommes pas en décembre ! Toutes les cases sont verrouillées.");
        return 'locked';
    }
    
    const effectiveDay = getEffectiveDay();
    
    // Vérifier si la case est dans le futur, présente ou passée
    if (caseNumber > effectiveDay) {
        return 'locked'; // Case future
    } else if (caseNumber === effectiveDay) {
        return 'today'; // Case du jour
    } else {
        return 'available'; // Case passée
    }
}

// Vérifie si une case est aujourd'hui
export function isToday(caseNumber) {
    return checkState(caseNumber) === 'today';
}

// Vérifie si une case est future
export function isFuture(caseNumber) {
    return checkState(caseNumber) === 'locked';
}