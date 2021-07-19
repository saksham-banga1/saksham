class Game{
  constructor(){

   
 
  }
 
  start(){
 
     if(gameState===0)
     {
      home = new Home();
      home.display();
 
     }
 
      car = createSprite(450,450,10,10);
      car.scale = 0.3
 
      car.addImage(carImg);
   
      monster = createSprite(200,590,10,10);
  }
 
  play(){
     home.hide()

     //Image(trackImg,0,0,900,500)
     spawnCart();
     spawnTreasure();

     
/*if(track.y>0){
  track.y = track.height/2
}*/
 
     car.velocityY = -3;
     
       if(keyDown(LEFT_ARROW)){
        
         car.x = car.x-2
         
       }
       else if(keyDown(RIGHT_ARROW)){
         
         car.x = car.x+2
       }
       /*else if(keyDown(UP_ARROW)){
        
        car.y = car.y-2
       }*/


      drawSprites();
  }
 }