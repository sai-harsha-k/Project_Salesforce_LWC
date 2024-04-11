import { LightningElement, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
//step : 1 import subsbscribe and MessageContext and the messageChannel
import { subscribe,MessageContext } from 'lightning/messageService';
import SMC from '@salesforce/messageChannel/Smc__c';


export default class StudentDetail extends NavigationMixin(LightningElement) {
    //Define a property to store  the selectedstudentId
    selectedStudentId = '';
    //step2: wire Message Context With a property
    @wire(MessageContext ) msgContext;
    
    //step 3: Subscribe for the event  -> inside the connectCallback life cycle hook
    connectedCallback(){
        subscribe(this.msgContext,SMC,(message)=>this.handleMsg(message));
    }
    //step 4: Handle the event
    handleMsg(message){
        
    this.selectedStudentId = message.msg;
    }
    createContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'

            }
        });
    }
    viewContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: 'view',
                recordId: this.selectedStudentId,
                objectApiName: 'Contact'
            }
        });
    }
    editContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: 'edit',
                recordId: this.selectedStudentId,
                objectApiName: 'Contact'
            }
        });
    }

}