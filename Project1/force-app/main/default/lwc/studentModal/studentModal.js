import { LightningElement } from 'lwc';

export default class StudentModal extends LightningElement {
    closeModal(){
        //get reference of 1st div
       const divRef= this.template.querySelector('div');
        //apply slds-hide on this div to mae this modal to hide
        divRef.classList.add('slds-hide');
    }
}