var form , player , game , gameState = 0 ,playerCount,database ; 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

}

function draw(){
  background("white");
  
   
    drawSprites();
  
}

