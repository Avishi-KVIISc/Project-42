var iss, spaceCraft;
var hasDocked = false;

function preload(){
  bgImg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spaceCraft1 = loadAnimation("spaceCraft1.png");
  spaceCraft2 = loadAnimation("spaceCraft2.png");
  spaceCraft3 = loadAnimation("spaceCraft3.png");
  spaceCraft4 = loadAnimation("spaceCraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spaceCraft = createSprite(345, 340, 50, 50);
  spaceCraft.addAnimation("off", spaceCraft1);
  spaceCraft.addAnimation("on", spaceCraft2);
  spaceCraft.addAnimation("left", spaceCraft3);
  spaceCraft.addAnimation("right", spaceCraft4);
  spaceCraft.changeAnimation("off");
  spaceCraft.scale = 0.18;
}

function draw() {
  background(bgImg);

  if(!hasDocked){

    spaceCraft.x = spaceCraft.x + Math.round(random(-1,1));
    //spaceCraft.y = 340;
    
    if(keyDown("left")){
      spaceCraft.changeAnimation("left");
      spaceCraft.x = spaceCraft.x - 3;
    }

    if(keyDown("right")){
      spaceCraft.changeAnimation("right");
      spaceCraft.x = spaceCraft.x + 3;
    }

    if(keyDown("down")){
      spaceCraft.changeAnimation("on");
    }

    if(keyDown("up")){
      spaceCraft.y = spaceCraft.y - 3;
    }
  }

  if(spaceCraft.x <= 345 && spaceCraft.y <= 275){
    textSize(35);
    fill("white");
    text("DOCKING SUCCESSFUL", 200, 370);
    spaceCraft.setVelocity(0, 0);
    hasDocked = true;
  }

  console.log(spaceCraft.x + " " + spaceCraft.y);

  drawSprites();
}