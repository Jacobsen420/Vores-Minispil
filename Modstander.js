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
  new fjende(this.x,20,30,30,2);
console.log("hej")
}
create(){
<<<<<<< HEAD
  fjender.push(new fjende(this.x,20,20,20,2));
=======
  fjender.push(new fjende(20, 20, 20, 20, 2));
>>>>>>> 0be14f6cc465ff542fda4d2d82a25c8621211450
}

 }

 modstander= new fjende(this.x, 0, 100, 100, 1);
 