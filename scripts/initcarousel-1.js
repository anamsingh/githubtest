jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:48
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:700,
        height:525,
        skinsfoldername:"",
        arrowhideonmouseleave:1000,
        itembottomshadowimagetop:100,
        navheight:16,
        random:false,
        showbottomshadow:false,
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Classic",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        enabletouchswipe:true,
        navstyle:"bullets",
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        hoveroverlayimage:"hoveroverlay-64-64-3.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-2.png",
        direction:"horizontal",
        supportiframe:false,
        navimage:"bullet-16-16-0.png",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        lightboxbarheight:48,
        showplayvideo:true,
        spacing:18,
        scrollitems:1,
        showhoveroverlay:true,
        scrollmode:"page",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        autoplay:false,
        arrowwidth:32,
        pauseonmouseover:true,
        navmode:"page",
        interval:3000,
        backgroundimagewidth:110,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:1,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:16,
        loop:0,
        transitionduration:5000
    });
});