constructor(x,y, bredde,dybde,hastighed){
  this.x=x;
  this.y=y;
  this.bredde=bredde;
  this.dybde=dybde;
  this.hastighed=hastighed;
this.speedY=5

this.newPos = function() {
       this.x += this.speedX;
       this.y += this.speedY;
   }  
};
