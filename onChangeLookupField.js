/**
 * Module: Contacts
 * Page: Create record
 * Event: onChange
 * Field: Account Lookup
 * Description: Client Script to populate form based on lookup field
 * Scenario: Fetch Accounts data through CRM API and populate some fields like currency, address and E-mail
 */

const account_data = ZDK.Apps.CRM.Accounts.fetchById(value.id); // value is an Account lookup object { id, name }

const { Phone, Billing_State, Billing_City, Billing_Code, Billing_Country, Billing_Street, Currency, Email } = account_data;

ZDK.Page.getForm().setValues({
    Mailing_City: Billing_City,
    Mailing_Country: Billing_Country,
    Mailing_State: Billing_State,
    Mailing_Street: Billing_Street,
    Currency,
    Email
});
