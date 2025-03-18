
    // Create Dino Constructor
    class BaseTile {
      #title;
      #imageFile;
      #body;

      constructor(title, imageFile, body) {
        this.#title = title;
        this.#imageFile = imageFile;
        this.#body = body;
      }

      getElement() {
        const tile = document.createElement('div');
        tile.className = 'grid-item';
        tile.innerHTML = `<h3>${this.#title}</h3>` +
          `<img src="${this.#imageFile}">`;
        if (this.#body) {
          tile.innerHTML += `<p>${this.#body}</p>`;
        }
        return tile;
      }
    }

    class Dino extends BaseTile {
      constructor(dinoObject) {
        const keys = ['weight', 'height', 'diet', 'where', 'when', 'fact'];
        const imgFile = 'images/' + dinoObject.species.toLowerCase() + '.png';
        const idx = Math.floor(Math.random() * 6);

        let fact;
        if (dinoObject.species == 'Pigeon') {
          fact = dinoObject.fact;
        } else {
          fact = dinoObject[keys[idx]];
        }

        super(dinoObject.species, imgFile, fact);
      }
    }


    // Create Dino Objects
    // Due to CORS error, JSON can no longer be read from a local file.
    // Consequently, the dino.json file content has been copied here.
    const dinos = [
      {
          "species": "Triceratops",
          "weight": 13000,
          "height": 114,
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "First discovered in 1889 by Othniel Charles Marsh"
      },
      {
          "species": "Tyrannosaurus Rex",
          "weight": 11905,
          "height": 144,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "The largest known skull measures in at 5 feet long."
      },
      {
          "species": "Anklyosaurus",
          "weight": 10500,
          "height": 55,
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Anklyosaurus survived for approximately 135 million years."
      },
      {
          "species": "Brachiosaurus",
          "weight": 70000,
          "height": "372",
          "diet": "herbavor",
          "where": "North America",
          "when": "Late Jurasic",
          "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
      },
      {
          "species": "Stegosaurus",
          "weight": 11600,
          "height": 79,
          "diet": "herbavor",
          "where": "North America, Europe, Asia",
          "when": "Late Jurasic to Early Cretaceous",
          "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
      },
      {
          "species": "Elasmosaurus",
          "weight": 16000,
          "height": 59,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
      },
      {
          "species": "Pteranodon",
          "weight": 44,
          "height": 20,
          "diet": "carnivor",
          "where": "North America",
          "when": "Late Cretaceous",
          "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
      },
      {
          "species": "Pigeon",
          "weight": 0.5,
          "height": 9,
          "diet": "herbavor",
          "where": "World Wide",
          "when": "Holocene",
          "fact": "All birds are living dinosaurs."
      }
    ];
    console.log(dinos);

    // Create Human Object
    class Human extends BaseTile {
      constructor(name) {
        super(name, 'images/human.png', null);
      }
    }

    // Use IIFE to get human data from form
    const form = (() => {
      const nameElement = document.getElementById('name');
      const feetElement = document.getElementById('feet');
      const inchesElement = document.getElementById('inches');
      const weightElement = document.getElementById('weight');
      const dietElement = document.getElementById('diet');

      const getName = () => {
        return nameElement.value;
      };

      const getFeet = () => {
        return feetElement.value;
      };

      const getInches = () => {
        return inchesElement.value;
      };

      const getWeight = () => {
        return weightElement.value;
      };

      const getDiet = () => {
        return dietElement.value;
      };

      return {
        getName: getName,
        getFeet: getFeet,
        getInches: getInches,
        getWeight: getWeight,
        getDiet: getDiet,
      };
    })();


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
  // DEBUG
  console.log(form.getName());
  console.log(form.getFeet());
  console.log(form.getInches());
  console.log(form.getWeight());
  console.log(form.getDiet());

  // hide the form element
  const formElement = document.getElementById('dino-compare');
  formElement.style.display = 'none';

  const grid = document.getElementById('grid');
  // add grid items
  for (let i = 0; i < 9; i++) {
    let tile;
    if (i == 4) {
      tile = new Human(form.getName());
    } else {
      const k = i > 4 ? i - 1 : i;
      tile = new Dino(dinos[k]);
    }
    grid.appendChild(tile.getElement());
  }
});
