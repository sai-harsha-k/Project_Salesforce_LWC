import { api, LightningElement } from 'lwc';

export default class StudentTile extends LightningElement {
  @api  student;
  /*= {
        Name:'Harsha',
        PhotoUrl:'/services/images/photo/00380FakePictId'
    }*/
    //handler
    handleClick(){
        //alert('you have clicked '+this.student.Id);
        //create a customEvent instance, populated detail with the payload
        //and dispatch the event
        //the event name(type) MUST be in lower case
        const eventRef = new CustomEvent('studentclick',{bubbles:true,composed:true,detail:{stdId:this.student.Id}});
        this.dispatchEvent(eventRef);
    }
}