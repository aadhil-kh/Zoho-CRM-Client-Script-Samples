/**
 * Module: Deals
 * Page: Detail Page (Standard)
 * Event: onBeforeAdd
 * Event type: Notes Event
 * Description: Client Script to enrich user notes with additional information about the order.
 * Scenario: User adds a note to a deal with only the order Id (eg; #1125270000013771011). Client Script enriches the note with order details. Ignores other notes with different formats and allows saving note.
 */

// Extract Order ID from pattern like: "...#1125270000013771011"
const match = note.content.match(/#(\d{10,})/);

if (!match || !match[1]) {
    console.log("No Order ID found in note content.");
    return true; // allow saving without enrichment
}

const order_id = match[1];

// Fetch order details from CRM Orders module
const order_details = await ZDK.Apps.CRM.Orders.fetchById(order_id);

if (order_details == undefined) {
    ZDK.Client.showMessage('Order ID not found', { type: 'error' });
    return false;
}

const order_status = order_details._Status || "Not Available";
const amount = order_details._Grand_Total ?? "0";
const productNames = (order_details._Product_list || []).map(p => p?.Product_Name?.name).filter(Boolean).join(", ") || "No products listed";

const enrichedNote = `
PRODUCT DETAILS
Product Current Status : ${order_status}
Product(s)             : ${productNames}
Total Amount           : $${amount}`;

// Set enriched content back to the notes editor
ZDK.Page.getComponent("notes-editor").setValue({ content: enrichedNote });