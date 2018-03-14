var books = [
    {
        "name": "Master and Margarite",
        "img": "images/MasterAndMargarite.jpg",
        "author": "Mikhail Bulgakov",
        "oldprice": 27,
        "newprice": 19.99
    },
    {
        "name": "Savages",
        "img": "images/Savages.jpg",
        "author": "Don Winslow",
        "oldprice": 17.99,
        "newprice": 14.49
    },
    {
        "name": "Animal Farm",
        "img": "images/AnimalFarm.jpg",
        "author": "George Orwell",
        "oldprice": 14.49,
        "newprice": 11.49
    },
    {
        "name": "Cat's Cradle",
        "img": "images/CatsCradle.jpg",
        "author": "Kurt Vonnegut",
        "oldprice": 23,
        "newprice": 17.99
    },
    {
        "name": "Green Mile",
        "img": "images/GreenMile.jpg",
        "author": "Stephen King",
        "oldprice": 24,
        "newprice": 20.49
    },
    {
        "name": "Hitchhiker's Guide to the Galaxy",
        "img": "images/TheHitchhikersGuide.jpg",
        "author": "Douglas Adams",
        "oldprice": 29.99,
        "newprice": 25.99
    },
    {
        "name": "The Last Wish",
        "img": "images/TheLastWish.jpg",
        "author": "Andrzej Sapkowski",
        "oldprice": 21,
        "newprice": 19.99
    },
    {
        "name": "The Night Watch",
        "img": "images/TheNightWatch.jpg",
        "author": "Sergei Lukyanenko",
        "oldprice": 15.49,
        "newprice": 12.99
    },
    {
        "name": "The Gunslinger",
        "img": "images/TheGunslinger.jpg",
        "author": "Stephen King",
        "oldprice": 17,
        "newprice": 14.49
    }
];

$(document).ready(function(){
    var content = "";
    for(var i=0; i<books.length; i++){
        content += '<div class="book"><h3>' + books[i].name + '</h3><a data-fancybox="gallery" href=' + books[i].img + '><img src="' + books[i].img + '" alt="' + books[i].name + '"/></a><p class="firstP">' + books[i].name + '</p><p class="secondP">' + books[i].author + '</p><p class="thirdP">' + books[i].newprice + ' $</p><p class="fourthP">' + books[i].oldprice + ' $</p><button type="button" class="add">Add to basket</button></div>';
    }
    
    $('#books').html(content);
    
    $('.firstP').css("font-weight", "bolder");
    $('.secondP').css("color", "#aaa");
    $('.thirdP').css("color", "#f03");
    $('.fourthP').css("text-decoration", "line-through");
    
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