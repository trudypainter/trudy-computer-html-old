let mouse = { x: -1, y: -1 };
let cursorOther = { x: -1, y: -1 };

if (window.matchMedia("(min-width: 768px)").matches) {

    $(document).mousemove(function(event) {


        let wW = $(window).innerWidth();
        let wH= $(window).innerHeight();

        mouse.x = event.pageX;
        mouse.y = event.pageY ;        

        cursorOther.x = wW - mouse.x;
        cursorOther.y = wH - mouse.y;

        $('.cursor--other').css({
            'transform': 'translate(' + cursorOther.x + 'px , ' + cursorOther.y + 'px)',
            'display': 'block'
        });

    });
    $('.projects__8').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/2.mp4');
    });
    $('.projects__9').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/3.mp4');
    });
    $('.projects__7').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/4.mp4');
    });
    $('.projects__6').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/5.mp4');
    });
    $('.projects__5').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/6.mp4');
    });
    $('.projects__3').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/7.mp4');
    });
    $('.projects__10').mouseenter(function(){
        $('.cursor--other').attr('src','images/7/cursor.png');
        $('.background-video').attr('src','images/7/1.mp4');
    });

}