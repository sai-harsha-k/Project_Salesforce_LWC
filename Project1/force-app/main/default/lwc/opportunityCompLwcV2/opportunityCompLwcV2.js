import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
export default class OpportunityCompLwcV2 extends LightningElement {
    //define an array to store calculated object info
    oppList;
    //calculate additional 10% tax on opportunity amount
    @wire(getAllOpportunities)
    loadAllOpportunities({data,error}){//wiring apex method to this function/method
        if(data){
            this.oppList=[];
            data.forEach(opp => {
                const obj ={
                    Name:opp.Name,
                    StageName:opp.StageName,
                    CloseDate:opp.CloseDate,
                    Amount:opp.Amount,
                    Tax:opp.Amount*0.1,
                    Id:opp.Id
                };
                this.oppList.push(obj);
            });
        }
        else if(error){
            alert('problem in apex code');
        }
    }
}