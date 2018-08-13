import { Element } from "engine";

export default class helloworldextended extends Element {
    // your properties and methods here
    triggerEvent() {
        const myEvent = new Event('notification', {
            bubbles: true,
            cancelable: true,
            composed: true
        });
        // Fire the event
        window.dispatchEvent(myEvent);
    }


}
