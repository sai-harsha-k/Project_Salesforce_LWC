import { api, LightningElement } from 'lwc';

export default class StudentTable extends LightningElement {
    @api studentList;
    selectedStudentId;
    handleClick(event){
        //get the reference of the tr - thatsbeen clicked
        const trRef= event.currentTarget;
        //fetch the data attribute value
        this.selectedStudentId= trRef.getAttribute('data-sid');
        alert('you have clicked on '+this.selectedStudentId);
        const eventRef = new CustomEvent('studentclick',{bubbles:true,composed:true,detail:{stdId:this.selectedStudentId}});
        this.dispatchEvent(eventRef);
    }
}