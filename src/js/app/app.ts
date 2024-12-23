import Slider from "./slider";
import Accordion from "./Accordion";
import Mask from "./mask";
import Menu from "./menu";
import Form from "./form";
import {Fancybox} from "@fancyapps/ui";

class App {
    constructor() {
        this.init();
    }
    
    init = () => {
        this.createSlider()
        this.createAccordion()
        this.createMask()
        this.createMenu()
        this.createForm()
        this.createFancybox()
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
    
    createMenu = () => {
        const menu = document.querySelector('[data-menu]');
        if (!menu) return
        new Menu(menu)
    }
    
    createForm = () => {
        const forms = document.querySelectorAll('form');
        if (!forms) return
        
        forms.forEach(form => {
            new Form(form)
        })
    }
    
    createFancybox = () => {
        Fancybox.bind('[data-fancybox]', {
            defaultType: 'inline'
        })
    }
}

export {App};



