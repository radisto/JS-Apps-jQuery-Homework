$(function(){
    var width = 800;
    var animationSpeed = 1200;
    var pause = 3500;
    var currentSlide;
    var $ul = $('#wrapper ul');
    var $lis = $('#wrapper li');

    setInterval(function(){slide(true)}, pause);

    function slide(bool){
        $ul.animate({'margin-left': (bool ? '-=' : '+=') + width}, animationSpeed, function(){
            currentSlide = parseInt($ul.css('margin-left'))/width*-1;
            if(currentSlide <= 0){
                $ul.css('margin-left', '-' + ($lis.length - 1) * width + 'px');
            }
            if(currentSlide >= $lis.length - 1){
                $ul.css('margin-left', 0);
            }
        });
    }

    $('#left').on('click', function(){slide(false)});
    $('#right').on('click', function(){slide(true)});
});