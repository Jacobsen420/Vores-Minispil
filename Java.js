/*vi tænker vi laver et spil med bolde  som man skal spise
eller noget lignende
*/

//her tegner vi selve vores spilleramme, eller det "område" man kan spille på, som så er hele skærmen i fullscreen
canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-20 ;
canvas.height = window.innerHeight -30;

//her igen laver vi vores variable
let firkant;

//en klasse til vores firkant som vi skal kunne bevæge
class boks extends fjende{

  // vores constructors til vores firkant, med nogle variable inden i.
  // vi prøvede at sætte de 2 classes sammen lidt ligesom at lave en child til firkanten
  // ved hjælp af "extends" og "super" som extender klassen med den anden, og hvor super bruges til
  // at hive variablerne brugt i den "voksne" klasse hen til "børne" klassen
  // det fungerede så ikke...
  constructor(x,y, brede,dybde,hastighed,yy,bredde){
  super(yy,bredde)
  this.x=x;
  this.y=y;
  this.brede=brede;
  this.dybde=dybde;
  this.hastighed=hastighed;
  }

// her bliver vores fjender drawet, hvor vi giver den en firkant og en sort farve, og nogle variabler fra constructoren.
// Hvor vi senerehen giver firkanten nogle værdier i bredde, dybde osv.
draw(){


  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";

  ctx.fillRect(this.x,this.y,this.brede,this.dybde);


}

// vi laver en move event metode, hvor vi bruger ekeyCode som fortæller hvilken key vi bruger. 
// keycode 37 er venstre piltast og keycode 39 er højre piltast
move(e) {


//bevæger vores firkant til venstre med "this.hastighed" som står længere nede
  if (e.keyCode == 37) {
    this.x -= this.hastighed
  }

//bevæger vores firkant til højre med "this.hastighed" som står længere nede
  if (e.keyCode == 39) {
    this.x += this.hastighed
  }

// denne holder vores firkant inde på banen hvis du prøver at køre den ud i venstre side og
// vil derefter få firkanten til at spawn i højre side
  if (this.x < -20){
    this.x = innerWidth;
  }

// denne holder vores firkant inde på banen hvis du prøver at køre den ud i højre side og
// vil derefter spawn den på venstre side
  if (this.x > innerWidth){
    this.x = -20;
  }

}


}


 // Her siger vi modstander som vi lavet en varible af tidligere er lige med new fjende, som vi giver nogle værdier.
 // vi skriver "this.x" fordi vi allerede har givet den en variable at køre med oppe i constructoren, 
 // som giver en tilfældig værdi inde for for vores window.innerwidth altså vorse skærm.
 firkant = new boks(700, 650, 100, 100, 30);

 // dette er det der får vores move(e) metode til at due. så snart man trykker den specifikke "key" ned. vil de gøre
 // som vi har fået den til.
 document.addEventListener('keydown', function(event) {
  firkant.move(event);

}
)




// dette er vores loop, som får spillet til at køre. så vi får den til at genudskrive canvasset så spillet kan køre.
// herefter får vi firkant til at køre draw metoden vi lavede, plus modstanderen som får både draw og move metoden,
// fra modstande.js
function loop() {
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
firkant.draw();
modstander.draw();
modstander.move();

//her har vi vores forloop som gør vores fjender spawner forevigt basicly.
// vi bruger så den samme draw og move metode som med modstander, da vi skal have dem til at bevæge
// på samme måde hvor de spawner random på x aksen, og i toppen af canvasset i y aksen.
for(let i=0; i < fjender.length; i++){
  fjender[i].draw();
  fjender[i].move();
}
}
//her sætter vi så hele vores function i loop, hvor vi bruger setInterval metoden til at kalde vores function, 
// i tidsintervaldet, hvilket i vores tilfælde er 0.
setInterval(loop, 0)
//her sætter vi så bare et nyt interval hvor den spawner vores fjender.
setInterval(modstander.create, 2000);
