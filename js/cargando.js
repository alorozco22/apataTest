let nohacargado = true;
let tiempoMinimoYaPaso = false;

setTimeout(function(){tiempoMinimoYaPaso=true;}, 6000);

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
     	setTimeout(function(){
     		let aparecer=document.getElementsByClassName("cont");
     		for (let i = aparecer.length - 1; i >= 0; i--) {
     			aparecer[i].style.display = "block";
     		}
     	},1000);

     	
	}
}


// que se vayan cargando las montanitas volviendo negra
// que en movil ocupe toda la pantalla en vertical
// CHULO 5 segundos de carga
// necesitamos mas cosas para responsive? del diseniador
//para miercoles tener esa info del ilustrador - anchos, dos imagenes, uno para cel

//https://stackoverflow.com/questions/14825206/grayscale-on-only-part-of-an-image

/**
Notas sobre la imagen:
- Está top! Muy útil incluirlo con guías y sin guías, para mí. Sería chévere si al final fuera un nevado! no? uff.
- Pregunta! vamos a animar a las personas? Porque si es así, necesitamos que:
	1. El fondo no tenga personas ni objetos ni nada porque los vamos a poner encima.
	2. Necesitaríamos al menos dos ilustraciones de cada objeto.. por ejemplo.. si hay alguien caminando, entonces una foto con la pierna derecha adelante y otra con la pierna atrás.. A los árboles se les pueden variar punticos para que parezca que el viento mueve sus hojas.. 
- La que no tiene guías, le podemos quitar el logo de apata, y los textos.. todos los textos los ponemos con código.
- Ya con esto me doy cuenta, creo que no necesitamos dos ilustraciones diferentes para movil y compu.. solo que las cosas estén separaditas. Ya con eso, chulo, con código lo modificamos.
- Uff ojalá creara imágenes de objetos que vuelan.. como parapentes.. o globos.. Depronto mejor parapentes.. o pájaros y Nubes.. Pero como objetos aparte. Recuerde que todo objeto toca mínimo dos variaciones... para hacerlo animado.
**/