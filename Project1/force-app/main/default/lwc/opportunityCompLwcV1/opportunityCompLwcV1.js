import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'

export default class OpportunityCompLwcV1 extends LightningElement {
    @wire(getAllOpportunities) oppList; //framework will inject 2 properties
    //inside opplist
    //1.data->contains return value from apex method
    //2.error ->contains exception details thrown by apex method 
}