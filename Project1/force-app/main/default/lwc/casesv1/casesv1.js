import { LightningElement, wire} from 'lwc';
import getAllCases from '@salesforce/apex/CasesController.getAllCases'
export default class Casesv1 extends LightningElement {
    @wire(getAllCases) caseList;
}