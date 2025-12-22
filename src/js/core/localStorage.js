const STORAGE_KEY = 'adventCalendarOpenedDoors';

// Récupère les cases déjà ouvertes
export function getOpenedDoors() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Sauvegarde une case comme ouverte
export function saveOpenedDoor(id) {
    const openedDoors = getOpenedDoors();
    if (!openedDoors.includes(id)) {
        openedDoors.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(openedDoors));
        return true;
    }
    return false;
}

// Vérifie si une case est déjà ouverte
export function isDoorOpened(id) {
    const openedDoors = getOpenedDoors();
    return openedDoors.includes(id);
}

// Réinitialise le stockage (utile pour debug)
export function resetStorage() {
    localStorage.removeItem(STORAGE_KEY);
    return true;
}

// Récupère toutes les données de progression
export function getUserProgress() {
    return {
        openedDoors: getOpenedDoors(),
        totalOpened: getOpenedDoors().length,
        totalDoors: 25,
        progressPercentage: Math.round((getOpenedDoors().length / 25) * 100)
    };
}