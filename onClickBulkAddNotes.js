/**
 * Module: Orders
 * Page: List Page (Standard)
 * Event: onClick
 * Event type: Custom Button
 * Description: Client Script to add bulk notes to the user selected records in List page.
 * Scenario: User selects multiple records in List page and clicks on the custom button to add notes.
 */

const response = ZDK.Client.getInput([{
    type: 'text',
    label: 'Title'
}, {
    type: 'textarea',
    label: 'Notes'
}], "Bulk Notes", 'Save', 'Cancel');

const title = response[0];
const notes = response[1];

ZDK.Client.showLoader({
    type: 'page',
    template: 'spinner',
    message: 'Notes are being added to the selected records'
});

const module = $Page.module;

context.records.forEach(record => { // Iterate over the records from context argument
	const note = new ZDK.Apps.CRM.Notes.Models.Notes();
    note.Note_Title = title;
	note.Note_Content = notes;
	note.Parent_Id_Lookup_Id = record.id;
	note.$se_module = module;
	ZDK.Apps.CRM.Notes.create(note);
});

ZDK.Client.hideLoader();

ZDK.Client.showMessage('Notes have been added to all selected records', {
	type: 'success'
});