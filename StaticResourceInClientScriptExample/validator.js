/**
 * Description: Static Resource to validate based on multiple field's value
 */

function isFormValid() {
    const { Lead_Source, Lead_Status } = ZDK.Page.getForm().getValues(); // Get the all form fields and values

    if (Lead_Source === 'Chat' && Lead_Status === 'Not Contacted') {
        return false;
    }
    
    return true;
}
