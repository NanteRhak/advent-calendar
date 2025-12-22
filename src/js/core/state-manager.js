import { checkState } from '../utils/date-utils.js';
import { isDoorOpened } from './localStorage.js';

// Fonction pour obtenir l'état initial d'une case
export function getInitialState(caseNumber) {
    const state = checkState(caseNumber);
    
    // Vérifier dans le localStorage si la case a déjà été ouverte
    if (isDoorOpened(caseNumber)) {
        return 'opened';
    }
    
    // 'today' est visuellement 'available' mais avec mise en avant
    return state === 'today' ? 'available' : state;
}

// Vérifie si une case est cliquable
export function isDoorClickable(state) {
    return state === 'available' || state === 'today' || state === 'opened';
}

// Obtient l'état suivant après un clic
export function getNextState(currentState) {
    if (currentState === 'available' || currentState === 'today') {
        return 'opened';
    }
    return currentState;
}