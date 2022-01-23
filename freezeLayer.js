/**
 * Module: Quotes
 * Page: Create record
 * Event: onChange
 * Field: Account Lookup
 * Description: Client Script to add freeze layer if client script has time consuming api calls
 * Scenario: Populate default products based on choosen Account's Industry and Quantity is set based on third party data
 * Constraints: my-json-server.typicode.com or the domain to be accessed has to be added in Setup -> Users and Control -> Trusted Domains
 * Similar: https://github.com/aadhilrf/Zoho-CRM-Client-Script-Samples/blob/main/subformPopulation.js
 */

ZDK.UI.freeze(true); // freeze ui layer

// business logic under try block to prevent hang
try {
    const account_data = ZDK.Apps.CRM.Accounts.fetchById(value.id); // value is lookup object { id, name }

    // get the products using search api
    const products = ZDK.Apps.CRM.Products.searchByCriteria('(Product_Category:equals:' + account_data.Industry + ')'); 
    
    if (products.length) {
        const product_vs_quantity = {};
        for (const product of products) {
            product_vs_quantity[product.id] = (await(await fetch(`https://my-json-server.typicode.com/aadhilrf/products/products/${product.id}`)).json()).quantity;
        }
        ZDK.Page.getField('Quoted_Items').setValue(products.map(p => ({
            Product_Name: {
                id: p.id,
                name: p.Product_Name
            },
            Quantity: product_vs_quantity[p.id],
            List_Price: p.Unit_Price
        })));
    } else {
        ZDK.Client.showMessage(`No products available for the Industry: ${account_data.Industry}`);
    }
} catch (e) {
    log(e);
    ZDK.Client.showMessage(`Error in processing the products: ${e.message}`, { type: 'error' })
}

ZDK.UI.freeze(false); // unfreeze ui layer  