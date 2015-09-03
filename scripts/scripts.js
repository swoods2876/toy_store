$(document).ready(function(){
    var images = ("#storefront image")
	var currentImageIndex = 0;
	var autoplay = 4000;
	var sliderwidth = 500;
	var slides = images.length;
	$("#storefront image").eq(currentImageIndex).show();

	$("image").click(function(){

		$("#storefront image").eq(currentImageIndex).fadeOut();

		currentImageIndex = (currentImageIndex + 1) % $("#storefront image").length;

		$("#storefront image").eq(currentImageIndex).fadeIn();

		function nextimage(autoplay){
if(currentImageIndex<slides+1){
(currentImageIndex + 1) % $("#storefront image").length;
$("#storefront").animate({left:-sliderwidth*(currentImageIndex)},{duration:800,});
    
}
else{
currentImageIndex = 0;
$("#storefront").animate({left:0},{duration:800,})
}
    if (autoplay) { setTimeout(function() { nextimage(true); }, 4000); }
};
    
    setTimeout(function() { nextimage(true); }, 4000);

});
	});

$(document).ready(function() {
	// $("img").click(function() {
	// 	// Hide the current image
	// 	$(this).hide();
	// 	// Show the next image
	// });
	// The setup - show image 0
	var currentImageIndex = 0;
	$("#slider img").eq(currentImageIndex).show();
	$("#slider").click(function() {
		// Hide the current image
		$("#slider img").eq(currentImageIndex).fadeOut();
		// Increment index
		// currentImageIndex++;
		// if(currentImageIndex >= $("#slider img").length)
		// {
		// 	currentImageIndex = 0;
		// }
		currentImageIndex = (currentImageIndex + 1) % $("#slider img").length;
		// Show the next image
		$("#slider img").eq(currentImageIndex).fadeIn();
	});
});

$(document).ready(function() {
	// $("img").click(function() {
	// 	// Hide the current image
	// 	$(this).hide();
	// 	// Show the next image
	// });
	// The setup - show image 0
	var currentImageIndex = 0;
	$("#slider1 img").eq(currentImageIndex).show();
	$("#slider1").click(function() {
		// Hide the current image
		$("#slider1 img").eq(currentImageIndex).fadeOut();
		// Increment index
		// currentImageIndex++;
		// if(currentImageIndex >= $("#slider img").length)
		// {
		// 	currentImageIndex = 0;
		// }
		currentImageIndex = (currentImageIndex + 1) % $("#slider1 img").length;
		// Show the next image
		$("#slider1 img").eq(currentImageIndex).fadeIn();
	});
});

$(document).ready(function() {
	// $("img").click(function() {
	// 	// Hide the current image
	// 	$(this).hide();
	// 	// Show the next image
	// });
	// The setup - show image 0
	var currentImageIndex = 0;
	$("#slider2 img").eq(currentImageIndex).show();
	$("#slider2").click(function() {
		// Hide the current image
		$("#slider2 img").eq(currentImageIndex).fadeOut();
		// Increment index
		// currentImageIndex++;
		// if(currentImageIndex >= $("#slider img").length)
		// {
		// 	currentImageIndex = 0;
		// }
		currentImageIndex = (currentImageIndex + 1) % $("#slider2 img").length;
		// Show the next image
		$("#slider2 img").eq(currentImageIndex).fadeIn();
	});
});


$(document).ready(function() {
	  var min = new Date().getMinutes(); 
  
    if (min % 2 == 0) {
        $("#slider2").insertBefore("#slider");
        $("#slider1").insertBefore("#slider2");
    } else {
        $("#slider2").insertAfter("#slider1");
    }

 

 



});

    /*$(document).ready(function(){

          $('#imglist').each(function(){

                // get current div
                var $div_parent = $(this);

                // get array of childs in parent div
                var $divsArr = $div_parent.children('#slider, #slider1, #slider2');

                // sort array of childs in parent div (#sponsors) randomly
                $divsArr.sort(function(a,b){

                      // Get a random number between 0 and 10
                      var temp = parseInt( Math.random()*10 );

                      // Get 1 or 0, whether temp is odd or even
                      var isOddOrEven = temp%2;

                      // Get +1 or -1, whether temp greater or smaller than 5
                      var isPosOrNeg = temp>5 ? 1 : -1;

                      // Return -1, 0, or +1
                      return( isOddOrEven*isPosOrNeg );
                })

                // append child items to parent
                .appendTo($div_parent);            
          });
    });

$(document).ready(function() {

$('#bartender').click(function(){
            
                if ($('#pageslide').is(':hidden')) {
                   
                   $('#pageslide').show('slide',{direction:'left'},1000);
                } else {
                   
                   $('#pageslide').hide('slide',{direction:'right'},1000);
                }
});

});*/


$(document).ready(function() {
  
var clicked=true;
$("#bartender").on('click', function(){
    if(clicked)
    {
        clicked=false;
        $("#pageslide").css({"left": 0});
    }
    else
    {
        clicked=true;
        $("#pageslide").css({"left": "1920px"});
    }
});

});












