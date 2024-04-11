import { LightningElement,wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
let i=0;
export default class StudentFilter extends LightningElement {

    items = []; //this will hold key, value pair
    value = ''; //initialize combo box value

    chosenValue = '';
    selectedId='';
    @wire(getAllAccounts)
    wiredUserRoles({ error, data }) {
        if (data) {

            //create array with elements which has been retrieved controller
            //here value will be Id and label of combobox will be Name
            for(i=0; i<data.length; i++)  {
                this.items = [...this.items ,{value: data[i].Id , label: data[i].Name} ];                                   
            }                
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }

    //gettter to return items which is mapped with options attribute
    get AccountOptions() {
        return this.items;
    }

    handleChange(event) {
        // Get the string of the "value" attribute on the selected option
        const selectedOption = event.detail.value;
        console.log('selected value=' + selectedOption);
        this.chosenValue = selectedOption;
        this.selectedId = event.detail.value;
        const eventRef = new CustomEvent('accountselect',{bubbles:true,composed:true,detail:{accId : this.selectedId}});
        this.dispatchEvent(eventRef);
    }

    //this value will be shown as selected value of combobox item
    get selectedValue(){
        return this.chosenValue;
    }
}