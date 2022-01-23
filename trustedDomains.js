/**
 * Module: Leads
 * Page: Create record
 * Event: onChange
 * Field: Email
 * Description: Client Script to access thrid party site
 * Scenario: Fetch lead data from third party site and populate name, phone, website and company in create record page
 * Constraints: jsonplaceholder.typicode.com or the domain to be accessed has to be added in Setup -> Users and Control -> Trusted Domains
 */

const response = await fetch('https://jsonplaceholder.typicode.com/users?email=' + value); // value contains the Email value

const lead_data = (await response.json())[0];
 
if (lead_data) {
    const { name, phone, website, company } = lead_data; // object destructuring
    ZDK.Page.getForm().setValues({
        Company: company.name,
        Last_Name: name,
        Phone: phone,
        Website: website
    });
} else {
    ZDK.Client.showAlert('Email not valid');
}