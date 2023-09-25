$(function(){
    $('#Top_btn').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },800);
    });

    $('.scroll_btn').click(function(){

        var id=$(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({
            'scrollTop':position
        },800);
    });
});
