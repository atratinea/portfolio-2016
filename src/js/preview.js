function setWrapperHeight() {

//////////////////////////////////////////////////////////////////////////////////
// 
// set #wrapper height depending on isOpen value
//
//////////////////////////////////////////////////////////////////////////////////

	if (isOpen === false) {
		$("#wrapper").css("height", "");
	} else {
		$("#wrapper").css("height", $(window).height());
	};
};

function workClickEvent() {

//////////////////////////////////////////////////////////////////////////////////
// 
// a function to be executed on click event on .workContent 
//
//////////////////////////////////////////////////////////////////////////////////

	setWrapperHeight();

	$(".workContent").click(function() {

		//$(".zoom .loader").remove();

		winW = $(window).width();
		var workId = $(this).attr("id");
		openWork = workId;
		var workTop = $(this).offset().top-30;

		if (winW >= tabletCutOff) {
			
			$(".zoom").stop().animate(
				{
					"left": $(".menu").outerWidth(true)
				},
				{
					duration: 750, 
					easing: "easeInOutQuint",
					complete: function() {
						isOpen = true;
						
						$(".menu span").removeClass("textHighlight");
						$("#works").find("span").addClass("textHighlight");
					
						setClassOnScroll();
						preparePreviewHTML();
						setPreviewStyles();
						loadPreviewElements(workId);
						imageClickEvent()
						positionPreview();
						closeClickEvent(workTop);
					}
				}
			);
		}
	});
};



function preparePreviewHTML() {

//////////////////////////////////////////////////////////////////////////////////////
// 
// implementing works' preview HTML to .zoom element and adding 
//
/////////////////////////////////////////////////////////////////////////////////////

	var zoomHtml = "<div class='loader'><img src='img/ui/loader.gif' alt=''/></div>";
	zoomHtml += 		"<div class='preview'>";
	zoomHtml += 			"<a class='close'></a>";
	zoomHtml += 			"<div class='previewContent'>";
	zoomHtml += 				"<div class='bigImg'></div>";
	zoomHtml += 				"<div class='details cfix'>";
	zoomHtml += 					"<div class='workTitle'></div>"
	zoomHtml += 					"<div class='gallery'></div>";
	zoomHtml += 				"</div>";
	zoomHtml += 			"</div>";
	zoomHtml += 		"</div>";
	$(".zoom").html(zoomHtml);
};


function setPreviewStyles() {

//////////////////////////////////////////////////////////////////////////////////////
// 
// setting preview's elements styles
//
/////////////////////////////////////////////////////////////////////////////////////

	winH = $(window).height();
	var zoomW = $(".main").outerWidth(false)-$("nav").outerWidth(false);

	$(".zoom .loader").css({
		"top": Math.round((winH-$(".zoom .loader").outerHeight(false))/2), 
		"left": Math.round((zoomW-$(".zoom .loader").outerWidth(false))/2)
	});

	$(".preview").css("width", zoomW-$(".close").outerWidth(true)-parseInt($(".close").css("left")));

	$(".close").css("top", Math.round((winH-$(".close").outerHeight(false))/2));
};


function loadPreviewElements(workId) {

//////////////////////////////////////////////////////////////////////////////////////
// 
// setting preview's elements styles
//
/////////////////////////////////////////////////////////////////////////////////////	

	// appending images to .bigImg container
	for (var a=0; a<worksInfo[workId]['images'].length; a++) {
		$(".bigImg").append("<img src=img/works/"+worksInfo[workId]['images'][a]['bigsrc']+" alt=\""+worksInfo[workId]['title']+"\"/>");
	}

	// appending images to .gallery container
	for (var b=0; b<worksInfo[workId]['images'].length; b++) {
		$(".gallery").append("<a><img src=img/works/"+worksInfo[workId]['images'][b]['smallsrc']+" alt=\""+worksInfo[workId]['title']+"\"/></a>");
	};

	// implementing html containing work's title and link
	$(".workTitle").html("<h1>"+worksInfo[workId]['title']+"</h1>");
	if (worksInfo[workId]["link"] !== "") {
		$(".workTitle").append("<a href="+worksInfo[workId]['link']+" target='_blank'>view website</a>");
	};

	// adding classes to first children of .gallery a and .bigImg
	$(".gallery a img").first().addClass("active");
	$(".bigImg img").first().addClass("selected");
	
	
	//////////////////////////////////////////////////////////////////////////////////
	// 
	// set of methods and events to be executed after all images are loaded 
	// to .previewContent element
	//
	//////////////////////////////////////////////////////////////////////////////////


	$(".previewContent").imagesLoaded(function() {

		// setting top position and display value of .workTitle
		$(".workTitle").css(
			{
				"top": Math.round(($(".details").height()-$(".workTitle").height())/2),
				"display": "block"
			}
		);

		// setting top position of .previewContent
		contentH = $(".previewContent").outerHeight(true);
		$(".previewContent").css("top", (winH-contentH)/2);

		$(".zoom .loader").stop().animate(
			{
				"opacity": 0
			},
			{
				duration: 300,
				complete: function() {
		
					$(".preview").animate({"opacity": 1}, 500);
				}
			}
		);
	});
};

function imageClickEvent() {

//////////////////////////////////////////////////////////////////////////////////
// 
// function to be executed on click event on ".gallery a img" element 
//
//////////////////////////////////////////////////////////////////////////////////

	$(".gallery a img").click(function() {

		// extracting number from element's src
		imageNo = parseInt($(this).attr("src").substr(14,1));
		imageNo=parseInt($(this).parent().index(), 10);
		
		// adding class to clicked element, removing class from other matched elements
		$(".gallery a img.active").removeClass("active");
		$(this).addClass("active");

		$(".bigImg img").removeClass("selected");
		$(".bigImg").children().eq(imageNo).addClass("selected");

	});
};


function positionPreview() {

//////////////////////////////////////////////////////////////////////////////////
// 
// function setting top position of .previewContent and height of .bigImg
//
//////////////////////////////////////////////////////////////////////////////////

	var imgRatio = 1024/528; // counting ratio using actual image size
	var maxImageH = Math.floor($(".previewContent").width()/imgRatio);
	var marg = 30; // general margin value
	var previewH = winH-2*marg;
	var mainImageH = previewH-$(".details").outerHeight(true); // height of the bottom bar;

	if (mainImageH>maxImageH) mainImageH = maxImageH;
	$(".bigImg").css("height", mainImageH);

	contentH = $(".bigImg").height()+$(".details").outerHeight(true);
	$(".previewContent").css("top", (winH-contentH)/2);

	$("#wrapper").css("height", winH);

	$(window).scrollTop(0);
};

function closeClickEvent(workTop) {

//////////////////////////////////////////////////////////////////////////////////
// 
// function to be executed on click event on .close element 
//
//////////////////////////////////////////////////////////////////////////////////


	$(".close").click(function() {

		$(".preview").fadeOut(300, function(){
			$("#wrapper").css("height", "");

			// setting window's scrollTop depending on device used
			if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {          
            	window.scrollTo(0, workTop) 
			} else { 
				$(window).scrollTop(workTop);
			}
		});

		$(".zoom").stop().animate(
			{
				"left": $(".main").outerWidth(false)
			},
			{
				duration: 750, 
				easing: "easeInOutQuint",
				complete: function() {
					var workOffset = $("#"+openWork).offset().top; // setting workOffset to actual top offset of selected work
					$(window).scrollTop(workOffset-30);
					isOpen = false;
					$(".zoom .loader").remove();
				}
			}
		);
	});
};
