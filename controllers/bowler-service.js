// Import the AjaxService class and the Bowler Model class into the file.
import { AjaxService } from '../controllers/ajax-service.js';
import { Bowler } from '../models/bowler.js';

/*
Now, we will export a class called BowlerService which will hold method which
will be used to fetch data from the JSON file and process it.
*/
export class BowlerService extends AjaxService {
  /*
  We will add a new static method called getAllBowlersFromJSON() to the class
  which will be used to collect all of the bowlers from the JSON file,
  cross-check them using the Model to ensure that every object in the
  JSON file matches the expected data types and export the bowlers to the
  component.

  This method will also have a parameter called insertedCode which will be
  used to insert the code for our HTML template into the AJAX call eventually.
  */
  static getAllBowlersFromJSON(insertedCode) {
    /*
    Inside of this method we will create an empty array that we will
    populate with the data from the JSON file.
    */
    let bowlers = [];
    /*
    We will then access the static ajax() method using the BowlerService class
    name to call the AJAX code.
    */
    BowlerService.ajax('bowler-data.json', function (response) {
      /*
      Inside of this function we will parse the response using the preset
      JSON.parse() method with the response as the parameter.
      */
      let bowlerData = JSON.parse(response);
      /*
      This will give us an array of objects which contains our JSON data.

      We will loop through this array using a for of loop and use the
      properties of each object to define the properties of a new instance
      of the Bowler class, each of which we will then add to the empty
      bowlers array.
      */
      for (let bowler of bowlerData) {
        let bowlerProps = [bowler.id, bowler.name, bowler.image, bowler.style, bowler.bbi];

        bowlers[bowlers.length] = new Bowler(...bowlerProps);
      }
      /*
      This allows us to run the data in the JSON file through the getter
      and setter methods of the Bowler class and check to ensure that the
      structure of the data and the data types match the requirements of
      our Model.

      We will then call the insertedCode() parameter as a function so
      that we can insert our template code in the AJAX call and pass the
      ducks variable as a parameter so that we have access to it
      in the component.
      */
      insertedCode(bowlers);
    });
  }

  /*
  Finally we will create a static getOneBowlerFromJSON() method which we will
  use to get a single specific duck from the JSON file which will have an
  insertedCode parameter as well.
  */
  static getOneBowlerFromJSON(insertedCode) {
    /*
    Inside of this method we will access the static getAllBowlersFromJSON()
    method using the BowlerService class to call the data from the JSON file,
    collect all of the bowlers and crosscheck their data against the model.
    */
    BowlerService.getAllBowlersFromJSON(function (bowlers) {
      for (let bowler of bowlers) {
        /*
        Inside of the loop we will save the ID of the current bowler the
        user is interacting with as a variable by collecting it from the URL
        using the preset window.location.search property.

        This property is used to collect data sent to the URL in query
        string format <"?key=value&next_key=value">. The window.location.search
        property collects all of the data that comes after the question mark in
        the URL.

        We want to check what the value of the id key is. To do this, we will
        apply the substr() method and set the parameter to 4. This will skip
        the first 4 characters and only retreive the value of the ID.
        */
        let currentBowler = window.location.search.substr(4);
        /*
        Once we have the value of the ID, we will check to see it is equal
        to the ID of the duck using the bowler.id property. If yes, then we will
        call the insertedCode() parameter as a function and pass the bowler to the
        component.
        */
        if (currentBowler == bowler.id) {
          insertedCode(bowler);
        }
      }
    });
  }
}
