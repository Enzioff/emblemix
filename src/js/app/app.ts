import Slider from "./slider";
import Accordion from "./Accordion";
import Mask from "./mask";

class App {
    constructor() {
        this.init();
    }

    init = () => {
        this.createSlider()
        this.createAccordion()
        this.createMask()
    }
    
    createSlider = () => {
        const sliders = document.querySelectorAll('[data-slider]')
        if (!sliders) return
        sliders.forEach(slider => {
            new Slider(slider)
        })
    }
    
    createAccordion = () => {
        const accordions = document.querySelectorAll('[data-accordion-item]')
    
        if (!accordions) return
        
        accordions.forEach(accordion => {
            new Accordion(accordion)
        })
    }
    
    createMask = () => {
        new Mask()
    }
}

export {App};



