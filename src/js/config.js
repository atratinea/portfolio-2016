/////////////////////////////////////////////////////////////////////////
// 
// array containing file paths to files to be loaded in dom() function  
//
/////////////////////////////////////////////////////////////////////////

var loaderFiles = new Array(

	"img/ui/loader.gif",
	"img/ui/bg.jpg",
	
	"img/ui/about-bg.png",
	"img/ui/about-bg-angle.png",
	"img/ui/about-h-img.png",
	"img/ui/arrow-preview.png",
	"img/ui/chart-css.png",
	"img/ui/chart-html.png",
	"img/ui/chart-id.png",
	"img/ui/chart-il.png",
	"img/ui/chart-jq.png",
	"img/ui/chart-ps.png",
	"img/ui/contact-bg-pattern.gif",
	"img/ui/e-mail.png",
	"img/ui/head.png",
	"img/ui/heading-bg-ie.png",
	"img/ui/icon-behance.png",
	"img/ui/icon-linkedin.png",
	"img/ui/icon-mail.png",
	"img/ui/icon-skype.png",
	"img/ui/head.png",
	"img/ui/logo.png",
	"img/ui/ornament.png",
	"img/ui/ornament-footer.png",
	"img/ui/ornament-footer-ie.png",
	"img/ui/ornament-ie.png",
	"img/ui/skype.png",
	"img/ui/tags-bg.png",
	"img/ui/tags-bg-ie.png",
	"img/ui/works.png",
	"img/ui/works-bg-mobile.png",
	"img/ui/works-h-img.png",

	//gallery images

	"img/works/andec-logo-min.jpg",
	"img/works/beek-min.jpg",
	"img/works/betsson-min.jpg",
	"img/works/blossom-min.jpg",
	"img/works/cafe-min.jpg",
	"img/works/conference-min.jpg",
	"img/works/derby-min.jpg",
	"img/works/drop-min.jpg",
	"img/works/drover-min.jpg",
	"img/works/erights-min.jpg",
	"img/works/fortune-min.jpg",
	"img/works/glenevin-logo-min.jpg",
	"img/works/glenevin-min.jpg",
	"img/works/greenplatform-min.jpg",
	"img/works/independent-min.jpg",
	"img/works/iq-logo-min.jpg",
	"img/works/johnkelly-min.jpg",
	"img/works/mpt-min.jpg",
	"img/works/nexia-min.jpg",
	"img/works/patricklane-min.jpg",
	"img/works/port-min.jpg",
	"img/works/sovereign-min.jpg",
	"img/works/spar-min.jpg",
	"img/works/strand-min.jpg",
	"img/works/sys-logo-min.jpg",
	"img/works/sys-min.jpg",
	"img/works/tacklebullying-min.jpg",
	"img/works/tankship-min.jpg",
	"img/works/vassallo-min.jpg",
	"img/works/zapa-min.jpg"
);


//////////////////////////////////////////////////////////////////////////////////////
// 
// array containing objects and their properties
// to be used in showWork(workId) function    
//
//////////////////////////////////////////////////////////////////////////////////////


var worksInfo = [];

worksInfo["bets"] = {
	title: "Betsson Group",
	link: "http://betssongroup.com",
	images: [
		{
			bigsrc: "bets1.jpg",
			smallsrc: "bets1_min.jpg"
		},
		{
			bigsrc: "bets2.jpg",
			smallsrc: "bets2_min.jpg"
		},
		{
			bigsrc: "bets3.jpg",
			smallsrc: "bets3_min.jpg"
		},
		{
			bigsrc: "bets4.jpg",
			smallsrc: "bets4_min.jpg"
		},
		{
			bigsrc: "bets5.jpg",
			smallsrc: "bets5_min.jpg"
		}
	]
};

worksInfo["malt"] = {
	title: "Malta Public Transport",
	link: "http://publictransport.com.mt",
	images: [
		{
			bigsrc: "malt1.jpg",
			smallsrc: "malt1_min.jpg"
		},
		{
			bigsrc: "malt2.jpg",
			smallsrc: "malt2_min.jpg"
		},
		{
			bigsrc: "malt3.jpg",
			smallsrc: "malt3_min.jpg"
		},
		{
			bigsrc: "malt4.jpg",
			smallsrc: "malt4_min.jpg"
		},
		{
			bigsrc: "malt5.jpg",
			smallsrc: "malt5_min.jpg"
		}
	]
};

worksInfo["inde"] = {
	title: "Malta Independent",
	link: "http://independent.com.mt",
	images: [
		{
			bigsrc: "inde1.jpg",
			smallsrc: "inde1_min.jpg"
		},
		{
			bigsrc: "inde2.jpg",
			smallsrc: "inde2_min.jpg"
		},
		{
			bigsrc: "inde3.jpg",
			smallsrc: "inde3_min.jpg"
		},
		{
			bigsrc: "inde4.jpg",
			smallsrc: "inde4_min.jpg"
		},
		{
			bigsrc: "inde5.jpg",
			smallsrc: "inde5_min.jpg"
		}
	]
};

worksInfo["nexi"] = {
	title: "Nexia BT",
	link: "http://nexiabt.com",
	images: [
		{
			bigsrc: "nexi1.jpg",
			smallsrc: "nexi1_min.jpg"
		},
		{
			bigsrc: "nexi2.jpg",
			smallsrc: "nexi2_min.jpg"
		},
		{
			bigsrc: "nexi3.jpg",
			smallsrc: "nexi3_min.jpg"
		},
		{
			bigsrc: "nexi4.jpg",
			smallsrc: "nexi4_min.jpg"
		},
		{
			bigsrc: "nexi5.jpg",
			smallsrc: "nexi5_min.jpg"
		}
	]
};

worksInfo["blos"] = {
	title: "Blossom Foundation",
	link: "http://blossomfoundation.org.mt",
	images: [
		{
			bigsrc: "blos1.jpg",
			smallsrc: "blos1_min.jpg"
		},
		{
			bigsrc: "blos2.jpg",
			smallsrc: "blos2_min.jpg"
		},
		{
			bigsrc: "blos3.jpg",
			smallsrc: "blos3_min.jpg"
		},
		{
			bigsrc: "blos4.jpg",
			smallsrc: "blos4_min.jpg"
		}
	]
};

worksInfo["vass"] = {
	title: "Vassallo Associates",
	link: "",
	images: [
		{
			bigsrc: "vass1.jpg",
			smallsrc: "vass1_min.jpg"
		},
		{
			bigsrc: "vass2.jpg",
			smallsrc: "vass2_min.jpg"
		},
		{
			bigsrc: "vass3.jpg",
			smallsrc: "vass3_min.jpg"
		}
	]
};

worksInfo["stra"] = {
	title: "Strand Electronics",
	link: "http://www.strandelectronics.com",
	images: [
		{
			bigsrc: "stra1.jpg",
			smallsrc: "stra1_min.jpg"
		},
		{
			bigsrc: "stra2.jpg",
			smallsrc: "stra2_min.jpg"
		},
		{
			bigsrc: "stra3.jpg",
			smallsrc: "stra3_min.jpg"
		},
		{
			bigsrc: "stra4.jpg",
			smallsrc: "stra4_min.jpg"
		},
		{
			bigsrc: "stra5.jpg",
			smallsrc: "stra5_min.jpg"
		}
	]
};

worksInfo["sove"] = {
	title: "Sovereign Global",
	link: "https://www.so-global.com/",
	images: [
		{
			bigsrc: "sove1.jpg",
			smallsrc: "sove1_min.jpg"
		},
		{
			bigsrc: "sove2.jpg",
			smallsrc: "sove2_min.jpg"
		},
		{
			bigsrc: "sove3.jpg",
			smallsrc: "sove3_min.jpg"
		},
		{
			bigsrc: "sove4.jpg",
			smallsrc: "sove4_min.jpg"
		},
		{
			bigsrc: "sove5.jpg",
			smallsrc: "sove5_min.jpg"
		}
	]
};

worksInfo["tank"] = {
	title: "Tankship Management",
	link: "http://www.tankshipmanagement.com/",
	images: [
		{
			bigsrc: "tank1.jpg",
			smallsrc: "tank1_min.jpg"
		},
		{
			bigsrc: "tank2.jpg",
			smallsrc: "tank2_min.jpg"
		},
		{
			bigsrc: "tank3.jpg",
			smallsrc: "tank3_min.jpg"
		},
		{
			bigsrc: "tank4.jpg",
			smallsrc: "tank4_min.jpg"
		},
		{
			bigsrc: "tank5.jpg",
			smallsrc: "tank5_min.jpg"
		}
	]
};

worksInfo["fort"] = {
	title: "Fortune Technologies",
	link: "http://fortune.com.mt/",
	images: [
		{
			bigsrc: "fort1.jpg",
			smallsrc: "fort1_min.jpg"
		},
		{
			bigsrc: "fort2.jpg",
			smallsrc: "fort2_min.jpg"
		},
		{
			bigsrc: "fort3.jpg",
			smallsrc: "fort3_min.jpg"
		},
		{
			bigsrc: "fort4.jpg",
			smallsrc: "fort4_min.jpg"
		}
	]
};

worksInfo["erig"] = {
	title: "e-rights",
	link: "http://fortune.com.mt/",
	images: [
		{
			bigsrc: "erig1.jpg",
			smallsrc: "erig1_min.jpg"
		},
		{
			bigsrc: "erig2.jpg",
			smallsrc: "erig2_min.jpg"
		},
		{
			bigsrc: "erig3.jpg",
			smallsrc: "erig3_min.jpg"
		}
	]
};

worksInfo["glen"] = {
	title: "Glenevin",
	link: "",
	images: [
		{
			bigsrc: "glen1.jpg",
			smallsrc: "glen1_min.jpg"
		},
		{
			bigsrc: "glen2.jpg",
			smallsrc: "glen2_min.jpg"
		},
		{
			bigsrc: "glen3.jpg",
			smallsrc: "glen3_min.jpg"
		},
		{
			bigsrc: "glen4.jpg",
			smallsrc: "glen4_min.jpg"
		},
		{
			bigsrc: "glen5.jpg",
			smallsrc: "glen5_min.jpg"
		}
	]
};

worksInfo["tack"] = {
	title: "Tackle Bullying",
	link: "http://www.tacklebullying.ie",
	images: [
		{
			bigsrc: "tack1.jpg",
			smallsrc: "tack1_min.jpg"
		},
		{
			bigsrc: "tack2.jpg",
			smallsrc: "tack2_min.jpg"
		},
		{
			bigsrc: "tack3.jpg",
			smallsrc: "tack3_min.jpg"
		},
		{
			bigsrc: "tack4.jpg",
			smallsrc: "tack4_min.jpg"
		},
		{
			bigsrc: "tack5.jpg",
			smallsrc: "tack5_min.jpg"
		}
	]
};

worksInfo["gree"] = {
	title: "Green Platform",
	link: "",
	images: [
		{
			bigsrc: "gree1.jpg",
			smallsrc: "gree1_min.jpg"
		},
		{
			bigsrc: "gree2.jpg",
			smallsrc: "gree2_min.jpg"
		},
		{
			bigsrc: "gree3.jpg",
			smallsrc: "gree3_min.jpg"
		}
	]
};

worksInfo["drov"] = {
	title: "Drover",
	link: "http://droverfoods.com",
	images: [
		{
			bigsrc: "drov1.jpg",
			smallsrc: "drov1_min.jpg"
		},
		{
			bigsrc: "drov2.jpg",
			smallsrc: "drov2_min.jpg"
		},
		{
			bigsrc: "drov3.jpg",
			smallsrc: "drov3_min.jpg"
		}
	]
};

worksInfo["john"] = {
	title: "John Kelly",
	link: "http://johnkellyrha.com",
	images: [
		{
			bigsrc: "john1.jpg",
			smallsrc: "john1_min.jpg"
		},
		{
			bigsrc: "john2.jpg",
			smallsrc: "john2_min.jpg"
		},
		{
			bigsrc: "john3.jpg",
			smallsrc: "john3_min.jpg"
		},
		{
			bigsrc: "john4.jpg",
			smallsrc: "john4_min.jpg"
		}
	]
};

worksInfo["zapa"] = {
	title: "Zapa Technology",
	link: "http://zapatechnology.com",
	images: [
		{
			bigsrc: "zapa1.jpg",
			smallsrc: "zapa1_min.jpg"
		},
		{
			bigsrc: "zapa2.jpg",
			smallsrc: "zapa2_min.jpg"
		},
		{
			bigsrc: "zapa3.jpg",
			smallsrc: "zapa3_min.jpg"
		}
	]
};

worksInfo["beek"] = {
	title: "Beek",
	link: "http://www.gebalska.com/previews/beek/index.html",
	images: [
		{
			bigsrc: "beek1.jpg",
			smallsrc: "beek1_min.jpg"
		},
		{
			bigsrc: "beek2.jpg",
			smallsrc: "beek2_min.jpg"
		},
		{
			bigsrc: "beek3.jpg",
			smallsrc: "beek3_min.jpg"
		}
	]
};

worksInfo["derb"] = {
	title: "Derby",
	link: "http://www.gebalska.com/previews/derby/index.html",
	images: [
		{
			bigsrc: "derb1.jpg",
			smallsrc: "derb1_min.jpg"
		},
		{
			bigsrc: "derb2.jpg",
			smallsrc: "derb2_min.jpg"
		},
		{
			bigsrc: "derb3.jpg",
			smallsrc: "derb3_min.jpg"
		},
		{
			bigsrc: "derb4.jpg",
			smallsrc: "derb4_min.jpg"
		}
	]
};

worksInfo["trav"] = {
	title: "Travel Writers Conference",
	link: "http://www.gebalska.com/previews/travel_writers/index.html",
	images: [
		{
			bigsrc: "trav1.jpg",
			smallsrc: "trav1_min.jpg"
		},
		{
			bigsrc: "trav2.jpg",
			smallsrc: "trav2_min.jpg"
		},
		{
			bigsrc: "trav3.jpg",
			smallsrc: "trav3_min.jpg"
		},
		{
			bigsrc: "trav4.jpg",
			smallsrc: "trav4_min.jpg"
		}
	]
};

worksInfo["cafe"] = {
	title: "Cafe Bean",
	link: "http://www.gebalska.com/previews/cafe_bean/index.html",
	images: [
		{
			bigsrc: "cafe1.jpg",
			smallsrc: "cafe1_min.jpg"
		},
		{
			bigsrc: "cafe2.jpg",
			smallsrc: "cafe2_min.jpg"
		},
		{
			bigsrc: "cafe3.jpg",
			smallsrc: "cafe3_min.jpg"
		}
	]
};

worksInfo["spar"] = {
	title: "Spar Hotel Breaks",
	link: "",
	images: [
		{
			bigsrc: "spar1.jpg",
			smallsrc: "spar1_min.jpg"
		},
		{
			bigsrc: "spar2.jpg",
			smallsrc: "spar2_min.jpg"
		},
		{
			bigsrc: "spar3.jpg",
			smallsrc: "spar3_min.jpg"
		},
		{
			bigsrc: "spar4.jpg",
			smallsrc: "spar4_min.jpg"
		}
	]
};

worksInfo["soys"] = {
	title: "SYS Ireland",
	link: "http://www.sys.ie",
	images: [
		{
			bigsrc: "soys1.jpg",
			smallsrc: "soys1_min.jpg"
		},
		{
			bigsrc: "soys2.jpg",
			smallsrc: "soys2_min.jpg"
		},
		{
			bigsrc: "soys3.jpg",
			smallsrc: "soys3_min.jpg"
		},
		{
			bigsrc: "soys4.jpg",
			smallsrc: "soys4_min.jpg"
		}
	]
};

worksInfo["drop"] = {
	title: "Drop Hosting",
	link: "http://www.gebalska.com/previews/drop/index.html",
	images: [
		{
			bigsrc: "drop1.jpg",
			smallsrc: "drop1_min.jpg"
		},
		{
			bigsrc: "drop2.jpg",
			smallsrc: "drop2_min.jpg"
		},
		{
			bigsrc: "drop3.jpg",
			smallsrc: "drop3_min.jpg"
		}
	]
};

worksInfo["patr"] = {
	title: "Patrick Lane",
	link: "",
	images: [
		{
			bigsrc: "patr1.jpg",
			smallsrc: "patr1_min.jpg"
		},
		{
			bigsrc: "patr2.jpg",
			smallsrc: "patr2_min.jpg"
		},
		{
			bigsrc: "patr3.jpg",
			smallsrc: "patr3_min.jpg"
		}
	]
};

worksInfo["port"] = {
	title: "Previous Portfolio",
	link: "http://www.gebalska.com/previews/old_portfolio2/index.html",
	images: [
		{
			bigsrc: "port1.jpg",
			smallsrc: "port1_min.jpg"
		},
		{
			bigsrc: "port2.jpg",
			smallsrc: "port2_min.jpg"
		},
		{
			bigsrc: "port3.jpg",
			smallsrc: "port3_min.jpg"
		}
	]
};

worksInfo["anlo"] = {
	title: "Andec Communications Logo",
	link: "",
	images: [
		{
			bigsrc: "anlo1.jpg",
			smallsrc: "anlo1_min.jpg"
		}
	]
};

worksInfo["iqlo"] = {
	title: "iQ Group Logo",
	link: "",
	images: [
		{
			bigsrc: "iqlo1.jpg",
			smallsrc: "iqlo1_min.jpg"
		}
	]
};

worksInfo["gllo"] = {
	title: "Glenevin Logo",
	link: "",
	images: [
		{
			bigsrc: "gllo1.jpg",
			smallsrc: "gllo1_min.jpg"
		}
	]
};

worksInfo["sylo"] = {
	title: "SYS Ireland Logo",
	link: "",
	images: [
		{
			bigsrc: "sylo1.jpg",
			smallsrc: "sylo1_min.jpg"
		}
	]
};