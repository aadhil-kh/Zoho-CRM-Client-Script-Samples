/**
 * Module: Quotes
 * Page: Create record
 * Event: onChange
 * Field: Account Lookup
 * Description: Client Script to populate subform rows
 * Scenario: Populate default products based on choosen Account's Industry
 * Similar: https://github.com/aadhilrf/Zoho-CRM-Client-Script-Samples/blob/main/freezeLayer.js
 */

const account_data = ZDK.Apps.CRM.Accounts.fetchById(value.id); // value is lookup object { id, name }

// get the products using search api
const products = ZDK.Apps.CRM.Products.searchByCriteria('(Product_Category:equals:' + account_data.Industry + ')'); 

if (products.length) {
    ZDK.Page.getField('Quoted_Items').setValue(products.map(p => ({
        Product_Name: {
            id: p.id,
            name: p.Product_Name
        },
        Quantity: 1,
        List_Price: p.Unit_Price
    })));
} else {
    ZDK.Client.showMessage(`No products available for the Industry: ${account_data.Industry}`);
}
