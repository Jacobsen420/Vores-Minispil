 // her skriver vi vores variable  og array som vi bruger.
let modstander;
let fjender=[];

 // vores klasse med en constructor inde i
class fjende{

     //denne sonatructor er den som bliver brugt til at definere vores fjender
     //Vi kan se give den nogle værdier og definere ting som vi senere hen kan kalde
  constructor(x, yy, bredde,dybde,hastighed){
  this.x = Math.random(x) * (window.innerWidth - 120);
  this.yy = yy;
  this.bredde=bredde;
  this.dybde=dybde;
  this.hastighed=hastighed;

}
// her bliver vores fjender drawet, hvor vi giver den en firkant og en sort farve, og nogle variabler fra constructoren. Hvor vi senerehen giver firkanten nogle værdier i bredde, dybde osv.
draw(){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(this.x , this.yy, this.bredde,  this.dybde);
}




 // i move giver vi den en masse forklaring på hvordan den skal rykke sig, og hvor langt og hvorhen.
move() {
 //giver den en hastighed i y aksen, og siger at den skal stoppe med at bevæge sig ved 1391.
  if (this.yy < 1391)
  this.yy += this.hastighed



//her sender vi den væk i x aksen når den er forbi 1390
  if (this.yy > 1390)
  this.xx = 3000
  //her sender vi den væk i y aksen når den forbi 1390 (vi sætter den væk i y aksen fordi at hvis den bliver ved med at være i 1391, så bliver den ved med at giver firkanten en større bredde)

  if (this.yy > 1390)
  this.yy = -1000000



}


 // static er her for at fortælle at den specifikke fjende er en type for sig selv, hver gang den bliver lavet.
 // det vil sige, den starter med den normale y, men køre så selv ned ad i vores tilfælde.
   //hvor nye fjender også starter på den samme y, men højt sandsynligt på en anden x værdi og køre med den egen
   //y værdi istedet for at følge den ældre.



static create(){
  new fjende(this.x,0,100,100,1);

}

 // her bruger vi så metoden til at push som tilføjer nye ting ved slutningen af arrayet. push  ændre arrayets length og retunere den nyes length.
create(){
  fjender.push(new fjende(this.x,0,100,100,1));
}

 }
 // Her siger vi modstander som vi lavet en varible af tidligere er lige med new fjende, som vi giver nogle værdier.
 // vi skriver "this.x" fordi vi allerede har givet den en variable at køre med oppe i constructoren, som giver en tilfældig værdi inde for for vores window.innerwidth altså vorse skærm.

 modstander= new fjende(this.x, 0, 100, 100, 1);
