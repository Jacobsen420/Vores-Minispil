/*vi tænker vi laver et spil med bolde som man skal spise
eller noget lignende
*/
  canvas = document.getElementById("canvas");
  this.canvas.width = 1000;
  this.canvas.height = 1000;

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
}
   firkant= new boks(650, 650, 100, 100, 10);
   firkant.draw();
