import { LightningElement } from 'lwc';

export default class StudentNavigation extends LightningElement {

    handleSelect(event){
        const item = event.detail.name;
        const eventRef = new CustomEvent("navigation",{detail:{item}});
        this.dispatchEvent(eventRef);
    }
}