import axios from "axios";
import {Fancybox} from "@fancyapps/ui";

class Form {
    form;
    formType;
    inputs;
    url;
    body;
    status;
    error;
    failedInputs: (HTMLInputElement | HTMLTextAreaElement)[];
    
    constructor(element: Element) {
        this.form = element;
        this.formType = this.form.getAttribute('data-form');
        this.inputs = [
            ...Array.from(this.form.querySelectorAll('input')),
            ...Array.from(this.form.querySelectorAll('textarea'))
        ];
        this.url = this.form.getAttribute('action');
        this.body = document.querySelector('body');
        this.status = false;
        this.error = false;
        this.failedInputs = []
        
        this.init()
    }
    
    init() {
        switch (this.formType) {
            case 'search':
                this.initSearchForm()
                break;
            default:
                this.initDefaultForm()
                break;
        }
    }
    
    initDefaultForm = () => {
        this.form.addEventListener('submit', (evt) => evt.preventDefault())
        const sendButton = this.form.querySelector('button[type="submit"]');
        sendButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.sendData()
        })
    }
    
    initSearchForm = () => {
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const searchInput = this.inputs[0];
            window.location.href = `${this.url}?${searchInput.name}=${searchInput.value}`;
        })
    }
    
    getData = () => {
        const data = new FormData();
        const regexp = /^[a-zA-Z0-9а-яА-Я._%+-]+@[a-zA-Z0-9а-яА-Я.-]+\.[a-zA-Zа-яА-Я]{2,}$/;
        
        this.inputs.forEach(input => {
            if (input.inputmask) {
                if (input.value.length > 1 && !input.inputmask.isComplete()) {
                    this.error = true;
                    this.failedInputs = [...this.failedInputs, !this.failedInputs.includes(input) && input];
                }
            }
            if (input.hasAttribute("data-email") && !regexp.test(input.value)) {
                this.error = true;
                this.failedInputs = [...this.failedInputs, !this.failedInputs.includes(input) && input];
            }
            if (input.value.length <= 0) {
                this.error = true;
                this.failedInputs = [...this.failedInputs, !this.failedInputs.includes(input) && input];
            }
            
            data.append(input.name, input.value);
        })
        
        if (this.failedInputs.length <= 0) this.error = false;
        
        if (this.error) return false
        
        return data;
    }
    
    sendData = () => {
        if (!this.status) {
            if (this.getData() === false) {
                this.status = true;
                this.render('', this.errorMessageHint())
                this.failedInputs = [];
                
                return false;
            }
            axios.post(this.url, this.getData())
                .then(response => response.data)
                .then(data => {
                    this.status = true;
                    this.render()
                    
                    this.inputs.forEach(input => {
                        input.value = '';
                    })
                    Fancybox.close()
                })
                .catch(error => {
                    this.status = true;
                    this.render(error.message);
                });
        }
    }
    
    render = (error?: string, template?: string) => {
        this.body.insertAdjacentHTML('beforeend', template ? template : this.responseMessage(error))
        
        const responseModals = document.querySelectorAll('.modal-response');
        if (!responseModals) return;
        
        responseModals.forEach(responseModal => {
            setTimeout(() => {
                responseModal.classList.add('out')
            }, 3000)
            
            setTimeout(() => {
                responseModal.parentNode.removeChild(responseModal);
                this.status = false;
            }, 3300)
        })
    }
    
    responseMessage = (error?: string) => {
        return `
            <div class="modal-response" id="modal-response" data-response>
                <svg class="modal-response__icon">
                    <use xlink:href="./assets/sprite.svg#${error ? 'icon-deny' : 'icon-accept'}"></use>
                </svg>
                <h3 class="modal-response__title">${error ? 'Ошибка' : 'ваша заявка отправлена'}</h3>
                <p class="modal-response__text">${error ? error : 'Наш менеджер свяжется с вами'}</p>
            </div>
        `
    }
    
    errorMessageHint = () => {
        const errorText = this.failedInputs.map(el => {
            console.log(el)
            if (el) {
                return el.name + '<br>'
            }
        }).join('\n');
        return `
            <div class="modal-response" id="modal-response" data-response>
                <svg class="modal-response__icon">
                    <use xlink:href="./assets/sprite.svg#icon-deny"></use>
                </svg>
                <h3 class="modal-response__title">Ошибка</h3>
                <p class="modal-response__text">
                    Не заполнены поля:<br>
                    ${errorText}
                </p>
            </div>
        `
    }
}

export default Form
