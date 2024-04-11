import { api, LightningElement } from 'lwc';

export default class StudentTiles extends LightningElement {
    @api studentList;
    handlestudentclick(event){
        alert('studentTiles has received info '+event.detail.stdId);
    }
}