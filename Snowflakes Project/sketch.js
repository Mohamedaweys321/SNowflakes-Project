var snowflakes=[]
var timer=60;
var score=0;
function preload() {
  bg=loadImage("Images/snowbackground.jpg");

  santaImg=loadImage("santa2.png");
  candyImg= loadImage("Images/candy.png");
}
function setup() {
  createCanvas(2000,800);
  for(var i=0;i<15;i++){
    snowflakes.push(new SnowFlakes())
  }
  edges= createEdgeSprites();
  santa = createSprite(200,750,50,50);
  santa.addImage(santaImg);
}
function draw() {
  background(bg);
  timer=timer-0.05;
  textSize(30);
  fill("white");
  text("TIME REMAINING:"+Math.round(timer),1000,150);
  text("SCORE:"+score,1000,200);
  for(var i =0;i<snowflakes.length;i++){
    snowflakes[i].display();
    snowflakes[i].update();
  }
  if(keyDown("space")){
    santa.velocityY=-12;
  }
  santa.velocityY=santa.velocityY+0.5;
  camera.position.x= santa.x;
  santa.collide(edges);
  spawnCandy();
  drawSprites();
}
function spawnCandy(){
  if(frameCount% 180 === 0){
    var candy= createSprite(2000,600,20,20);
    candy.addImage(candyImg);
    candy.velocityX=-3;
    candy.scale=0.1;
    candy.lifetime=700;

  }
}
