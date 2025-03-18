
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

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
  console.log(form.getName());
  console.log(form.getFeet());
  console.log(form.getInches());
  console.log(form.getWeight());
  console.log(form.getDiet());
});
