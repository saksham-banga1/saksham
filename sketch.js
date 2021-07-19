
var car,monster1,monster2,monster3,monster4,rockies,track,treasure, background , kick,kick2,treasurImg;
var carImg,monster, monster1Img, monster2Img, monster3Img, monster4Img,rockies,backgroundImg,game,home , trackImg, kickGroup,kick2Group;
var kickImg, kick2Img;
var gameState = 0;



function preload(){
  carImg = loadImage( "car.png")
  backgroundImg = loadImage("bike.png");
  trackImg=loadImage("track.jpg");
  kickImg = loadImage("kick1.png")
  kick2Img = loadImage("kick2.png")
  treasureImg = loadImage("treasure.png")
}

function setup(){
  createCanvas(900,500)
  

  game = new Game()
  game.start();
  
}




function draw(){

background(backgroundImg);



  if (gameState === 1) {
    //background("brown");
    background(trackImg);
    game.play();
  }
}


function spawnCart(){
  if(frameCount%60===0){
    cart = createSprite(450,0);
    cart.scale = 0.2
    cart.velocityY = 5;//need to work on velocity and change it as per the score
    cart.x = Math.round(random(200,550))
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1:cart.addImage(kickImg);
      break;
      case 2:cart.addImage(kick2Img);
      break;
      default:
        break;
    }
  }

}

function spawnTreasure(){
  if(frameCount%180===0){
    treasure = createSprite(450,0);
    treasure.addImage(treasureImg)
    treasure.scale = 0.1
    treasure.velocityY = 5;//need to work on velocity and change it as per the score
    treasure.x = Math.round(random(200,550))
    var rand = Math.round(random(1,2))
  }
}
