import { Element, api, track } from 'engine';

export default class vlocity_catalog_component extends Element {
    @track catalogMenu = [];
    @track activeIndex = 0;

    constructor() {
        super();
        this.catalogMenu = [
            {'name':'Mobile','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/mobile.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/mobile_white.svg'},
            {'name':'Plans','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/plan.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/plan_white.svg'},
            {'name':'Business','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/business.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/business_white.svg'},
            {'name':'Accessories','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/accessories.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/accessories_white.svg'},
            {'name':'Voice','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/voice.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/voice_white.svg'},
            {'name':'Television','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/television.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/television_white.svg'},
            {'name':'Internet','img1':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/internet.svg','img2':'https://vivek-cpq-anonymous-developer-edition.na59.force.com/resource/EcomIcons/EcomIcons/internet_white.svg'}
        ];
        this.catalogMenu[0].active = true;
    }

    get computedclass() {
        return this.activeIndex === this.getAttribute('id') ? 'ecom-catalog-item ecom-active-catalog ' : 'ecom-catalog-item';
    }
    onCatalogClick(event) {
        var selectedEle = this.root.querySelector('.ecom-active-catalog');
        if(selectedEle) {
            selectedEle.classList.remove('ecom-active-catalog');
            this.catalogMenu[selectedEle.getAttribute('id')].active = false;
        }
        selectedEle = event.currentTarget;
        selectedEle.classList.add('ecom-active-catalog');
        this.catalogMenu[selectedEle.getAttribute('id')].active = true;
        this.activeIndex = selectedEle.getAttribute('id');
    }
    toggleCatalogMobileMenu() {
        var ele = this.root.querySelector('.ecom-mobile-menu-list');
        if(ele) {
            ele.classList.toggle('open');
        }
    }

    renderedCallback() {
        if(this.activeIndex === 0) {
            this.catalogMenu[0].active = true;
            this.root.querySelector('.ecom-catalog-item').classList.add('ecom-active-catalog');
        }
    }
}