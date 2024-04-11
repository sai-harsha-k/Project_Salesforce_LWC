public with sharing class StudentController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getStudents(){
        return [select FirstName,LastName,Email,Phone from Contact];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getStudents(String accid){
        if(accid==null){
            return [select FirstName,LastName,Email,Phone from Contact];
        }
        else{
            return [select FirstName,LastName,Email,Phone from Contact where AccountId = : accid];
        }
    }
}