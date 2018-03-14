$(document).ready(function(){
    
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
    
    var datas = "";
    $.ajax({
        type: 'GET',
        url: 'books.json',
        success: function(data){
            var allBooks = preview(data);
            $('#bookShop').html(allBooks);
            $('.firstP').css("font-weight", "bolder");
            $('.secondP').css("color", "#aaa");
            $('.thirdP').css("color", "#f03");  
            $('.oneBook').css("margin-bottom", "30px");
            $('.oneBook h3').css({"color": "#10bbd5", "text-align": "center"});
            
            $('#orderByName').click(function(){
                var books = data;
                books.sort(function(bookA, bookB){
                    if(bookA.name > bookB.name) return 1;
                    else if(bookA.name < bookB.name) return -1;
                    else return 0;
                });  
                var display = preview(books);
                var display = preview(books);
                $('#bookShop').html(display);
                $('.firstP').css("font-weight", "bolder");
                $('.secondP').css("color", "#aaa");
                $('.thirdP').css("color", "#f03");  
                $('.oneBook').css("margin-bottom", "30px");
                $('.oneBook h3').css({"color": "#10bbd5", "text-align": "center"});
            });
            
            $('#orderByPriceA').click(function(){
                var books = data;
                books.sort(function(bookA, bookB){            
                    if(bookA.price > bookB.price) return 1;
                    else if(bookA.price < bookB.price) return -1;
                    else return 0;
                });
                var display = preview(books);
                $('#bookShop').html(display);
                $('.firstP').css("font-weight", "bolder");
                $('.secondP').css("color", "#aaa");
                $('.thirdP').css("color", "#f03");  
                $('.oneBook').css("margin-bottom", "30px");
                $('.oneBook h3').css({"color": "#10bbd5", "text-align": "center"});
            });
            
            $('#orderByPriceD').click(function(){
                var books = data;
                books.sort(function(bookA, bookB){            
                    if(bookA.price < bookB.price) return 1;
                    else if(bookA.price > bookB.price) return -1;
                    else return 0;
                });
                var display = preview(books);
                $('#bookShop').html(display);
                $('.firstP').css("font-weight", "bolder");
                $('.secondP').css("color", "#aaa");
                $('.thirdP').css("color", "#f03");  
                $('.oneBook').css("margin-bottom", "30px");
                $('.oneBook h3').css({"color": "#10bbd5", "text-align": "center"});
            });
            
            $('#searchByName').click(function(){
                var books = data;
                var cont = "";
                var bookEntered = $('#searchBook').val();
                bookEntered = String(bookEntered);
                for(var i=0; i<books.length;i++){
                    if(bookEntered == books[i].name){
                        cont += '<div class="oneBook"><h3>' + data[i].name + '</h3><a data-fancybox="gallery" href=' + data[i].img + '><img src="' + data[i].img + '" alt="' + data[i].name + '"/></a><p class="firstP">' + data[i].name + '</p><p class="secondP">' + data[i].author + '</p><p class="thirdP">' + data[i].price + ' $</p><button type="button" class="add">Add to basket</button></div>';
                        $('#bookShop').html(cont);
                    }
                }
                $('.firstP').css("font-weight", "bolder");
                $('.secondP').css("color", "#aaa");
                $('.thirdP').css("color", "#f03");  
                $('.oneBook').css("margin-bottom", "30px");
                $('.oneBook h3').css({"color": "#10bbd5", "text-align": "center"});
                
            });
            
        }
    });
    

    
    $('#orderByPriceB').click(function(){
        
    });
    
    function preview(data){
        var content = "";
        for(var i=0; i<data.length; i++){
            console.log(data.length);
            content += '<div class="oneBook"><h3>' + data[i].name + '</h3><a data-fancybox="gallery" href=' + data[i].img + '><img src="' + data[i].img + '" alt="' + data[i].name + '"/></a><p class="firstP">' + data[i].name + '</p><p class="secondP">' + data[i].author + '</p><p class="thirdP">' + data[i].price + ' $</p><button type="button" class="add">Add to basket</button></div>';
        } 
        return content;
    }   
});