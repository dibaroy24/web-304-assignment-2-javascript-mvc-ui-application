/*
This is HTML template code to display a single bowler which contains little data
processing and is focused on HTML.

Please note if you need a lot of data processing then you should move it into a
method in the Component.
*/
import { BowlerSingleComponent } from '../controllers/bowler-single-component.js';

const comp = new BowlerSingleComponent();

comp.getOneBowlerFromService(function (bowler) {
  comp.selector.innerHTML = `
  <article class="bowler">
    <h1>
      <span id="bowler-name">${bowler.name}</span> Details
    </h1>

    <img src="assets/img/${bowler.image}" alt="${bowler.name}">

    <label for="name-input">Name:</label>
    <input type="text" id="name-input" value="${bowler.name}"
      oninput="${comp.editName()}"
    >
    <label for="fast-input">Is he a fast bowler?:
      <!-- <button class="yes">Yes</button> -->
      <button onclick="${comp.isFast()}" id="demo">Yes</button>
      <!-- <button class="no">No</button> -->
      <button onclick="${comp.isNotFast()}">No</button>
    </label>

    <button onclick="${comp.goBack()}">Back</button>
  </article>`;
});
