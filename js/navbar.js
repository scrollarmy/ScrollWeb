(function($) { 
    $(document).ready(function(){   //Navbar mistica con fadein        
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('.navbar').fadeIn(500);
            } else {
                $('.navbar').fadeOut(500);
            }
        });
    });
})(jQuery);

$(document).ready(function(){ //Menu responsive
    $('.hamburguesa').click(function(){
        $('.navbarcolapse').toggleClass("colapse")
    })
});

$(document).ready(function(){ //Cierre del menu responsive
    $('.navitem').click(function(){
        $('.navbarcolapse').toggleClass("colapse")
    })
});
