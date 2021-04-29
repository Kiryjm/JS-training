import $ from 'jquery';
import 'hoverintent';

// JQuery

$(function () {
    // adding class 'active' to the selected element on mouse hover
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    // adding eventListener on 3rd list element click 
    // which slowly hides all even images
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    // adding eventListener on 5th list element click 
    // which confirms custom animation to the all odd images
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});



