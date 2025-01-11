/**
 * Module: Contacts
 * Page: Create/Edit/Clone record page
 * Event: onChange
 * Field: Picklist/Single Line Field
 * Description: Client Script to populate empty rows in subform based on onChange of Single line / picklist field
 */

const number_of_rows = ZDK.Page.getField('Number_of_rows').getValue();

// add empty rows to the subform
ZDK.Page.getField('Subform_1').setValue(Array.from({ length: number_of_rows }, () => ({})))
