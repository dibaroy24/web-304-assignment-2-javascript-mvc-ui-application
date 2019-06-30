/*
A component is a controller which is used to control a portion of the view.

It holds properties and methods which are intended to be used in the
HTML or CSS which is associated with this portion of the view.
*/
import { AjaxService } from '../controllers/ajax-service.js';
/*
This class will have a selector property which will be used to select an HTML
element to display this component's data in and a service property which will be
used to store a service which relates to this component.
*/
const _SELECTOR = Symbol('selector');
const _SERVICE = Symbol('service');

export class Component {
  constructor(selector, service) {
    this.selector = selector;
    this.service = service;
  }
  /*
  This class will use getters and setters as well. The setter for the
  selector property will check to see if the value is a string. If yes, then it
  will use the value as the parameter in document.getElementById('id') to
  select an element with a matching ID.
  */
  set selector(value) {
    if (typeof value == 'string') {
      this[_SELECTOR] = document.getElementById(value);
    } else {
      console.error('The selector must be string!');
    }
  }

  get selector() {
    return this[_SELECTOR];
  }

  /*
  The setter for the service property will check to ensure that the
  dunder proto of the value is equal to the AjaxService class to ensure
  that the supplied service is child of the primary AJAX class.
  */
  set service(value) {
    if (value.__proto__ == AjaxService) {
      this[_SERVICE] = value;
    } else {
      console.error('The service must be a child of the AjaxService class!');
    }
  }

  get service() {
    return this[_SERVICE];
  }
}
