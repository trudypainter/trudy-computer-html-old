$(document).ready(function() {

    var origColor = $("a").css("color");

    $("a").mouseover(function() {
        $(this).css("color", getRandomColor());
    });

    $("a").mouseout(function() {
        $(this).css("color", origColor);
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})