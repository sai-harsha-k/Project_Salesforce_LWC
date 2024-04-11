public with sharing class CasesController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(){
        return [select CaseNumber,Subject,ClosedDate,Priority,Status from Case];
    }
    @AuraEnabled(cacheable=true) //cant use DML for true
    public static List<Case> getOpenCases(){
        return [select CaseNumber,Subject,ClosedDate,Priority,Status from Case where Status!='Closed'];
    }

}
