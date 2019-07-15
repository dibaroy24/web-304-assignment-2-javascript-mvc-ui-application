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
    <label for="style-input">Bowling style: ${bowler.style}</label>
    <label for="bbi-input">Best bowling figures in an innings: ${bowler.bbi}</label>
    <label>
      <button id="bowler-bio" onclick="${comp.myBio()}">See My Bio</button>
      <button onclick="${comp.goBack()}">Back</button>
    </label>
  </article>`;
});
