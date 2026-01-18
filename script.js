// ============================================
// Tous les modules combinés en un seul fichier
// ============================================

// 1. Données des surprises
const surprisesData = [
    // Case 1 - 24 décembre
    {
        type: "message",
        title: "Joyeux Noël !",
        icon: "fas fa-gift",
        content: "Que la magie de Noël remplisse votre cœur de joie, votre maison de bonheur et votre vie de prospérité. Joyeux Noël !"
    },
    
    // Case 2 - 25 décembre
    {
        type: "quote",
        title: "Citation de Noël",
        icon: "fas fa-quote-right",
        content: "Noël, ce n'est pas un jour ni une saison, c'est un état d'esprit. - Calvin Coolidge"
    },
    
    // Case 3 - 26 décembre
    {
        type: "joke",
        title: "Blague de Noël",
        icon: "fas fa-laugh-beam",
        content: {
            question: "Que dit le père Noël quand il voit un volcan ?",
            answer: "Ho ! Ho ! Ho ! Ça va chauffer !"
        }
    },
    
    // Case 4 - 27 décembre
    {
        type: "message",
        title: "Pensée du jour",
        icon: "fas fa-heart",
        content: "Le plus beau cadeau de Noël reste le sourire des personnes qu'on aime."
    },
    
    // Case 5 - 28 décembre
    {
        type: "quote",
        title: "Citation festive",
        icon: "fas fa-quote-right",
        content: "À Noël, tous les chemins mènent à la maison. - Marjorie Holmes"
    },
    
    // Case 6 - 29 décembre
    {
        type: "mini_game",
        title: "Quiz de Noël",
        icon: "fas fa-question-circle",
        content: {
            question: "Dans quelle ville est née la tradition du Père Noël ?",
            answer: "À Rovaniemi, en Laponie finlandaise",
            options: ["Strasbourg", "Rovaniemi", "New York", "Londres"]
        }
    },
    
    // Case 7 - 30 décembre
    {
        type: "recipe",
        title: "Bûche de Noël facile",
        icon: "fas fa-utensils",
        content: "Ingrédients : 4 œufs, 100g sucre, 80g farine, 20g cacao, 200g crème liquide, 150g chocolat. Cuisson : 10min à 180°C. Garnir de crème au beurre."
    },
    
    // Case 8 - 31 décembre
    {
        type: "diy_gift",
        title: "Bougie maison",
        icon: "fas fa-candy-cane",
        content: "Faire fondre de la cire de soja, ajouter 10 gouttes d'huile essentielle de cannelle et 5 gouttes d'orange douce. Verser dans un pot avec une mèche. Laissez durcir 24h."
    },
    
    // Case 9 - 1er janvier
    {
        type: "music",
        title: "Last Christmas - Wham!",
        icon: "fas fa-music",
        content: "Découvrez ce classique intemporel de Noël : https://www.youtube.com/watch?v=E8gmARGvPlI"
    },
    
    // Case 10 - 2 janvier
    {
        type: "wallpaper",
        title: "Fond d'écran hivernal",
        icon: "fas fa-image",
        content: "Téléchargez ce magnifique paysage enneigé pour décorer votre écran. Lien : https://example.com/wallpaper1.jpg"
    },
    
    // Case 11 - 3 janvier
    {
        type: "promo_code",
        title: "Cadeau spécial",
        icon: "fas fa-tag",
        content: "Code promo : NOEL2024 - Profitez de -20% sur notre sélection de décorations festives jusqu'au 31 janvier."
    },
    
    // Case 12 - 4 janvier
    {
        type: "message",
        title: "Vœux du jour",
        icon: "fas fa-snowflake",
        content: "Que chaque flocon de neige vous apporte une raison de sourire aujourd'hui."
    },
    
    // Case 13 - 5 janvier
    {
        type: "joke",
        title: "Devinette festive",
        icon: "fas fa-laugh-wink",
        content: {
            question: "Quel est le comble pour un sapin de Noël ?",
            answer: "Avoir une boule dans la gorge !"
        }
    },
    
    // Case 14 - 6 janvier
    {
        type: "mini_game",
        title: "Memory de Noël",
        icon: "fas fa-brain",
        content: {
            instruction: "Trouvez les paires de symboles identiques !",
            theme: "Symboles de Noël : cadeaux, sapins, boules, étoiles"
        }
    },
    
    // Case 15 - 7 janvier
    {
        type: "recipe",
        title: "Cookies aux pépites",
        icon: "fas fa-cookie-bite",
        content: "Mélangez 200g farine, 1 œuf, 100g beurre, 80g sucre, 1 c.c. cannelle, 100g pépites. Formez des boules, cuire 12min à 175°C."
    },
    
    // Case 16 - 8 janvier
    {
        type: "diy_gift",
        title: "Sachets de thé maison",
        icon: "fas fa-mug-hot",
        content: "Mélangez thé noir, bâtons de cannelle, écorces d'orange séchées. Placez dans des sachets en coton. Parfait pour un cadeau personnalisé."
    },
    
    // Case 17 - 9 janvier
    {
        type: "music",
        title: "All I Want for Christmas - Mariah Carey",
        icon: "fas fa-music",
        content: "Écoutez ce tube incontournable : https://www.youtube.com/watch?v=yXQViqx6GMY"
    },
    
    // Case 18 - 10 janvier
    {
        type: "wallpaper",
        title: "Ciel étoilé festif",
        icon: "fas fa-star",
        content: "Admirez ce ciel étoilé avec un sapin illuminé. Téléchargement : https://example.com/wallpaper2.jpg"
    },
    
    // Case 19 - 11 janvier
    {
        type: "promo_code",
        title: "Offre spéciale",
        icon: "fas fa-percentage",
        content: "Code : JOYEUXNOEL - Livraison gratuite sur toute commande passée aujourd'hui."
    },
    
    // Case 20 - 12 janvier
    {
        type: "quote",
        title: "Pensée d'hiver",
        icon: "fas fa-quote-left",
        content: "L'hiver est la saison de réconfort, de bonne nourriture et de chaleur, du toucher d'une main amicale. - Alison Uttley"
    },
    
    // Case 21 - 13 janvier
    {
        type: "riddle",
        title: "Charade de Noël",
        icon: "fas fa-lightbulb",
        content: {
            riddle: "Mon premier est une note de musique, mon second se trouve dans la mer, mon tout est un symbole de Noël.",
            answer: "Sapin (fa + pin)"
        }
    },
    
    // Case 22 - 14 janvier
    {
        type: "mini_game",
        title: "Puzzle festif",
        icon: "fas fa-puzzle-piece",
        content: {
            instruction: "Reconstituez l'image du Père Noël et son traîneau !",
            difficulty: "Facile - 16 pièces"
        }
    },
    
    // Case 23 - 15 janvier
    {
        type: "recipe",
        title: "Vin chaud épicé",
        icon: "fas fa-wine-glass-alt",
        content: "Chauffez 1L de vin rouge avec 1 orange, 2 bâtons de cannelle, 4 clous de girofle, 50g sucre. Ne pas faire bouillir. Servir chaud avec une tranche d'orange."
    },
    
    // Case 24 - 16 janvier
    {
        type: "diy_gift",
        title: "Cartes de vœux artisanales",
        icon: "fas fa-pen-fancy",
        content: "Dessinez un sapin ou un bonhomme de neige sur du papier cartonné. Ajoutez un message personnalisé et quelques paillettes pour une touche magique."
    },
    
    // Case 25 - 17 janvier
    {
        type: "final_message",
        title: "Félicitations ! 🎉",
        icon: "fas fa-trophy",
        content: "Vous avez ouvert toutes les portes ! Merci d'avoir partagé cette aventure festive. Que la magie de Noël vous accompagne toute l'année. À l'année prochaine !"
    }
];

// 2. Gestion des dates
class DateManager {
    constructor() {
        this.today = new Date();
        this.startDate = new Date(this.today.getFullYear(), 11, 24);
        this.endDate = new Date(this.today.getFullYear() + 1, 0, 17);
        
        if (this.today.getMonth() === 0) {
            this.startDate = new Date(this.today.getFullYear() - 1, 11, 24);
            this.endDate = new Date(this.today.getFullYear(), 0, 17);
        }
    }
    
    getDateForDoor(doorNumber) {
        const doorDate = new Date(this.startDate);
        doorDate.setDate(doorDate.getDate() + (doorNumber - 1));
        return doorDate;
    }
    
    isDoorAvailable(doorNumber) {
        const doorDate = this.getDateForDoor(doorNumber);
        const today = new Date(this.today);
        return doorDate.getDate() === today.getDate() && 
               doorDate.getMonth() === today.getMonth() && 
               doorDate.getFullYear() === today.getFullYear();
    }
    
    isDoorLocked(doorNumber) {
        const doorDate = this.getDateForDoor(doorNumber);
        const today = new Date(this.today);
        return doorDate > today;
    }
    
    formatDate(date) {
        const options = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString('fr-FR', options);
    }
    
    getTodayFormatted() {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return this.today.toLocaleDateString('fr-FR', options);
    }
}

// 3. Gestion du localStorage
class StorageManager {
    constructor() {
        this.storageKey = 'adventCalendarProgress';
        this.openedDoors = this.loadOpenedDoors();
    }
    
    loadOpenedDoors() {
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData) {
            try {
                return JSON.parse(storedData);
            } catch (error) {
                console.error('Erreur lors du chargement des données:', error);
                return [];
            }
        }
        return [];
    }
    
    saveOpenedDoors() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.openedDoors));
            return true;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des données:', error);
            return false;
        }
    }
    
    markDoorAsOpened(doorNumber) {
        if (!this.isDoorOpened(doorNumber)) {
            this.openedDoors.push(doorNumber);
            this.saveOpenedDoors();
        }
    }
    
    isDoorOpened(doorNumber) {
        return this.openedDoors.includes(doorNumber);
    }
    
    getOpenedDoorsCount() {
        return this.openedDoors.length;
    }
}

// 4. Gestion des animations
class AnimationManager {
    constructor() {
        this.animationInstances = [];
    }
    
    doorOpenAnimation(element, onComplete = null) {
        const animation = anime({
            targets: element,
            rotateY: [0, 180],
            duration: 800,
            easing: 'easeOutBack',
            complete: onComplete
        });
        
        this.animationInstances.push(animation);
        return animation;
    }
    
    modalOpenAnimation(element) {
        return anime({
            targets: element,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });
    }
    
    modalCloseAnimation(element, onComplete = null) {
        return anime({
            targets: element,
            scale: 0.8,
            opacity: 0,
            duration: 400,
            easing: 'easeInQuad',
            complete: onComplete
        });
    }
    
    pulseAnimation(element) {
        return anime({
            targets: element,
            scale: [1, 1.05, 1],
            duration: 1500,
            easing: 'easeInOutSine',
            loop: true
        });
    }
    
    shakeAnimation(element) {
        return anime({
            targets: element,
            translateX: [-10, 10, -10, 10, 0],
            duration: 400,
            easing: 'easeInOutSine'
        });
    }
}

// 5. Gestion de la modal
class ModalManager {
    constructor() {
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modal = document.getElementById('modal');
        this.modalContent = document.getElementById('modalContent');
        this.modalClose = document.getElementById('modalClose');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.modalClose.addEventListener('click', () => this.close());
        this.modalCloseBtn.addEventListener('click', () => this.close());
        
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.close();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    open(surpriseData) {
        this.modalContent.innerHTML = this.generateSurpriseContent(surpriseData);
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        return this;
    }
    
    close() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        return this;
    }
    
    generateSurpriseContent(surprise) {
        let content = '';
        
        switch (surprise.type) {
            case 'message':
                content = `
                    <div class="surprise-content">
                        <div class="surprise-icon">
                            <i class="${surprise.icon}"></i>
                        </div>
                        <h2 class="surprise-title">${surprise.title}</h2>
                        <div class="surprise-text">${surprise.content}</div>
                    </div>
                `;
                break;
                
            case 'quote':
                content = `
                    <div class="surprise-content">
                        <div class="surprise-icon">
                            <i class="${surprise.icon}"></i>
                        </div>
                        <h2 class="surprise-title">${surprise.title}</h2>
                        <div class="surprise-quote">${surprise.content}</div>
                    </div>
                `;
                break;
                
            case 'joke':
                content = `
                    <div class="surprise-content">
                        <div class="surprise-icon">
                            <i class="${surprise.icon}"></i>
                        </div>
                        <h2 class="surprise-title">${surprise.title}</h2>
                        <div class="surprise-joke">
                            <div class="joke-question">${surprise.content.question}</div>
                            <div class="joke-answer">${surprise.content.answer}</div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                content = `
                    <div class="surprise-content">
                        <div class="surprise-icon">
                            <i class="fas fa-gift"></i>
                        </div>
                        <h2 class="surprise-title">${surprise.title}</h2>
                        <div class="surprise-text">${surprise.content}</div>
                    </div>
                `;
        }
        
        return content;
    }
}

// 6. Gestion de l'audio
class AudioManager {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.audio.loop = true;
        this.audio.src = 'https://assets.mixkit.co/music/preview/mixkit-christmas-is-coming-1241.mp3';
        this.audio.volume = 0.3;
        
        this.musicToggle = document.getElementById('musicToggle');
        this.musicToggleText = this.musicToggle.querySelector('span');
        this.hasUserInteracted = false;
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.musicToggle.addEventListener('click', () => this.toggleMusic());
        
        document.addEventListener('click', () => {
            if (!this.hasUserInteracted) {
                this.hasUserInteracted = true;
            }
        }, { once: true });
    }
    
    toggleMusic() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    play() {
        if (this.hasUserInteracted) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updateButton();
            }).catch(error => {
                console.log('Erreur de lecture audio:', error);
                this.musicToggle.disabled = true;
                this.musicToggleText.textContent = 'Musique : Non disponible';
            });
        }
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateButton();
    }
    
    updateButton() {
        const icon = this.musicToggle.querySelector('i');
        
        if (this.isPlaying) {
            icon.className = 'fas fa-volume-up';
            this.musicToggleText.textContent = 'Musique : ON';
        } else {
            icon.className = 'fas fa-volume-mute';
            this.musicToggleText.textContent = 'Musique : OFF';
        }
    }
}

// 7. Gestion du calendrier
class Calendar {
    constructor(modalManager, audioManager) {
        this.calendarGrid = document.getElementById('calendarGrid');
        this.progressCount = document.getElementById('progressCount');
        this.todayDate = document.getElementById('todayDate');
        
        this.modalManager = modalManager;
        this.audioManager = audioManager;
        
        this.dateManager = new DateManager();
        this.storageManager = new StorageManager();
        this.animationManager = new AnimationManager();
        
        this.doors = [];
        
        this.init();
    }
    
    init() {
        this.todayDate.textContent = this.dateManager.getTodayFormatted();
        this.generateDoors();
        this.updateProgress();
        this.addEventListeners();
    }
    
    generateDoors() {
        this.calendarGrid.innerHTML = '';
        this.doors = [];
        
        for (let i = 1; i <= 25; i++) {
            const doorDate = this.dateManager.getDateForDoor(i);
            const doorState = this.getDoorState(i);
            
            const doorElement = document.createElement('div');
            doorElement.className = `calendar-door ${doorState}`;
            doorElement.dataset.doorNumber = i;
            
            if (this.dateManager.isDoorAvailable(i)) {
                doorElement.classList.add('today');
            }
            
            doorElement.innerHTML = `
                <div class="door-number">${i}</div>
                <div class="door-date">${this.dateManager.formatDate(doorDate)}</div>
                <div class="door-icon">
                    ${this.getDoorIcon(doorState)}
                </div>
            `;
            
            this.calendarGrid.appendChild(doorElement);
            this.doors.push({
                element: doorElement,
                number: i,
                state: doorState
            });
            
            if (doorState === 'available') {
                this.animationManager.pulseAnimation(doorElement);
            }
        }
    }
    
    getDoorState(doorNumber) {
        if (this.storageManager.isDoorOpened(doorNumber)) {
            return 'opened';
        } else if (this.dateManager.isDoorLocked(doorNumber)) {
            return 'locked';
        } else {
            return 'available';
        }
    }
    
    getDoorIcon(state) {
        switch(state) {
            case 'locked':
                return '<i class="fas fa-lock"></i>';
            case 'available':
                return '<i class="fas fa-gift"></i>';
            case 'opened':
                return '<i class="fas fa-check-circle"></i>';
            default:
                return '<i class="fas fa-question"></i>';
        }
    }
    
    addEventListeners() {
        this.calendarGrid.addEventListener('click', (e) => {
            const doorElement = e.target.closest('.calendar-door');
            if (!doorElement) return;
            
            const doorNumber = parseInt(doorElement.dataset.doorNumber);
            this.handleDoorClick(doorNumber, doorElement);
        });
    }
    
    handleDoorClick(doorNumber, doorElement) {
        const doorState = this.getDoorState(doorNumber);
        
        switch(doorState) {
            case 'locked':
                this.animationManager.shakeAnimation(doorElement);
                break;
                
            case 'available':
                this.animationManager.doorOpenAnimation(doorElement, () => {
                    doorElement.className = 'calendar-door opened';
                    doorElement.querySelector('.door-icon').innerHTML = this.getDoorIcon('opened');
                    this.storageManager.markDoorAsOpened(doorNumber);
                    this.updateProgress();
                    this.showSurprise(doorNumber);
                });
                break;
                
            case 'opened':
                this.showSurprise(doorNumber);
                break;
        }
    }
    
    showSurprise(doorNumber) {
        const surpriseIndex = doorNumber - 1;
        const surprise = surprisesData[surpriseIndex] || surprisesData[0];
        this.modalManager.open(surprise);
    }
    
    updateProgress() {
        const openedCount = this.storageManager.getOpenedDoorsCount();
        this.progressCount.textContent = openedCount;
    }
}

// 8. Effet de neige simplifié
class SnowEffect {
    constructor(containerId = 'snowContainer') {
        this.container = document.getElementById(containerId);
        this.isActive = false;
        this.snowflakes = [];
    }
    
    start() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.createSnowflakes();
    }
    
    createSnowflakes() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createSnowflake();
            }, i * 100);
        }
    }
    
    createSnowflake() {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerHTML = '❄';
        
        flake.style.left = `${Math.random() * 100}vw`;
        flake.style.fontSize = `${Math.random() * 20 + 10}px`;
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        
        this.container.appendChild(flake);
        
        // Animation simple avec anime.js
        anime({
            targets: flake,
            translateY: window.innerHeight + 100,
            translateX: () => anime.random(-100, 100),
            rotate: () => anime.random(0, 360),
            duration: () => anime.random(5000, 15000),
            easing: 'linear',
            complete: () => {
                flake.remove();
                if (this.isActive) {
                    this.createSnowflake();
                }
            }
        });
    }
}

// 9. Initialisation principale
document.addEventListener('DOMContentLoaded', () => {
    try {
        const modalManager = new ModalManager();
        const audioManager = new AudioManager();
        const snowEffect = new SnowEffect();
        const calendar = new Calendar(modalManager, audioManager);
        
        snowEffect.start();
        
        document.addEventListener('click', () => {
            if (!audioManager.hasUserInteracted) {
                audioManager.hasUserInteracted = true;
                audioManager.play();
            }
        }, { once: true });
        
        console.log('Calendrier de l\'Avent initialisé avec succès !');
        
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
});