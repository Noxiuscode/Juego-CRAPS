var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var tiro1;
var tiro2
var totaltiro
var turno = 0;
var Punto = 0;


window.onload = init;

function init(){
	alert("Bienvenido");
	tiro1 = 1;
	tiro2 = 2;

	boton_tirar = document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
	
}

function tirardado(){
	 return Math.floor(Math.random() * 6) + 1 ;
}
function actualizarDado(ref,cara){
 
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro1 = tirardado();
	tiro2 = tirardado();
  actualizarDado(dado1,tiro1);
  actualizarDado(dado2,tiro2);
  
console.log("Puntos actuales",Punto);
 totaltiro = tiro1 + tiro2

console.log("turno actual",turno);
  totaltiro = tiro1 + tiro2

  Punto= Punto + 1;

  turno= turno + 1;

  if(totaltiro==7 || totaltiro==11)
  {
  	alert("Ganaste la partida") 
  	{Punto= 1
  		console.log("Se reiniciará el puntaje")}
  	{	turno= 1;
console.log("Se reiniciará el turno")}
  
 } 

 totaltiro= tiro1 + tiro2

  if(totaltiro==2 || totaltiro==3 || totaltiro==12)
  	{alert("Perdiste, intentalo de nuevo")
  	{Punto = 1;
  		console.log("Se reiniciará puntaje")}
    {turno= 1;
console.log("Se reiniciará el turno")}

 if(totaltiro==7)
 {
 	alert("Perdiste")
 	{Punto= 1
 		console.log("Se reiniciará el puntaje")}
 		{turno= 1;
 			console.log("Se reiniciará turno")}
 }

  if (totaltiro==4 || totaltiro==5 || totaltiro==6 || totaltiro==8 || totaltiro==9 || totaltiro==10 )
   {Punto= 1
   	console.log("Has ganado un punto")}
 }
}