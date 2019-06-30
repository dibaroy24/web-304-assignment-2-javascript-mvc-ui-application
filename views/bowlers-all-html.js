/*
We will create a JavaScript file which will act as an HTML template which
will display all of the ducks in the view.
*/
import { BowlersAllComponent } from '../controllers/bowlers-all-component.js';
/*
We will create a new instance of the BowlersAllComponent class as a constant
called comp.
*/
const comp = new BowlersAllComponent();
/*
We will then call the getAllBowlersFromService() method. This method
takes an anonymous function and passes the bowlers into the function.
*/
comp.getAllBowlersFromService(function (bowlers) {
  for (let bowler of bowlers) {
    comp.selector.innerHTML += `
    <a href="?id=${bowler.id}" class="bowler">
      <h2>${bowler.name}</h2>
    </a>`;
  }
});
