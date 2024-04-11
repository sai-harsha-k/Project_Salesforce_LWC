import { LightningElement, wire } from 'lwc';
//step 1 imports
import { publish,MessageContext } from 'lightning/messageService';
import SMC from '@salesforce/messageChannel/Smc__c'
import getStudents from '@salesforce/apex/StudentController.getStudents';
//import getAccStudents from '@salesforce/apex/StudentController.getAccStudents'
export default class StudentBrowser extends LightningElement {
    //step 2 wire MessageContext to a property
    @wire(MessageContext) msgContext;

    studentList;
    selectedStudentId='';
    accountid;
    sError;
    handleselect(event){
        this.accountid = event.detail.accId;
        getStudents({accid : this.accountid})
        .then((result)=>{
            this.studentList = [];
            result.forEach((con) => {
                const student = {
                    Name: con.FirstName + ' ' + con.LastName,
                    Email: con.Email,
                    Phone: con.Phone,
                    Id: con.Id,
                    PhotoUrl : "/services/images/photo/00380FakePictId"
                };
                this.studentList.push(student);
            });
            this.sError = undefined;
        })
        .catch((issue)=>{
            this.sError = issue;
            this.studentList = undefined;
        })
    }//method ends here
    handlestudentclick(event){
        //alert('student Browser has received info '+event.detail.stdId);
        this.selectedStudentId=event.detail.stdId;
        //publish message
        publish(this.msgContext,SMC,{msg:this.selectedStudentId});
    }
}