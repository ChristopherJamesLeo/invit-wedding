// console.log("hello world");

// Start jquery area

$(window).on("load",function(){
    $("#preloader").delay(700).fadeOut("slow");
    $(".loader").delay(500).fadeOut(700)
})
$(document).ready(function(){
    console.log("hello jquery");
    // Start nav bar 
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $("nav").addClass("active");
        }else {
            $("nav").removeClass("active");
        }
    })
    // End Nav bar

    // start banner carousel
    $("#banner_carousel").owlCarousel({
        items : 1,
        loop : true,
        dots : false,
        nav : false,
        animateIn : "animate__fadeIn",
        animateOut : "animate__fadeOut",
        autoplay : true,
        mouseDrag : false,
    })
    // end banner carousel 

    // Start Our Memory Section
    $('.gallery_imgs').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        gallery:{
            enabled:true
          },
      
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
      
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
      
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      
      });
    // End Our Memory Section
    // Start registry gift section
    $("#registry_gift_carousel").owlCarousel({
        items : 5 ,
        nav : false,
        dots : false,
        loop : true,
        autoplay: true,
        responsive : {
          0 : {
              items : 1,
          },
          452: {
              items : 2
          },
          768 : {
              items : 3,
          },
          992 :{
              items : 5
          }
      }
    })
  // end registry gift section

})

// End jquery area