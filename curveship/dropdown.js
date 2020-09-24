var SourceUrl = "www.trudy.computer/curveship/story.html?";

var appendedUrl = ""
var narratorUrl = "";
var narrateeUrl = "";
var orderUrl = "";
$(function() {
    //For showing default url  
    MakeUrl();

    $('#narratorSelect').on('change', function() {
        if ($(this).val() == 0) {
            narratorUrl = "";
        } else {
            narratorUrl = $(this).val();
        }
        MakeUrl();
        return false;
    });

    $('#narrateeSelect').on('change', function() {
        if ($(this).val() == 0) {
            narrateeUrl = "";
        } else {
            narrateeUrl = $(this).val();
        }
        MakeUrl();
        return false;
    });

    $('#orderSelect').on('change', function() {
        if ($(this).val() == 0) {
            orderUrl = orderUrl - $(this).val();
        } else {
            orderUrl = $(this).val();
        }
        MakeUrl();
        return false;
    });

});

function MakeUrl() {

    var appendedUrl = (narratorUrl + narrateeUrl + orderUrl).substring(1);
    var finalUrl = SourceUrl + appendedUrl;

    $('#urlBox').val(finalUrl);
    $('#MyLink').attr('href', finalUrl);
}