$(function () {
    var link = $('nav ul li .defult-button-inner');
    var link = $('#defult-discord-button');
    link.mouseover(function () {
        $('nav ul li:nth-of-type(1) span').addClass('middle-white-left-line');
    })
    link.mouseleave(function () {
        $('nav ul li:nth-of-type(1) span').removeClass('middle-white-left-line');
    })
    link.click(function () {
        $('nav ul #defult-discord-button span').addClass('large-white-left-line');
        $('#defult-discord-button span').addClass('large-white-left-line');
    link.dblclick(function () {
        $('nav ul #defult-discord-button span').removeClass('large-white-left-line');
        $('#defult-discord-button span').removeClass('large-white-left-line');
    });})})