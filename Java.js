/*vi tænker vi laver et spil med bolde  som man skal spise
eller noget lignende
*/

canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-20 ;
canvas.height = window.innerHeight -30;


let firkant;
class boks {
constructor(x,y, brede,dybde,hastighed){
  this.x=x;
  this.y=y;
  this.brede=brede;
  this.dybde=dybde;
  this.hastighed=hastighed;


}

draw(){


  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";

  ctx.fillRect(this.x,this.y,this.brede,this.dybde);


}

move(e) {

  console.log(e.keyCode)

  if (e.keyCode == 37) {
    this.x -= this.hastighed
  }

  if (e.keyCode == 39) {
    this.x += this.hastighed
  }


  if (this.x < -20){
    this.x = innerWidth;
  }

  if (this.x > innerWidth){
    this.x = -20;
  }
 
}

}



 firkant= new boks(700, 650, 100, 100, 30);

 document.addEventListener('keydown', function(event) {
  firkant.move(event);

}
)




function loop() {
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
firkant.draw();
modstander.draw();
modstander.move();

for(let i=0; i < fjender.length; i++){
  fjender[i].draw();
  fjender[i].move();
}
}
setInterval(loop, 0)
setInterval(modstander.create, 2000);