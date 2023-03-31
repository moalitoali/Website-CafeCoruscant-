
/* Function for adding the section in the 'Character Generator' that describes the character */
export function addPersona(){
  let section_persona = document.createElement('section');
    section_persona.setAttribute('id', 'persona');
  
  let p1 = document.createElement('p');
    p1.setAttribute('id', 'character');
    p1.textContent = "Name: ";
  let p2 = document.createElement('p');
    p2.setAttribute('id', 'gender');
    p2.textContent = "Gender: ";

  section_persona.appendChild(p1);
  section_persona.appendChild(p2);

  return section_persona;
}

/* Function for adding the section in the 'Character Generator' that creates the drop down menu with the different films */
export function addDropDown(){
  let section_searcher = document.createElement('section');
    section_searcher.setAttribute('id', 'searcher');

  let label = document.createElement('label');
    label.setAttribute('for', 'film_choice');
    label.textContent = "Film: ";

  let select = document.createElement('select');
    select.setAttribute('name', 'film');
    select.setAttribute('id', 'film');

  let opt1 = document.createElement('option');
    opt1.setAttribute('value', 'all');
    opt1.textContent = "All";
  let opt2 = document.createElement('option');
    opt2.setAttribute('value', 'one');
    opt2.textContent = "The Phantom Menace";
  let opt3 = document.createElement('option');
    opt3.setAttribute('value', 'two');
    opt3.textContent = "Attack of the Clones";
  let opt4 = document.createElement('option');
    opt4.setAttribute('value', 'three');
    opt4.textContent = "Revenge of the Sith";
  let opt5 = document.createElement('option');
    opt5.setAttribute('value', 'four');
    opt5.textContent = "A New Hope";
  let opt6 = document.createElement('option');
    opt6.setAttribute('value', 'five');
    opt6.textContent = "The Empire Strikes Back";
  let opt7 = document.createElement('option');
    opt7.setAttribute('value', 'six');
    opt7.textContent = "Return of the Jedi";

  /* Put all elements in right order */
  section_searcher.appendChild(label);
  section_searcher.append(select);
  select.appendChild(opt1);
  select.appendChild(opt2);
  select.appendChild(opt3);
  select.appendChild(opt4);
  select.appendChild(opt5);
  select.appendChild(opt6);
  select.appendChild(opt7);
 
  return section_searcher;
}

/* Function for adding the section in the 'Character Generator' that creates the generator-button */
export function addButton(){
  let section_generator = document.createElement('section');
    section_generator.setAttribute('id', 'generator');
  let button = document.createElement('button');
    button.setAttribute('id', 'generate_button');
    button.textContent = "Generate Random Character";
  section_generator.appendChild(button);

  return section_generator;
}

/* Function for handling the click on the character-generator-button that fetches a random character from an external API */
export function click(){

  /* Declare Variables */
  let film = document.querySelector('#film').value;
  let name = "", gender = "", people = 0;

  /* Access elements in HTML */
  let placeholder_name = document.querySelector('p#character');
  let placeholder_gender = document.querySelector('p#gender');

  if(film == "all"){ // Generate random character from all films
    people = Math.floor(Math.random() * 81) + 1; // generate random number [1, 82] (83 = total # of characters in API)

    /* Catch error in API (character #17 is missing from API) */
    if(people == 17){
      people = 83; // put people as the last character in list instead
    }

    /* Fetch character data */
    fetch("https://swapi.dev/api/people/" + people)
      .then(response => response.json())
      .then(data => {
        name = data.name;
        gender = data.gender;
      })
      .then(() => {
        placeholder_name.innerHTML = "";
        placeholder_gender.innerHTML = "";

        placeholder_name.innerHTML = "Name: " + name;
        placeholder_gender.innerHTML = "Gender: " + gender;
      });

  } else if(film == "one"){ // Generate Random Character From Episode 1

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 4)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } else if(film == "two"){ // Generate Random Character From Episode 2

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 5)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } else if(film == "three"){ // Generate Random Character From Episode 3

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 6)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } else if(film == "four"){ // Generate Random Character From Episode 4

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 1)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } else if(film == "five"){ // Generate Random Character From Episode 5

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 2)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } else if(film == "six"){ // Generate Random Character From Episode 6

    /* Fetch chosen FILM */
    fetch("https://swapi.dev/api/films/" + 3)
      .then(response => response.json())
      .then(data => {
        people = Math.floor(Math.random() * data.characters.length);

        /* Fetch character data */
        fetch(data.characters[people]) 
        .then(response => response.json())
        .then(data => {
          name = data.name;
          gender = data.gender;
        })
        .then(() => {
          placeholder_name.innerHTML = "";
          placeholder_gender.innerHTML = "";

          placeholder_name.innerHTML = "Name: " + name;
          placeholder_gender.innerHTML = "Gender: " + gender;
        });

      });
 
  } // end of if-statement

} // end of function
