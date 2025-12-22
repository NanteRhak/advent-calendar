// Configuration globale de l'application
export const CONFIG = {
    // Configuration des dates
    currentDate: new Date(),
    
    // Pour tester, décommentez et changez la valeur (1-31)
    DEBUG_DAY: new Date().getDate(), // Exemple: 10 pour le 10 décembre
    // DEBUG_DAY: 10,
    
    // Paramètres du calendrier
    TOTAL_DAYS: 25,
    CHRISTMAS_MONTH: 12,
    
    // Chemins des assets
    ASSETS_PATH: 'assets/',
    
    // Classes CSS
    CSS_CLASSES: {
        DOOR: 'door',
        LOCKED: 'locked',
        AVAILABLE: 'available',
        TODAY: 'today',
        OPENED: 'opened'
    }
};

// Getter pour le jour effectif
export function getEffectiveDay() {
    return CONFIG.DEBUG_DAY !== CONFIG.currentDate.getDate() 
        ? CONFIG.DEBUG_DAY 
        : CONFIG.currentDate.getDate();
}

// Vérifier si on est en mode debug
export function isDebugMode() {
    return CONFIG.DEBUG_DAY !== CONFIG.currentDate.getDate();
}