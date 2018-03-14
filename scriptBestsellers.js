$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'bestselling.json',
        success: function(data){
            var content = "";
            for(var i=0; i<data.length;i++){
                content += '<div class="best"><div class="bookImg"><a data-fancybox="gallery" href="' + data[i].img + '"><img src="' + data[i].img + '" alt="' + data[i].name + '"></a></div><div class="bookDesc"><h2>' + data[i].id + '. ' +  data[i].name + ' (' + data[i].author + ')</h2><p class="desc">"' + data[i].description + '"</p></div></div>';
            }
            
        $('#bestBooks').html(content);
            
        $('.best').css({"height": "450px", "width": "98%", "padding": "10px", "border-bottom": "1px dotted #10bbd5"});
        $('.bookImg').css({"display": "inline-block", "width": "25%", "height": "400px", "float": "left"});
        $('.bookImg img').css({"height": "400px", "width": "100%"});
        $('.bookDesc').css({"width": "70%", "height": "400px", "float": "right", "display": "inline-block", "margin-left": "10px", "margin-top": "20px", "padding": "10px"});
        $('.bookDesc p').css({"color": "#aaa", "width": "100%"});
        $('.bookDesc h2').css({"color": "#10bbd5", "text-align": "center", "margin-bottom": "15px"});
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
    
});