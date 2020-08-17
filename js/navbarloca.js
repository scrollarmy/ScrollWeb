(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('#cabeza').fadeIn(500);
            } else {
                $('#cabeza').fadeOut(500);
            }
        });
    });
})(jQuery);