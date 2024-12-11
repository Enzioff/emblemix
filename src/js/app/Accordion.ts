class Accordion {
  accordion;
  header;
  
  constructor(accordion: Element) {
    this.accordion = accordion;
    this.header = this.accordion.querySelector('[data-accordion-header]');
    
    this.init()
  }
  
  init() {
    this.header.addEventListener('click', () => {
      this.toggle()
    })
  }
  
  toggle = () => {
    this.accordion.classList.toggle('active');
  }
}

export default Accordion;
