$(document).ready(function () {


    let $btns = $('.portafolio .button-group button');


    $btns.click(function (e) {

        $('.portafolio .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portafolio .grid').isotope({
            filter: selector
        });

        return false;
    })
});