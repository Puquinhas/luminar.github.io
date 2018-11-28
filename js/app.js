$('.main__header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

$('.mobile__btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile__menu').toggleClass('active');
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $('#back__top').fadeIn();
        } else {
            $('#back__top').fadeOut();
        }
    });
    $('#back__top').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

$('.experimento').click(function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
});