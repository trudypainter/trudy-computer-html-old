var safecolors = ['00', '33', '66', '99', 'cc', 'ff'];

var rand = function() {
    return Math.floor(Math.random()*6)
};

var randomcolor = function() { 
    var r = safecolors[rand()];
    var g = safecolors[rand()];
    var b = safecolors[rand()];
    return "#"+r+g+b
};

$(document).ready(function(){
  
      $(this).css("background-color", randomcolor());
});