$('#countdown').countdown({
date: '09/22/2016 09:00:00'
}, function () {
  alert('We\'re Live!');
});

// (function($) {
//         $('.navbar').fadeOut(550);                        
//         $(window).scroll(function(){                          
//             if ($(this).scrollTop() > 10) {
//                 $('.navbar').fadeIn(750);
//             } else {
//                 $('.navbar').fadeOut(500);
//             }
//         });
//     })(jQuery);

jQuery(function(){
    var minimized_elements = $('p.minimize');
    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < 200) return;
        
        $(this).html(
            t.slice(0,200)+'<span>... </span><a href="#" class="more">More</a>'+
            '<span id="fix" style="display:none;">'+ t.slice(200,t.length)+' <a href="#" class="less">Less</a></span>'
        );
    }); 
    $('a.more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();        
    });
    $('a.less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();    
    });
});

$('[data-smooth="smooth"]').on('click', function(event) {
  var target;
  target = this.hash;
  event.preventDefault();
  var navOffset;
  navOffset = 90;
  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 650, function() {
    return window.history.pushState(null, null, target);
  });
});