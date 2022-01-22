/**
 * Module: Leads
 * Page: Create record
 * Event: onLoad
 * Description: Prepopulate some form data based on logged-in user role and make it read-only
 */

const user_data = ZDK.Apps.CRM.Users.fetchById($Crm.user.id); // $Crm.user -> logged in user data

const role_vs_lead_source = {
    'Facebook Admin': 'Facebook',
    'Twitter Admin': 'Twitter',
    'Desk Admin': 'Chat'
};

const lead_source_field = ZDK.Page.getField('Lead_Source');

lead_source_field.setValue(role_vs_lead_source[user_data.role.name]); // set the lead source based on role name
lead_source_field.setReadOnly(true);