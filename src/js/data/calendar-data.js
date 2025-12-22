// Données des 25 jours du calendrier
export const calendarData = [
    { id: 1, type: 'text', content: 'Une citation de Noël inspirante !', status: 'locked' },
    { id: 2, type: 'image', content: 'assets/image1.jpg', status: 'locked' },
    { id: 3, type: 'text', content: 'Le premier flocon de neige est le messager de l\'hiver.', status: 'locked' },
    { id: 4, type: 'text', content: 'Une idée cadeau originale !', status: 'locked' },
    { id: 5, type: 'music', content: 'assets/music1.mp3', status: 'locked' },
    { id: 6, type: 'text', content: 'La magie de Noël est dans l\'air !', status: 'locked' },
    { id: 7, type: 'image', content: 'assets/image2.jpg', status: 'locked' },
    { id: 8, type: 'game', content: 'Un mini-jeu de Noël', status: 'locked' },
    { id: 9, type: 'text', content: 'Une recette de biscuits de Noël', status: 'locked' },
    { id: 10, type: 'text', content: 'Une histoire de Noël à découvrir', status: 'locked' },
    { id: 11, type: 'music', content: 'assets/music2.mp3', status: 'locked' },
    { id: 12, type: 'image', content: 'assets/image3.jpg', status: 'locked' },
    { id: 13, type: 'text', content: 'Une tradition de Noël du monde entier', status: 'locked' },
    { id: 14, type: 'game', content: 'Un puzzle de Noël', status: 'locked' },
    { id: 15, type: 'text', content: 'Une belle image de paysage enneigé', status: 'locked' },
    { id: 16, type: 'text', content: 'Une chanson de Noël à écouter', status: 'locked' },
    { id: 17, type: 'image', content: 'assets/image4.jpg', status: 'locked' },
    { id: 18, type: 'text', content: 'Un conte de Noël pour enfants', status: 'locked' },
    { id: 19, type: 'text', content: 'Une décoration de Noël à fabriquer', status: 'locked' },
    { id: 20, type: 'music', content: 'assets/music3.mp3', status: 'locked' },
    { id: 21, type: 'image', content: 'assets/image5.jpg', status: 'locked' },
    { id: 22, type: 'text', content: 'Un vœu de Noël spécial pour vous', status: 'locked' },
    { id: 23, type: 'game', content: 'Un memory de Noël', status: 'locked' },
    { id: 24, type: 'text', content: 'La veille de Noël, magique !', status: 'locked' },
    { id: 25, type: 'text', content: 'Joyeux Noël ! Une grande surprise vous attend !', status: 'locked' }
];

// Fonction utilitaire pour obtenir un label lisible pour le type
export function getTypeLabel(type) {
    const labels = {
        'text': '📝 Message',
        'image': '🖼️ Image',
        'music': '🎵 Musique',
        'game': '🎮 Mini-jeu'
    };
    return labels[type] || type;
}

// Fonction pour récupérer les données d'une case spécifique
export function getDayData(id) {
    return calendarData.find(day => day.id === id);
}