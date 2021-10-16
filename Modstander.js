let modstander;
let fjender=[];
class fjende{

  constructor(x, y, bredde,dybde,hastighed){
  this.x = Math.random(x) * (window.innerWidth - 100);
  this.y = y;
  this.bredde=bredde;
  this.dybde=dybde;
  this.hastighed=hastighed;

}
draw(){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(this.x , this.y, this.bredde,  this.dybde);
}




move() {

  if (this.y < 1300)
  this.y += this.hastighed

}
static create(){
  new fjende(this.x,0,100,100,1);
console.log("hej")
}
create(){
  fjender.push(new fjende(this.x,0,100,100,1));
}

 }

 modstander= new fjende(this.x, 0, 100, 100, 1);
