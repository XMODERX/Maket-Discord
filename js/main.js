$(function () {
    var link = $('#defult-discord-button');
    link.hover(
        (function () {
            $('nav ul li:nth-of-type(1) span').addClass('middle-white-left-line');
        }),
        (function () {
            $('nav ul li:nth-of-type(1) span').removeClass('middle-white-left-line');
        })
    );
});