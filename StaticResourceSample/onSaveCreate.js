/**
 * Module: Leads
 * Page: Create record
 * Event: onSave
 * Description: Client Script to validate using Static Resource
 * Constraints: Associate validator.js under 'Resources' sidebar of Client Script editor
 */

 if (isFormValid()) {
    return true;
} else {
    ZDK.Client.showAlert('Lead contacted through chat!');
    return false;
}