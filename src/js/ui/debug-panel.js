import { CONFIG, getEffectiveDay, isDebugMode } from '../core/config.js';
import { resetStorage } from '../core/localStorage.js';
import { showMessage } from './message-manager.js';

// Crée le panneau de contrôle debug
export function createDebugPanel() {
    if (!isDebugMode()) return;
    
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
    
    const effectiveDay = getEffectiveDay();
    
    debugPanel.innerHTML = `
        <h3 style="margin-top: 0; color: #D4AF37; font-size: 1rem;">🎯 Mode Test</h3>
        <p style="margin: 10px 0;">Jour simulé: <strong>${effectiveDay}/12</strong></p>
        <p style="margin: 10px 0; font-size: 0.8em; color: #ccc;">
            Cases 1-${effectiveDay}: Disponibles<br>
            Case ${effectiveDay}: Jour actuel<br>
            Cases ${effectiveDay+1}-25: Verrouillées
        </p>
        <button id="reset-storage" style="
            background: #D4AF37;
            color: #2F4F4F;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            font-weight: bold;
            width: 100%;
        ">🔄 Réinitialiser progression</button>
        <p style="margin: 10px 0; font-size: 0.8em; color: #D4AF37;">
            <i class="fas fa-info-circle"></i> Mode debug activé
        </p>
    `;
    
    document.body.appendChild(debugPanel);
    
    // Ajouter l'événement pour le bouton reset
    document.getElementById('reset-storage').addEventListener('click', () => {
        resetStorage();
        showMessage('Progression réinitialisée ! Rafraîchissez la page.', 'warning');
    });
}