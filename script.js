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
    
    // Cases restantes... (j'ai raccourci pour la démonstration)
    {
        type: "joke",
        title: "Blague de Noël",
        icon: "fas fa-laugh-beam",
        content: {
            question: "Que dit le père Noël quand il voit un volcan ?",
            answer: "Ho ! Ho ! Ho ! Ça va chauffer !"
        }
    },
    // ... Ajoutez les 22 autres surprises ici
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