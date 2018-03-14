$(document).ready(function(){
    $('.next').on("click", function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        else{
            var nextImg = currentImg.parent().children(':first');
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on("click", function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
        else{
            var prevImg = currentImg.parent().children(':last');
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
    
    
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    

    slideShow();

    function slideShow(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        else{
            var nextImg = currentImg.parent().children(':first');
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        setTimeout(slideShow, 5000);
    };

    $('#text-content p:first').css({"color": "#051d44", "font-size": "20px", "font-weight": "bolder"});
    
    $('#work-hours table tr:even').css("background-color", "#89b6ff");
    $('#work-hours table tr:odd').css("background-color", "#e4ff93");

    $('#announ h3').before("<img src='images/ann.png' class='smallImg'>");
})