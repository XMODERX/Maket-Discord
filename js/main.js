$(function () {
    var link = $('nav ul li .defult-button-inner');
    link.mouseover(function () {
        $('nav ul li:nth-of-type(1) span').addClass('middle-white-left-line');
    })
    link.mouseleave(function () { 
        $('nav ul li:nth-of-type(1) span').removeClass('middle-white-left-line');
    })
    link.click(function () {
        $('nav ul #defult-discord-button span').addClass('large-white-left-line');
    })
});
$(function () {
    $('nav ul li ').each(function () {
        if ($(this).attr('class') == 'delete') {
            link.click(function () {
                $('nav ul li:nth-of-type(1) span').addClass('middle-white-left-line');
            })
        }
    });
});
