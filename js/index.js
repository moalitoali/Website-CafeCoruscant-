/* Meddelande till rättande person: Jag har fått godkänt av Martin Goblirsch att det är okej att mitt API inte är mat-relaterat */

import { click, addButton, addDropDown, addPersona } from './utils.js';

/* Add 'Character Generator'-elements in HTML */
let section_generator = addButton();
let section_searcher = addDropDown();
let section_persona = addPersona();

let widget = document.querySelector('#widget');
widget.appendChild(section_searcher);
widget.appendChild(section_generator);
widget.appendChild(section_persona);


/* Make button into a 'Character Generator' with functionalities */
let generate_button = document.querySelector('#generate_button');
generate_button.addEventListener('click', click);