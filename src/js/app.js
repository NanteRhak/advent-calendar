// Point d'entrée principal de l'application
import { showWelcomeMessage } from './ui/message-manager.js';
import { initRenderer, generateCalendar } from './ui/calendar-renderer.js';
import { createDateDisplay } from './ui/date-display.js';
import { createDebugPanel } from './ui/debug-panel.js';

// Fonction d'initialisation principale
function init() {
    console.log("🔔 Initialisation du calendrier de l'Avent - Jour 2");
    console.log("📊 Logique de dates et états implémentée");
    console.log("🏗️ Architecture modulaire activée");
    
    // Créer l'affichage de la date
    createDateDisplay();
    
    // Créer le panneau debug si nécessaire
    createDebugPanel();
    
    // Initialiser et générer le calendrier
    if (initRenderer()) {
        generateCalendar();
    }
    
    // Afficher un message d'accueil
    setTimeout(() => {
        showWelcomeMessage();
    }, 1000);
}

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Exporter pour un éventuel usage global
export { init };