/**
 * Module: Leads
 * Page: Create record
 * Event: onSave
 * Description: Client Script to validate based on multiple field's value
 * Scenario: Show an alert and prevent save if lead's status is set as 'Not Contacted' but, lead's source is 'Chat'
 */

const { Lead_Source, Lead_Status } = ZDK.Page.getForm().getValues(); // Get the all form fields and values

if (Lead_Source === 'Chat' && Lead_Status === 'Not Contacted') {
    ZDK.Client.showAlert('Lead contacted through chat!');
    return false;
}

return true;