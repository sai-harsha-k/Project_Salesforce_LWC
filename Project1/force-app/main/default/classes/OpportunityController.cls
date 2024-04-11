public class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpportunities(){
        return [select Name,StageName,CloseDate,Amount from Opportunity];
    }
    @AuraEnabled(cacheable=true) //cant use DML for true
    public static List<Opportunity> getWonOpportunities(){
        return [select Name,StageName,CloseDate,Amount from Opportunity where StageName='Closed Won'];
    }
    @AuraEnabled
    public static void deleteOpportunity(String sid){
        try {
            Opportunity opp = [select Name From Opportunity where Id=:sid];
            delete opp;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
