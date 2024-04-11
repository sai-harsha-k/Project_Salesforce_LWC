import { LightningElement } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities'
export default class OpportunityCompLwcV3 extends LightningElement {
    oppList;
    oppError;
    loadAllOpportunities(){
    //call getAllOpportunities() imperatively handle the success and error
        getAllOpportunities() //never put semi-colon
        .then((result)=>{
            this.oppList = result;
            this.oppError = undefined;
        })
        .catch((issue)=>{
            this.oppError=issue;
            this.oppList=undefined;
        })
    }
    loadWonOpportunities(){
        getWonOpportunities() //never put semi-colon
        .then((result)=>{
            this.oppList = result;
            this.oppError = undefined;
        })
        .catch((issue)=>{
            this.oppError=issue;
            this.oppList=undefined;
        })
    }

}