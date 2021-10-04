/*vi tænker vi laver et spil med bolde som man skal spise
eller noget lignende
*/
  canvas = document.getElementById("canvas");
  canvas.width = 1900;
  canvas.height = 930;

  let xspeed= 4;
  let newspeed;
let firkant;
class boks {
  constructor(x,y, bredde,dybde,hastighed){
    this.x=x;
    this.y=y;
    this.bredde=bredde;
    this.dybde=dybde;
    this.hastighed=hastighed;

  }
  draw(){


    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";

    ctx.fillRect(this.x,this.y,this.bredde,this.dybde);
  }

  move(e) {

    console.log(e.keyCode)

    if (e.keyCode == 37) {
      this.x -= this.hastighed
    }

    if (e.keyCode == 39) {
      this.x += this.hastighed
    }


    if (this.x < -10){
      this.x = 1830;
    }

    if (this.x > 1830){
      this.x = -10;
    }

  }

}



newspeed=xspeed;
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


  //firkant.move();

}
setInterval(loop, 0)
