// Gestion des messages toast
export function showMessage(text, type = 'info') {
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
    } else if (type === 'warning') {
        messageElement.style.backgroundColor = '#8b4513';
        messageElement.style.borderLeft = '4px solid #ffd700';
    }
    
    // Ajouter l'animation CSS
    addMessageAnimationStyles();
    
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
    
    return messageElement;
}

// Ajoute les styles d'animation pour les messages
function addMessageAnimationStyles() {
    if (document.getElementById('message-animations')) return;
    
    const style = document.createElement('style');
    style.id = 'message-animations';
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
}

// Message d'accueil
export function showWelcomeMessage() {
    const currentMonth = new Date().getMonth() + 1;
    const effectiveDay = new Date().getDate();
    
    if (currentMonth !== 12) {
        showMessage('🎄 Ceci est un calendrier de l\'Avent pour décembre ! Pour tester, utilisez le mode debug.', 'info');
    } else if (effectiveDay > 25) {
        showMessage('🎅 Noël est passé ! Profitez quand même du calendrier en mode test.', 'info');
    }
}