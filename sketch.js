var ship,ship;
var sea ,sea1;
function preload(){
ship1=loadAnimation("ship=1.png.","ship-2.png","ship-3.png","ship-4.png")
sea1=loadAnimation("sea.png")
}

function setup(){
createCanvas(600,500);

//creating the sea
sea=createSprite(600,300)
sea.addAnimation("runing",sea1)
sea.scale=0.5;
sea.veloctyX=-1;

//adding scale and position to ship 
ship.scale=0.25;
ship.x=90;
ship.y=300;
}

function draw() {
  background("blue");
if(keyDwon("enter")){
ship.veloctyX=5;
}
if(keyDwon("left")){
  ship.veloctyX=5;
}
if(keyDwon("space")){
  ship.veloctyX=0;
}
if(sea.x<0){
  sea.x=sea.widht/2;

//stop ship from falling dwon
ship.collied(edges[3])
drawSprites();
}






}