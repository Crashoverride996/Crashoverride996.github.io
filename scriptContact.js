window.onload = function(){
    
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
    
    var login = document.getElementById("login");
    login.addEventListener("click", function(){
       var username = /^[a-zA-Z0-9\.-]+(@gmail\.com|@yahoo.com)$/;
        var userEntry = document.getElementById("username1").value;
        if(username.test(userEntry)){                                       document.getElementById("error1").innerHTML = "";
        }
        else{
            document.getElementById("error1").innerHTML = "";
            document.getElementById("error1").innerHTML += "<em>Email is in wrong format</em";
        } 
        
        var password = /^[a-zA-Z0-9\.-]{5,20}/;
        var passEntry = document.getElementById("password1").value;
        if(password.test(passEntry)){
            document.getElementById("error2").innerHTML = "";
        }
        else{
            document.getElementById("error2").innerHTML = "";
            document.getElementById("error2").innerHTML += "<em>Password is in wrong format</em";
        }        
    });
    
    var register = document.getElementById("register");
    register.addEventListener("click", function(){
        var username = /^[a-zA-Z0-9\.-]+(@gmail\.com|@yahoo.com)$/;
        var userEntry = document.getElementById("username2").value;
        if(username.test(userEntry)){                                       document.getElementById("error3").innerHTML = "";
        }
        else{
            document.getElementById("error3").innerHTML = "";
            document.getElementById("error3").innerHTML += "<em>Email is in wrong format</em";
        } 
        
        var name = /^[A-Z][a-z]{2,12}/;
        var nameEntry = document.getElementById("custName").value;
        if(name.test(nameEntry)){
            document.getElementById("error4").innerHTML = "";
        }
        else{
            document.getElementById("error4").innerHTML = "";
            document.getElementById("error4").innerHTML += "<em>Name is in wrong format</em";
        }
        
        var password = /^[a-zA-Z0-9\.-]{5,20}/;
        var passEntry = document.getElementById("password2").value;
        if(password.test(passEntry)){
            document.getElementById("error5").innerHTML = "";
        }
        else{
            document.getElementById("error5").innerHTML = "";
            document.getElementById("error5").innerHTML += "<em>Password is in wrong format</em";
        } 
        
        var passwordV = /^[a-zA-Z0-9\.-]{5,20}/;
        var passVEntry = document.getElementById("password3").value;
        if(passwordV.test(passVEntry) && passVEntry == passEntry){
            document.getElementById("error6").innerHTML = "";
        }
        else{
            document.getElementById("error6").innerHTML = "";
            document.getElementById("error6").innerHTML += "<em>Passwords do not match</em";
        }
        
    });
}