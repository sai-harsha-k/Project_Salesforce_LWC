import { LightningElement } from 'lwc';

export default class CalcModal extends LightningElement {
    firstNumber=20; //no comma separator 
    secondNumber=10; //every property must be defined in a separate line
    result; //default value will be "undefined"
//define handlers
handleFirstNumberChange(event){
this.firstNumber =event.target.value;
}
handleSecondNumberChange(event){
this.secondNumber = event.target.value;
}
closeModal(){
    //get reference of 1st div
   const divRef= this.template.querySelector('div');
    //apply slds-hide on this div to mae this modal to hide
    divRef.classList.add('slds-hide');
}

    //define action methods
    add(){
        this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
    }
    sub(){
        this.result=this.firstNumber-this.secondNumber;
    }
    div(){
        this.result=this.firstNumber/this.secondNumber;
    }
    mult(){
        this.result=this.firstNumber*this.secondNumber;
    }
}