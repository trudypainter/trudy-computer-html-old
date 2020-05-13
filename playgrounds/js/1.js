$(document).on("mousemove", function(event) {

    $("img.one").css("width", event.pageX)
    $("img.one").css("height", event.pageY)

    $("img.two").css("width", $(window).width() - event.pageX)
    $("img.two").css("height", event.pageY)

    $("img.three").css("width", event.pageX)
    $("img.three").css("height", $(window).height() - event.pageY)

    $("img.four").css("width", $(window).width() - event.pageX)
    $("img.four").css("height",$(window).height() - event.pageY)
})