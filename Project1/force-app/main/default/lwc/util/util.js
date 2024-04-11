import { getFieldValue,getFieldDisplayValue } from "lightning/uiRecordApi";
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
const _getData = function(data,field){
    return getFieldDisplayValue(data,field)?getFieldDisplayValue(data,field):getFieldValue(data,field)
}
const _showToast = function(thisArg,title,message,variant){
    const eventRef = new ShowToastEvent({title,message,variant});
    thisArg.dispatchEvent(eventRef);

}

export{
    _getData,
    _showToast
}
