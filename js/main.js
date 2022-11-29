$(function () {
    var link = $('#defult-discord-button');
    link.mouseover(function () {
        $('nav ul li:nth-of-type(1) span').addClass('middle-white-left-line');
    })
    link.mouseleave(function () {
        $('nav ul li:nth-of-type(1) span').removeClass('middle-white-left-line');
    })
    link.click(function () {
        $('#defult-discord-button span').addClass('large-white-left-line');
    })
    $(function () {
        del.click(function () {
            if ($("nav ul li").hasClass("large-white-left-line")) {
                $('nav ul #defult-discord-button span').removeClass('large-white-left-line');
            }
        });
    })
});