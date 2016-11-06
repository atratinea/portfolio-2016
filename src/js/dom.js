function appendElements() {

////////////////////////////////////////////////////////////////
//
// prepending and appending layout elements to HTML file
//
///////////////////////////////////////////////////////////////

	$(".menu li a").each(function() {
		$(this).prepend("<span class='bg'></span>");
	});

	$(".worksSection article").each(function() {
		$(this).append("<div class='shadow'></div>");
	});

	$(".aboutSection").prepend("<div class='backgroundPic'></div><div class='backgroundFill'></div>");

	$(".info ul li").each(function() {
		$(this).append("<span class='shadow'></span>")
	});

	$(".downloadButton").append("<span class='shadow'></span>");
	$(".filterButton").each(function(){
		$(this).append("<span class='shadow'></span>");
	});

	$(".contactSection").prepend("<div class='backgroundAngle'></div>");
};

function appendIfOldIE() {

/////////////////////////////////////////////////////////////////////
//
// detecting if browser is IE8 or lower and then appending image
// to .backgroundPic element
//
////////////////////////////////////////////////////////////////////

	if ($("html").is(".ie6, .ie7, .ie8")) {
        oldIE = true;
    };
    if (oldIE) {
  		$(".backgroundPic").append("<img src='img/ui/about-bg.png'>");      
    }
};
