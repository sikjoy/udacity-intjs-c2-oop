
    // Create Base Class
    class BaseTile {
      _title;
      _imageFile;
      _body;

      constructor(title, imageFile, body) {
        this._title = title;
        this._imageFile = imageFile;
        this._body = body;
      }

      // Create HTML for the Tile
      getElement() {
        const tile = document.createElement('div');
        tile.className = 'grid-item';
        tile.innerHTML = `<h3>${this._title}</h3>` +
          `<img src="${this._imageFile}">`;
        if (this._body) {
          tile.innerHTML += `<p>${this._body}</p>`;
        }
        return tile;
      }
    }

    // Create Dino Class
    class Dino extends BaseTile {
      _category;

      constructor(dinoObject) {
        // Array of possible fact categories.
        const keys = ['weight', 'height', 'diet', 'where', 'when', 'fact'];
        // Image files are named according to the species.
        const imgFile = 'images/' + dinoObject.species.toLowerCase() + '.png';
        // Pick a random fact unless it is a pigeon.
        const idx = dinoObject.species == 'Pigeon' ? 5 : Math.floor(Math.random() * 6);

        // Call the base class constructor.
        super(dinoObject.species, imgFile, dinoObject[keys[idx]]);

        // Save the fact category selected.
        this._category = keys[idx];
      }

      // Comparison Method
      compare(human) {
        let ratio;
        let result = true;
        switch (this._category) {
          case 'weight':
            // Create Dino Compare Method 1
            // NOTE: Weight in JSON file is in lbs, height in inches. 
            ratio = Math.round(10.0 * this._body / Number(human.getWeight())) / 10.0;
            this._body = `Weight: ${this._body} lbs, ${ratio} x ${human.getName()}`;
            break;
          case 'height':
            // Create Dino Compare Method 2
            // NOTE: Weight in JSON file is in lbs, height in inches.
            ratio = Math.round(10.0 * this._body / (Number(human.getFeet()) * 12 + Number(human.getInches()))) / 10.0;
            this._body = `Height: ${this._body} inches, ${ratio} x ${human.getName()}`;
            break;
          case 'diet':
            // Create Dino Compare Method 3
            // NOTE: Weight in JSON file is in lbs, height in inches.
            this._body = `Diet: ${this._body}, ${human.getName()}: ${human.getDiet().toLowerCase()}`;
            break;
          default:
            // Do Nothing
            result = false;
        }

        return result;
      }
    }

    // Create Human Class
    class Human extends BaseTile {
      constructor(name) {
        super(name, 'images/human.png', null);
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

    // Use IIFE to get human data from form
    const humanData = (() => {
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

// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
  // Remove form from screen
  const formElement = document.getElementById('dino-compare');
  formElement.style.display = 'none';

  const grid = document.getElementById('grid');
  // Add Grid Items
  for (let i = 0; i < 9; i++) {
    let tile;
    if (i == 4) {
      // Generate the Human Tile
      tile = new Human(humanData.getName());
    } else {
      const k = i > 4 ? i - 1 : i;
      // Generate Tiles for each Dino in Array
      tile = new Dino(dinos[k]);
      tile.compare(humanData);
    }
    // Add Tiles to DOM
    grid.appendChild(tile.getElement());
  }
});
