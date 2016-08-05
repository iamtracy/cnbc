$('#countdown').countdown({
date: '09/22/2016 09:00:00'
}, function () {
  alert('We\'re Live!');
});

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
  var theWindow = $(window).width();
  target = this.hash;
  event.preventDefault();
  var navOffset;
  if(theWindow > 420){
    navOffset = 90
  } else{
    navOffset = 126;
  } 
  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 650, function() {
    return window.history.pushState(null, null, target);
  });
});



$(window).scroll(function(){
  var navHeight = $('nav').height();
  var tMobile = $('.t-mobile-bar').height();
  var navTmobile = navHeight + tMobile;
  var bannerHeight = $('.banner').height();
  if ($(window).scrollTop() >= bannerHeight - navTmobile) {
    if ($(this).width() < 480) {
      $('#navReg').show()
    } else {
      $('#navReg').show(450, 'swing');
    }
    
  }else{
    if ($(window).width() < 480) {
      $('#navReg').hide()
    } else {
      $('#navReg').hide(450);
    }
  }
}); 