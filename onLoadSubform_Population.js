/**
 * Module: Leads
 * Page: Edit record
 * Event: onLoad
 * Description: Prepopulate dummy subform data based on 
 */

const picklist_options = ZDK.Page.getField('Picklist_1').getPicklistOptions();

// add rows to the subform
ZDK.Page.getField('Subform_1').setValue(picklist_options.map(option => ({
  Document_Name: option.display_value
})));
