
let modstander;
class fjende{
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

 modstander= new fjende(500, 200, 100, 100, 30);
