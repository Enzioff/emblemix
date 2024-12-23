class Tabs {
    tabContainer;
    headItems;
    contentItems;
    
    constructor(tabContainer: Element) {
        this.tabContainer = tabContainer;
        this.headItems = this.tabContainer.querySelectorAll('[data-tabs-head]')
        this.contentItems = this.tabContainer.querySelectorAll('[data-tabs-item]')
        
        this.init()
    }
    
    init() {
        this.headItems.forEach((item, idx) => {
            item.addEventListener('click', (evt) => {
                this.headItems.forEach(temp => temp.classList.remove('active'))
                this.contentItems.forEach(temp => temp.classList.remove('active'))
                item.classList.add('active');
                this.contentItems.item(idx).classList.add('active');
            })
        })
    }
}

export default Tabs;
