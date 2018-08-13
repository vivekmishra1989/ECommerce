import { Element, track } from "engine";

export default class helloworldextended extends Element {
    // your properties and methods here
  @track count = 0;
  constructor() {
      super();
      window.addEventListener('notification', this.handleNotification.bind(this));
  }

  get computedclass() {

    return this.count > 0 ? '' : 'slds-hide';
  }

  handleNotification() {
      this.count += 1;
  }
}
