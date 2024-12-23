class Menu {
    menuEl;
    burger;
    state;
    body;
    
    constructor(element: Element) {
        this.menuEl = element;
        this.burger = document.querySelector('[data-burger]');
        this.body = document.querySelector('body');
        this.state = false;
        
        this.init()
    }
    
    init() {
        this.burger.addEventListener('click', () => {
            this.state = !this.state
            this.update()
        });
    }
    
    update() {
        if (this.state) {
            this.menuEl.classList.add('active');
            this.body.classList.add('fixed');
        } else {
            this.menuEl.classList.remove('active');
            this.body.classList.remove('fixed');
        }
    }
}

export default Menu;
