//Creating variable for hider1(PLAYING CHARACTER).
var hider1;

//Creating variables for hide2 - hider5(NON - PLAYING CHARACTER).
var hider2, hider3, hider4, hider5;
var wall1, wall2, wall3;

function preload() {
  //Adding image for the slantlines.
  img = loadImage("Untitled.png")
}

function setup() {
  //Create canvas with width - 900, height - 720
  createCanvas(900,720);

  //PLAYERS
  
  // PC
  hider1 = createSprite(400, 200, 20, 20);
  hider1.shapeColor = color("blue");

  // NPC
  hider2 = createSprite(100, 200, 20, 20);
  hider2.shapeColor = color("blue");
  hider2.velocityX = 2;
  hider2.velocityY = 2;

  //MAZE

  //Edges
  edge1 = createSprite(450,10,900,20);
  edge1.shapeColor = color("orange");

  edge2 = createSprite(10,360,20,720);
  edge2.shapeColor = color("orange");
  
  edge3 = createSprite(450,710,900,20);
  edge3.shapeColor = color("orange");
  
  edge4 = createSprite(890,360,20,720);
  edge4.shapeColor = color("orange");

  //Horizontal or vertical lines.
  wall1 = createSprite(60,150,20,200);
  wall1.shapeColor = color("black");

  wall2 = createSprite(400,60,300,20)
  wall2.shapeColor = color("black");

  wall3 = createSprite(300,150,150,20);
  wall3.shapeColor = color("black");

  wall4 = createSprite(400,240,120,20);
  wall4.shapeColor = color("black");

  wall5 = createSprite(200,320,20,150);
  wall5.shapeColor = color("black");

  wall6 = createSprite(160,390,100,20);
  wall6.shapeColor = color("black");

  wall7 = createSprite(110,455,20,150);
  wall7.shapeColor = color("black");

  wall8 = createSprite(100,600,150,20)
  wall8.shapeColor = color("black");

  wall9 = createSprite(400,500,300,20)
  wall9.shapeColor = color("black");

  wall10 = createSprite(400,570,20,150)
  wall10.shapeColor = color("black");

  wall11 = createSprite(620,650,20,100)
  wall11.shapeColor = color("black");

  //Slant lines
  wall12 = createSprite(740,600,20,20)
  wall12.addImage("img",img)
}

function draw() {
  // Background color is green.
  background("green");  

  // If the arrow keys are pressed then they move in their respective directions.
  if(keyDown("UP_ARROW")){
    hider1.y-= 4;
  }

  if(keyDown("DOWN_ARROW")){
    hider1.y+= 4;
  }

  if(keyDown("RIGHT_ARROW")){
    hider1.x+= 4;
  }

  if(keyDown("LEFT_ARROW")){
    hider1.x-= 4;
  }

  hider1.bounceOff(wall1);
  hider1.bounceOff(wall2);
  hider1.bounceOff(wall3);
  hider1.bounceOff(wall4);
  hider1.bounceOff(wall5);
  hider1.bounceOff(wall6);
  hider1.bounceOff(wall7);
  hider1.bounceOff(wall8);
  hider1.bounceOff(wall9);
  hider1.bounceOff(wall10);
  hider1.bounceOff(wall11);
  hider1.bounceOff(wall12);

  hider1.bounceOff(edge1);
  hider1.bounceOff(edge2);
  hider1.bounceOff(edge3);
  hider1.bounceOff(edge4);

  hider2.bounceOff(wall1);
  hider2.bounceOff(wall2);
  hider2.bounceOff(wall3);
  hider2.bounceOff(wall4);
  hider2.bounceOff(wall5);
  hider2.bounceOff(wall6);  
  hider2.bounceOff(wall7);
  hider2.bounceOff(wall8);
  hider2.bounceOff(wall9);
  hider2.bounceOff(wall10);
  hider2.bounceOff(wall11);
  hider2.bounceOff(wall12);

  hider2.bounceOff(edge1);
  hider2.bounceOff(edge2);
  hider2.bounceOff(edge3);
  hider2.bounceOff(edge4);

  drawSprites();

}
