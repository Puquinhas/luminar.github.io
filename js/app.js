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