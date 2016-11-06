var winW, winH, 
	openWork = "", contentH, 
	clickedNav = false,
	isOpen = true,
	oldIE = false,
	tabletCutOff = 640;

window.onload = function(){
    win();
};

$(document).ready(dom);

function win() {

//////////////////////////////////////////////////////////////////////////////////
//
// a set of events, methods and functions to be executed on $(window).load() 
//
//////////////////////////////////////////////////////////////////////////////////

	// adding class to #top element, removing it from other spans 
	$(".menu span").removeClass("textHighlight");
	$("#top").find("span").addClass("textHighlight");

	// setting nav's position to relative to prevent its left alignement on window load
	$("nav").css("position", "relative");

	// removing container with preloaded images
	$(".holder").remove();

	// setting nav's position back to fixed
	$("nav").css("position", "fixed");

////////////////////////////////////////////////////////////////////////////////////
//
// animation on nav.loader, .zoom and .menu elements to be executed on window load  
//
///////////////////////////////////////////////////////////////////////////////////

	$("nav .loader").delay(500).animate(
		{
			"left": 60
		},
		{
			duration: 800,
			easing: "easeOutQuint",
			complete: function() {

				// animating left position of .zoom element

				$(".zoom").animate(
					{
						"left": $(".main").outerWidth(false)
					},
					{
						duration: 1000, 
						easing: "easeInOutQuint"
					}
				);

				// animating left position of .menu element

				$(".menu").animate(
					{
						"left": 0 
					},
					{
						duration: 1000,
						easing: "easeOutQuint",
						complete: function() {

							// setting #wrapper's height to document height
							// and isOpen variable to false

							$("#wrapper").css("height", "");
							isOpen = false;
						}
					}
				);		
			}
		}
	);
};

function dom() {

////////////////////////////////////////////////////////////////////////////////////
//
// a set of functions to be executed on $(document).ready() 
//
///////////////////////////////////////////////////////////////////////////////////

	preloadImages();
	appendIfOldIE();
	$(window).resize(function() { // function executed on window resize 
		if (isOpen === true) {
			positionPreview();

			// setting css properties on window resize for window width smaller than tabletCutOff
			if ($(window).width() < tabletCutOff) {
				$(".zoom").css("left", $(".main").outerWidth(false));
				$("#wrapper").css("height", "");
				isOpen = false;
			}
		};
		reset();
	});
	reset();
	menuClickEvent();
	filterWorks();
	$(window).scroll(setClassOnScroll);
};

function preloadImages() {

///////////////////////////////////////////////////////////////
//
// preloading ui images to the site
//
///////////////////////////////////////////////////////////////

	// appending container to hold preloaded images
	$("body").append("<div class='holder'></div><div class='desktop'></div>");

	// preparing variable with HTML for .holder container
	var holderHtml = '';
	for (var a=0;a<loaderFiles.length;a++) {
		holderHtml += "<img src='"+loaderFiles[a]+"'/>"	
	};
	$(".holder").html(holderHtml);

	appendElements();
};

function reset() {

///////////////////////////////////////////////////////////////////////////////////////////
//
// resetting css properties of elements and calling functions directly or on window resize 
//
///////////////////////////////////////////////////////////////////////////////////////////
	
	winW = $(window).width();
	winH = $(window).height();

	workClickEvent();

	// position .zoom depending on isOpen value on window resize
	if (isOpen === false) {
		$(".zoom").css("left", $(".main").outerWidth(false));
		$(".preview").remove();
	} else {
		$(".zoom").css("left", $(".menu").outerWidth(false));
	};

	var addNavSpace = parseInt($(".menu").css("paddingTop"))+parseInt($(".short span").last().css("paddingTop"));
	$(".dynamic").css("height", winH-(3*$(".short").outerHeight(false))-addNavSpace);

	$("nav").css("left", $(".main").offset().left);

	$(".content").css("width", $(".main").outerWidth(false) - $("nav").outerWidth(false));

	if (isOpen === true) {
		setPreviewStyles();
		positionPreview();
	};
};

function menuClickEvent() {

/////////////////////////////////////////////////////////////////////
//
// animating scrollTop of $(html, body) on click on .menu li a
//
/////////////////////////////////////////////////////////////////////

	$(".menu li a").click(function(event) {

		// fading out preview and animating left position of .zoom if isOpen = true
		if (isOpen === true) {
			$(".preview").fadeOut(300, function() {
				$("#wrapper").css("height", "");
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
		};

		var navId = $(this).attr("id");
		var contentId = navId+"Cont";
		var contentTop = Math.round($("#"+contentId).offset().top);

		$("html, body").stop().animate(
			{
				"scrollTop": contentTop
			},
			{
				duration: 1000
			}
		);

		// setting scrollTop to a different value if click event happens
		// on a link with "works" id
		
		if (navId === "works") {

			var addNavSpace = parseInt($(".menu").css("paddingTop"))+parseInt($(".short span").last().css("paddingTop"));
			var worksTop = $("#works").offset().top+addNavSpace;
			var navTopH = $("#top").outerHeight(false);
			var worksH = $(".worksSection").outerHeight(false)-parseInt($(".worksSection").css("paddingTop"));
			var movePercent = (event.pageY-worksTop)/$("#works").outerHeight(false);

			$("html, body").stop().animate(
				{
					"scrollTop": $("#topCont").outerHeight(false)+(worksH*movePercent)+addNavSpace
				},
				{
					duration: 1000
				}
			);	
		};
	});

};

function setClassOnScroll() {

///////////////////////////////////////////////////////////////////////////////////////
//
// adding or removing class from .menu span depending on window's scrollTop value
//
//////////////////////////////////////////////////////////////////////////////////////

	if (isOpen === false) {

		var topScroll = $(window).scrollTop();

		$(".menu span").removeClass("textHighlight");

		if (topScroll < Math.round($("#worksCont").offset().top)) {
			$("#top").find("span").addClass("textHighlight");
		};

		if (topScroll >= Math.round($("#worksCont").offset().top) && $(window).scrollTop() < Math.round($("#aboutCont").offset().top)) {	
			$("#works").find("span").addClass("textHighlight");
		};

		if (topScroll >= Math.round($("#aboutCont").offset().top) && $(window).scrollTop() < Math.round($("#contactCont").offset().top)) {	
			$("#about").find("span").addClass("textHighlight");
		};

		if (topScroll >= Math.round($("#contactCont").offset().top) || $(window).scrollTop() + $(window).height() == $(document).height()) {
			$(".menu span").removeClass("textHighlight");
			$("#contact").find("span").addClass("textHighlight");
		};
	};
};

function filterWorks() {

///////////////////////////////////////////////////////////////////////////////////////
//
// showing or hiding work items depending on the filtering item clicked
//
//////////////////////////////////////////////////////////////////////////////////////

	$(".filtersContainer a").click(function(){

		var id = $(this).attr("id");

		$(".worksSection article").fadeOut(200);
		$(".worksSection").find("."+id).fadeIn(200);

		$(".filtersContainer li").removeClass("active");
		$(this).parent("div").parent("li").addClass("active");
	});
};

