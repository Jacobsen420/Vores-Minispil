let modstander;
let fjender=[];
class fjende{

  constructor(x, y, bredde,dybde,hastighed){
  this.x = Math.random() * window.innerWidth;
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

  if (this.y < 1000)
  this.y += this.hastighed

}
static create(){
  new fjende(this.x,20,30,30,2);
console.log("hej")
}
create(){
  fjender.push(new fjende(this.x,20,20,20,2));
}

 }

 modstander= new fjende(this.x, 0, 100, 100, 1);


/*
- få modstander til at bevæge sig ned ad random.
- få spilleren til at absorbere modstander



- hvis det kan nås, så at man får point for at absorbere modstanderen.
*/
//du
