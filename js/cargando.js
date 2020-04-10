let nohacargado = true;

$(window).on("scroll", function(){
	if (nohacargado){
		window.scrollTo(0, 0);	
	}
});

$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
     setTimeout(function(){ nohacargado = false; }, 1000);
});