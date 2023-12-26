window.addEventListener('load',function(){
var imagenes =[];
imagenes[0] = 'img/01.jpg';
imagenes[1] = 'img/02.jpg';
imagenes[2] = 'img/03.jpg';
imagenes[3] = 'img/04.jpg';
imagenes[4] = 'img/05.jpg';
imagenes[5] = 'img/06.jpg';
var indiceImagenes = 1;
var time = 2000;
function cambiarImagenes(){
  document.slider.src = imagenes[indiceImagenes];

if(indiceImagenes < 6){
  indiceImagenes++;
}  else{
    indiceImagenes = 0;
  }
}
setInterval(cambiarImagenes,time)
 ;
});