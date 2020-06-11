window.onload = function(){
    /* goal is to populate canvas with 200 pixels. 
    each pixel should have a height and width of 8px and
    1 px solid black border, and should be a 'span' tag.

    What's an easy to way to do the same thing multiple times?
    For loop!

    Let's loop 400 times. 
    Each time we are going to:
    Create a new span element.

    Define the CSS of our new span element. 
    Append the new span element to our 'canvas'
    */

for (let i =0; i <400; i++) {
    //Create a new span element.
    let pixel = document.createElement
    ('span')

    // Define the CSS of our new span element.
    pixel.style.height = '8px';
    pixel.style.width = '8px';
    pixel.style.border = '1px solid black';

    // Append the new span element to our 'canvas'
    let canvas = document.querySelector('#canvas');
    canvas.appendChild(pixel);
}
let canvasPixels = document.querySelectorAll('span');


let currentColor ='pink';

for (let pixel of canvasPixels) {
    pixel.addEventListener('click', function() {
    //instead of having all our pixels turn red, we can search for 
    // what the color of 'selected; is now and change our pixel's background
    // color to whatever that is.
        let selected = document.querySelector ('#selected');
        pixel.style.backgroundColor = currentColor;
    });
    }

    // To create a new color pallet, we are going to push 
    // into a new div containing each color to our 'pallet' div 
    // We'll then add a click event listener to each div in our pallet
    // that will modify what color our canvasPixels will turn.

let colorChoices = ['red', 'orange', 'yellow', 'green','blue',
'purple','pink','black','white'];

for (let color of colorChoices) {
    // Create the div
    let newColor = document.createElement('div');

    // CSS
    newColor.style.height = '50px';
    newColor.style.width = '50px';
    newColor.style.backgroundColor = color;

    //add an event listener to our color
    // How can we know what color is selected?
    // I'll add a 'selected' div to display what color is currently selected

    newColor.addEventListener('click', function () {
    // whenever a color on pallet is clicked, it'll change
    // currentColor variable to its color
    // and also change the bg color of 'selected' div.
    currentColor = color;
    let selected = document.querySelector('#selected');
    selected.style.backgroundColor = color;
    });

    // append it to the pallet
    let pallet = document.querySelector('#pallet')
    pallet.appendChild(newColor);
    }

};
