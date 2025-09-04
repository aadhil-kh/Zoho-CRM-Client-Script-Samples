/**
 * Module: Deals
 * Page: Detail Page (Standard)
 * Event: onLoad
 * Event type: Page Event
 * Description: Client Script to disable the clone button if deal is in any of closed stage.
 */

const dealStage = ZDK.Page.getField("Stage").getValue();

if (dealStage.toLowerCase().includes("closed")) {
    const clone_btn = ZDK.Page.getButton('clone');
    clone_btn.disable();
}