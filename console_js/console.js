// jQuery ignition

$(document).ready(function() {
	
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	os = BrowserDetect.OS;
	browser = BrowserDetect.browser;
	bversion = BrowserDetect.version;
	
	
	$("body").append('<div id="console"><div id="chead"><h5>Front-End Console <span class="controls" id="dock">-</span><span class="controls" id="expand">+</span></h5></div><div id="console_details"></div></div>');
	$("#console").css({
		
	});
	$("#chead").css({
		
	});
	$(".controls").css({
		
	});
	
	consoleX = $("#console").offset().left;
	consoleY = $("#console").offset().top;
	
	$("#console_details").append('<h4>Platform: '+platform+'</h4>');
	$("#console_details").append('<h4>OS: '+os+'</h4>');
	$("#console_details").append('<h4>Browser: '+browser+'</h4>');
	$("#console_details").append('<h4>Browser Version: '+bversion+'</h4>');
	$("#console_details").append('<h4>Window Width: <span id="width">'+windowWidth+'</span></h4>');
	$("#console_details").append('<h4>Window Height: <span id="height">'+windowHeight+'</span></h4>');
	$("#console_details").append('<h4 id="landscape">Orientation: Landscape</h4>');
	$("#console_details").append('<h4 id="portrait">Orientation: Portrait</h4>');
	$("#console_details").append('<h4>Mouse X: <span id="mousex"></span></h4>');
	$("#console_details").append('<h4>Mouse Y: <span id="mousey"></span></h4>');
	$("#console_details").append('<h4>Console X: <span id="conx">'+consoleX+'</span></h4>');
	$("#console_details").append('<h4>Console Y: <span id="cony">'+consoleY+'</span></h4>');
	// BELOW IS A COMPREHENSIVE LIST OF ALL DATA AVAILABLE FROM THE NAVIGATOR OBJECT
	//$("#console_details").append('<h4>Details: Language:'+navigator.language+'</h4><h4>Product: '+navigator.product+'</h4><h4>MIME Types:'+navigator.mimeTypes+'</h4><h4>AppVersion: '+navigator.appVersion+'</h4><h4>Plugins: '+navigator.plugins+'</h4><h4>Online:'+navigator.onLine+'</h4><h4>Platform: '+navigator.platform+'</h4><h4>Vendor: '+navigator.vendor+'</h4><h4>Code name: '+navigator.appCodeName+'</h4><h4>Cookies enabled: '+navigator.cookieEnabled+'</h4><h4>Geolocation: '+navigator.geolocation+'</h4><h4>App name: '+navigator.appName+'</h4><h4>Product sub: '+navigator.productSub+'</h4><h4>User agent: '+navigator.userAgent+'</h4><h4>Vendor Sub: '+navigator.vendorSub+'</h4><h4>Java enabled: '+navigator.javaEnabled+'</h4><h4>Storage updates: '+navigator.getStorageUpdates+"</h4>");
	
	$("#console h4").css({
		
	});
	
	$(window).resize(function(){
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		$("#width").html(windowWidth);
		$("#height").html(windowHeight);
	});
	
	$("#console").draggable({
		handle: "#chead",
		containment: "body",
		scroll: false,
		drag: function(event, ui) {
			consoleX = $(this).offset().left;
			consoleY = $(this).offset().top;
			$("#conx").html(consoleX);
			$("#cony").html(consoleY);
		}
	});

	$("#dock").live("click",function(){
		$("#console_details").css({
			display: "none"
		});
		$("#console").css({
			position: "absolute",
			top: "0px",
			left: (windowWidth - 205)+"px"
		});
	});
	
	$("#expand").live("click",function(){
		$("#console_details").css({
			display: "block"
		});
	});
	
	$(document).mousemove(function(e){
      $('#mousex').html(e.pageX);
      $('#mousey').html(e.pageY);
	}); 

});