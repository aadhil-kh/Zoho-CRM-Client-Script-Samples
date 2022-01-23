/**
 * Module: Quotes
 * Page: Create record
 * Event: onChange
 * Field: Account Lookup
 * Description: Client Script to populate default products based on choosen Account's Industry
 */

const account_data = ZDK.Apps.CRM.Accounts.fetchById(value.id); // value is lookup object { id, name }

// get the products using search api
const products = ZDK.Apps.CRM.Products.searchByCriteria('(Product_Category:equals:' + account_data.Industry + ')'); 

ZDK.Page.getField('Quoted_Items').setValue(products.map(p => ({
    Product_Name: {
        id: p.id,
        name: p.Product_Name
    },
    Quantity: 1,
    List_Price: p.Unit_Price
})));