/********************
 * Materials
 ********************/

// An array of words referring to objects
var objects = [
    "apple ",
    "orange ",
    "lemon ",
    "pear ",
    "coconut ",
    "grapes "
  ];
  var emojis = [
    "🍎",
    "🍊",
    "🍋",
    "🍐",
    "🥥",
    "🍇"
  ];
  
  // An array of words referring to scenes
  var scenes = [
    "in red",
    "in orange",
    "in yellow",
    "in green",
    "in blue",
    "in purple"
  ];
  var scenepics = [
    "palevioletred",
    "darkorange",
    "palegoldenrod",
    "palegreen",
    "lightblue",
    "blueviolet"
  ];
  
  // An array of colors
  var colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "magenta"
  ];
  
  // Get HTML elements so that we can edit them later
  var firstWordElement = document.querySelector("span.first-word");
  var secondWordElement = document.querySelector("span.second-word");
  var thridWordElement = document.querySelector("span.third-word");
  var body = document.querySelector("html");

  /*********************************************
   * Screensaver Logic
   *********************************************/
  
  var currentIndex1 = 0;
  var currentIndex2 = 0;
  
  function change() {
  
    // get a random index for objects
    var newIndex1 = getRandomInt( objects.length );
    while (newIndex1 == currentIndex1) {
      newIndex1 = getRandomInt( objects.length );
    }
    currentIndex1 = newIndex1;
  
    // get a random index for scenes
    var newIndex2 = getRandomInt( scenes.length );
    while (newIndex2 == currentIndex2) {
      newIndex2 = getRandomInt( scenes.length );
    }
    currentIndex2 = newIndex2;
  
  
    // get first word and corresponding color
    var object = objects[newIndex1];
    var color = colors[newIndex1];
    var emoji = emojis[newIndex1];
  
    // change the HTML for the first word
    firstWordElement.innerHTML = object;
    firstWordElement.style["color"] = color;
    thridWordElement.innerHTML = emoji;

    // get scene word
    var scene = scenes[newIndex2];
    var scenepic = scenepics[newIndex2];
  
    // change the HTML for word 2
    secondWordElement.innerHTML = scene;
    body.style["background-color"] = scenepic;
  
    // schedule the next call to change() in 2 seconds
    // because this part is inside change() itself, it'll continue infinitely after you call change() for the first time
    setTimeout(change, 2000);
  }  
  setTimeout(change, 2000); // call the function change every 2 seconds
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }