import { LightningElement,wire } from 'lwc';
import getAllCases from '@salesforce/apex/CasesController.getAllCases'
export default class Casesv2 extends LightningElement {
    CaseList;
    //calculate additional 10% tax on Caseortunity amount
    @wire(getAllCases)
    loadAllCases({data,error}){//wiring apex method to this function/method
        if(data){
            this.CaseList=[];
            data.forEach(Case => {
                const obj ={
                    CaseNumber:Case.CaseNumber,
                    Subject:Case.Subject,
                    ClosedDate:Case.ClosedDate,
                    Priority:Case.Priority,
                    Status:Case.Status,
                    Id:Case.Id
                };
                this.CaseList.push(obj);
            });
        }
        else if(error){
            alert('problem in apex code');
        }
    }
}
