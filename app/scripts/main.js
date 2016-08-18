  $('#countdown').countdown({
  date: '09/22/2016 09:00:00'
  }, function () {
    alert('We\'re Live!');
  });
  var card = $('.card-block');
  card.each(function(){    
    var t = $(this).height();
      if (t > 200) {
        card.addClass('card-max');
    }
  }).click(function (e) {
      e.preventDefault();
      $(this).toggleClass("card-max");
      $(this).find('i').toggleClass('fa-minus-square-o fa-plus-square-o');
    });; 
  $('[data-smooth="smooth"]').on('click', function(event) {
    var target;
    var theWindow = $(window).width();
    target = this.hash;
    event.preventDefault();
    var navOffset;
    if(theWindow > 420){
      navOffset = 90
    }else{
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
    var navRegButton = $('#RegLinkNav');
    var fixedLogo = $('#fixedLogo');
    var fixedLogoNav = $('#fixedLogoNav'); 

    if ($(window).scrollTop() >= bannerHeight - navTmobile) {
        if ($(this).width() < 480) {
          navRegButton.show();
          fixedLogoNav.show();
        } else {
          navRegButton.show(450, 'swing');
          fixedLogo.show(450, 'swing');
        } 
      }
    else{
        if ($(window).width() < 480) {
          navRegButton.hide();
          fixedLogo.hide();
        } else {
          navRegButton.hide(450);
        }
    }
  }); 