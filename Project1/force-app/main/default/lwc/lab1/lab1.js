import { LightningElement } from 'lwc';
var Id;
export default class Lab1 extends LightningElement {
    todaysDateTime = new Date();
    updateDateTime(){
        //define local variable and assign property
        let that = this;
       Id= setInterval(function(){
            //callback function or nested func will not have this context
            that.todaysDateTime=new Date();
        }, 1000);
    }
    updateDateTimeUsingArrow(){
        Id = setInterval(() => {
            this.todaysDateTime = new Date();
        }, 1000);
    }
    stop(){
         clearInterval(Id)
    }
}