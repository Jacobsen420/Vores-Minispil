let modstander;
let fjender=[];
class fjende{

  constructor(x, yy, bredde,dybde,hastighed){
  this.x = Math.random(x) * (window.innerWidth - 120);
  this.yy = yy;
  this.bredde=bredde;
  this.dybde=dybde;
  this.hastighed=hastighed;

}
draw(){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(this.x , this.yy, this.bredde,  this.dybde);
}



move() {

  if (this.yy < 1391)
  this.yy += this.hastighed

  if(this.yy>100)
firkant(this.brede+=10)


  if (this.yy > 1390)
  this.xx = 3000

  if (this.yy > 1390)
  this.yy = -1000000



}



static create(){
  new fjende(this.x,0,100,100,1);

}
create(){
  fjender.push(new fjende(this.x,0,100,100,1));
}

 }

 modstander= new fjende(this.x, 0, 100, 100, 1);
