let nohacargado = true;
let tiempoMinimoYaPaso = false;

setTimeout(function(){tiempoMinimoYaPaso=true;}, 5000);

$(window).on("scroll", function(){
	if (nohacargado){
		window.scrollTo(0, 0);	
	}
});

$(window).on("load",function(){
     desaparecer();
});


let desaparecer = function(){

	if (!tiempoMinimoYaPaso){
		setTimeout(function(){desaparecer(),1000});	
	} else {
		$(".loader-wrapper").fadeOut("slow");
     	setTimeout(function(){ nohacargado = false; }, 1000);
	}
}


// que se vayan cargando las montanitas volviendo negra
// que en movil ocupe toda la pantalla en vertical
// 5 segundos de carga
// necesitamos mas cosas para responsive? del diseniador
//para miercoles tener esa info del ilustrador - anchos, dos imagenes, uno para cel