/*
This is the Component code for displaying a single bowler which will handle
most of the data processing in the template and transfer any resources to the
template file.
*/
import { Component } from '../controllers/component.js';
import { BowlerService } from '../controllers/bowler-service.js';

export class BowlerSingleComponent extends Component {
  constructor(
    selector = 'bowler-single',
    service = BowlerService
  ) {
    super(selector, service);
  }

  getOneBowlerFromService(template) {
    this.service.getOneBowlerFromJSON(template);
  }

  editName() {
    return `
    document.getElementById('bowler-name').innerHTML = this.value`;
  }
}
