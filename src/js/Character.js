import goblinImage from '../img/goblin.png';

// Экспортируем объект с персонажем
export const Character = {
    element: null,
    
    init() {
        this.element = document.createElement('img');
        this.element.src = goblinImage;
        this.element.alt = 'goblin';
    },
    
    get elementNode() {
        return this.element;
    }
};

// Инициализация при загрузке модуля
Character.init();
