public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        return [select Name,Id from Account];
    }
}
