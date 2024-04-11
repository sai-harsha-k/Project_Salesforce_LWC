import { LightningElement } from 'lwc';

export default class StudentLayout extends LightningElement {
    //define a property to store the selected item-inside the studentNavigation
    selectedItem;
    handleNavigation(event){
       this.selectedItem= event.detail.item;
       //alert('you have selected '+this.selectedItem);
      
    }
    get browserSelected(){
        return this.selectedItem ==='students';
    }
    get calculatorSelected(){
        return this.selectedItem ==='calc';
    }
    get oppv3Selected(){
        return this.selectedItem ==='oppv3';
    }
    get oppv4Selected(){
        return this.selectedItem ==='oppv4';
    }

}