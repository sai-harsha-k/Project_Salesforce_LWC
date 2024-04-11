import { api, LightningElement, wire } from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import MAILING_CITY from '@salesforce/schema/Contact.MailingCity';
import MAILING_COUNTRY from '@salesforce/schema/Contact.MailingCountry';
import {_getData} from 'c/util';
const fields = [MAILING_CITY,MAILING_COUNTRY];//best practice
export default class StudentMap extends LightningElement {
    //define property to store map related values
    mapMarkers;
    @api selectedStudentId;
    //wire getRecord
    //use '$propertyname' approch to bring the data dynamically
    //usage of variable names along with property names
    @wire(getRecord,{recordId:'$selectedStudentId',fields})
    loadStudentAddress({data}){
        if(data){
            //empty the array
            this.mapMarkers=[]; //check this by commenting

            const City =_getData(data,MAILING_CITY)
            const Country =_getData(data,MAILING_COUNTRY)
            this.mapMarkers=[
                {
                    location:{City,Country},
                    title:'Student Info',
                    description:`${City} is in the ${Country}`
                }
                            ];
                }
    }
}