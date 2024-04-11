import { LightningElement } from 'lwc';
import getAllCases from '@salesforce/apex/CasesController.getAllCases'
import getOpenCases from '@salesforce/apex/CasesController.getOpenCases'
export default class Casesv3 extends LightningElement {
    CaseList;
    CaseError;
    loadAllCases(){
    //call getAllCaseortunities() imperatively handle the success and error
        getAllCases() //never put semi-colon
        .then((result)=>{
            this.CaseList = result;
            this.CaseError = undefined;
        })
        .catch((issue)=>{
            this.CaseError=issue;
            this.CaseList=undefined;
        })
    }
    loadOpenCases(){
        getOpenCases() //never put semi-colon
        .then((result)=>{
            this.CaseList = result;
            this.CaseError = undefined;
        })
        .catch((issue)=>{
            this.CaseError=issue;
            this.CaseList=undefined;
        })
    }
}