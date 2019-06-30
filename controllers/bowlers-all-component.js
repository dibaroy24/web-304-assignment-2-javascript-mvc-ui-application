/*
Create a new component class which will be used to pass data about all of our
bowlers to the view.
*/
import { Component } from '../controllers/component.js';
import { BowlerService } from '../controllers/bowler-service.js';

export class BowlersAllComponent extends Component {
  /*
  This class will have a constuctor method with a parameter called
  selector which will define the HTML id which the component will alter and a
  parameter called service which will store the BowlerService class, giving us
  access to all of the services defined in it through our parent component.
  */
  constructor(
    selector = 'bowlers-all',
    service = BowlerService
  ) {
    /*
    These parameters will be used inside of the constructor() method as
    parameters of the super() function to define the properties of
    the parent class.
    */
    super(selector, service);
  }
  /*
  We will create another method called getAllBowlersFromService() which will
  be used to get all of the bowlers using the service property and the
  getOneBowlerFromJSON method.
  */
  getAllBowlersFromService(template) {
    this.service.getAllBowlersFromJSON(template);
  }
}
