$(document).ready(function() {

$('span').hover(function(){
    $(this).attr('data-content','bar');
});


/*  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname

    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

//On this part of the jQuery code, we’re creating a click event handler to all the links
//that have “#” symbol anywhere in the href. The very next line, we will check if the link
//is pointing to the same page by checking for a match between location.pathname. We can
//then make sure that the link includes a qualified URL or just an identifier.


    $(this).click(function() {
    $("#nav li a").removeClass("active");
      $(this).addClass('active');
        $('html, body').animate({scrollTop: targetOffset}, 100);
          return false;
    });
    }
    }});*/

$(".email").hover(function(){
    $("#slide4").css({"background-color": "orange"});
  }, function(){
    $("#slide4").css({"background-color": "white"});
  });

$(".email").hover(function(){
  $("ul li a").css({"color": "white"});
}, function(){
  $("ul li a").css({"color": "black"});
});

/*$(".email").hover(function(){
  $("#footer").css({"background-color": "white"});
});
*/
/*$(".email").hover(function(){
  $("i").css({"color": "orange"});
});*/

$(".nepal").hover(function(){
    $("#slide2").css('background-image', "url('images/nepal.JPG')");
  }, function(){
    $("#slide2").css({"background-color": "white"});
  });

$(".bk").hover(function(){
    $("#slide2").css('background-image', "url('images/big.jpg')");
  }, function(){
    $("#slide2").css({"background-color": "white"});
  });

});

//this part, when the user clicks the menu link, it will remove the class active on that
//current active menu link and add it to that menu link that the user has clicked. This
//will also scroll to the target div id section.

