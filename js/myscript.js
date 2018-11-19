// Slideshow
$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');

  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

//Activate Scrollspy
$('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
});

// add inbody class
var hash = $(this).find('li.active a').attr('href');
if(hash !== '#home') {
  $('header nav').addClass('inbody');
} else {
    $('header nav').removeClass('inbody');
}

/* Add an inbody class to nav when scrollspy event fires
$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#home') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }
});*/


//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


//Automatically generate carousel indicators
      for (var i=0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
        if (i === randSlide) {
          insertText += ' class="active" ';
        }
        insertText += '></li>';
        $('#featured ol').append(insertText);
      }

});


// lightBoxGallery
    $(document).ready(function() {

       /* activate the carousel */
       $("#modal-carousel").carousel({interval:false});

       /* change modal title when slide changes */
       $("#modal-carousel").on("slid.bs.carousel", function () {
            $(".modal-title")
            .html($(this)
            .find(".active img")
            .attr("title"));
       });

       /* when clicking a thumbnail */
       $(".lightBoxGallery .thumbnail").on('click', function($e){ // $e preventDefault prevents the modal to appear at the top of the page
    	   $e.preventDefault();
        var content = $("#modal-carousel .carousel-inner");
        var title = $(".modal-title");

        content.empty();
        title.empty();

      	var id = this.id;
         var repo = $("#img-repo .item");
         var repoCopy = repo.filter("#" + id).clone();
         var active = repoCopy.first();

        active.addClass("active");
        title.html(active.find("img").attr("title"));
      	content.append(repoCopy);

        // show the modal
      	$("#modal-gallery").modal("show");

      });

    });


// Accordion
    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
            $(this).siblings(".panel-heading").find(".fa").addClass("fa-chevron-down").removeClass("fa-chevron-right");
        });

        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
            $(this).parent().find(".fa").removeClass("fa-chevron-right").addClass("fa-chevron-down");
        }).on('hide.bs.collapse', function(){
            $(this).parent().find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-right");
        });
});

//Add an inbody class to nav when scrollspy event fires
$(document).ready(function(){       
   var scroll_start = 0;
   var startChange = $('header #startChange');
   var offset = startChange.offset();
    if (startChange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('header nav').addClass('inbody');
       } else {
          $('header nav').removeClass('inbody');
       }
   });
   
    }
});
