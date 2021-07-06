var bg,bg2,bg3,bg4,form,system,code,security;
var jojo,jojoImg;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  
  bg2=loadImage("city.jpg")

  jojoImg=loadImage("solvee.png")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
   jojo=createSprite(220,270)
   jojo.addImage(jojoImg)
   jojo.scale=0.6

}

function draw() {
  background("pink");
  clues();
  security.display();
  textSize(20);
  fill("white");
  //text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    jojo.hide()
    /*fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 450);*/
    
  }

  drawSprites()
}