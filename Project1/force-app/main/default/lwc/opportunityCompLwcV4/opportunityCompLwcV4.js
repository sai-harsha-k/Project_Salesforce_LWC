import { LightningElement, wire } from 'lwc';
import {refreshApex} from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
//import deleteOpportunity from '@salesforce/apex/OpportunityController.deleteOpportunity'
import {_showToast} from 'c/util';
const COLS =[
    {label:'Name',fieldName:'Name',type:'text'},
    {label:'Stage',fieldName:'StageName',type:'text'},
    {label:'Close Date',fieldName:'CloseDate',type:'date'},
    {label:'Amount',fieldName:'Amount',type:'currency'}
]
export default class OpportunityCompLwcV4 extends LightningElement {
    @wire(getAllOpportunities) oppList;
    oppCols = COLS;
    //define a property to store selectedRow information
    selectedOpportunityId;
    //handler
    handleRowSelection(event){
       const selectedRows = event.detail.selectedRows;
       if(selectedRows.length>0){
            this.selectedOpportunityId=selectedRows[0].Id;
            alert('you selected '+this.selectedOpportunityId);
       }
    }
    handleClick(){
        //call apex method imperatively to delete opportunity
        //deleteOpportunity({sid:this.selectedOpportunityId})
        deleteRecord(this.selectedOpportunityId)
        .then(()=>{
            alert('record got deleted successfully')
            _showToast(this,'COMPLETED','record got deleted successfully..','success')
            refreshApex(this.oppList);
        })
        .catch(()=>{
            _showToast(this,'INCOMPLETE','COUND NOT delete..','error')
            alert('could not delete record')
        })
    }
}//end of the class