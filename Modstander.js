// her skriver vi vores variabler / og array som vi bruger.
let modstander;
let fjender=[];

// vores klasse med nogle constructors inde i
class fjende{

  //disse constructors er dem som bliver brugt til at lave vores fjender
  //disse constructor variabler kan så kaldes igen senere i koden ved hjælp af "this" og så variablens navn.
  constructor(x, yy, bredde,dybde,hastighed){
  this.x = Math.random(x) * (window.innerWidth - 120);
  this.yy = yy;
  this.bredde=bredde;
  this.dybde=dybde;
  this.hastighed=hastighed;
  }

// her bliver vores fjender drawet, hvor vi fortæller dem de har de længder som vores variable oppe i
// constructoren har fået, hvilket ikke er noget endnu
draw(){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(this.x , this.yy, this.bredde,  this.dybde);
  }


// i move giver vi den en masse forklaring på hvordan den skal rykke sig, og hvor langt og hvorhen.
// i dette tilfælde rykker den sig ned ad, til den rammer bunden af skærmen, og bliver sendt væk så den ikke er i vejen
move() {

  if (this.yy < 1391)
  this.yy += this.hastighed


  if (this.yy > 1390)
  console.log("hej");

  if (this.yy > 1390)
  this.xx = 3000

  if (this.yy > 1390)
  this.yy = -1000000
  }

/* 
  static er her for at fortælle at den specifikke fjende er en type for sig selv, hver gang den bliver lavet.
  det vil sige, den starter med den normale y, men køre så selv ned ad i vores tilfælde.
  hvor nye fjender også starter på den samme y, men højt sandsynligt på en anden x værdi og køre med den egen
  y værdi istedet for at følge den ældre.
*/

static create(){
  new fjende(this.x,0,100,100,1);
  }

// her bruger vi så metoden til at push enemy, altså at lave ham og sende ham ud.
create(){
  fjender.push(new fjende(this.x,0,100,100,1));
  }


}

// til sidst bliver får fjende klasse nogle tal den kan bruge som får det hele til at køre sammen.
// vi skriver "this.x" fordi vi allerede har givet den en variable at køre med oppe i constructoren.
// det var nemmere end at skrive den vær gang man skulle bruge "this.x"
modstander = new fjende(this.x, 0, 100, 100, 1);
