let img;
let aimg;
let alien = [];
let cloud1img;
let cloud = [];
let c1timer = 150;
let a1timer = 100;
let timeCheck;
let score;

function preload(){
  img = loadImage("ship.png");
  aimg = loadImage('Alien/Enemy1.png');
  cloud1img = loadImage('cloud.png');

}


function setup() {
  createCanvas(800, 800);
  
  timeCheck = 0;
  score = 0;
}

function draw() {
  background(0, 150, 240);
  noSmooth();
  
  textSize(20);
  text("Timer", 10, 20);
  currentTime = floor(millis()/1000);
  text(currentTime, 10, 50);
  
  
  CloudOneSpawn();
  alien1spawn();
  
  
  for(let c = 0; c < cloud.length; c++){
  cloud[c].move();
  cloud[c].show();
  }

  
  
  for(let i = 0; i < alien.length; i++){
      
    alien[i].move();
    alien[i].show();
    }
  
  

  
  image(img, mouseX - 50, 700, 100, 100);
  
    console.log(c1timer);

  

}


class Alien{
  constructor(){
    this.x = random(30, 750);
    this.y = random (5, -250);
  }
  
  show() {
    fill(0,255,0);
    // ellipse(this.x, this.y, 50);
    image(aimg, this.x, this.y, 50,50);
  }
  
  move() {
    this.x = this.x + (random(-5,5));
    this.y = this.y + 5
  }
}

class CloudOne{
  constructor(){
    this.x = random(100,600);
    this.y = -400;
  }
  
  show(){
  image(cloud1img, this.x, this.y, 400,400);
  }
  
  move(){
    this.y = this.y + 2;
    
  }
  
}

function CloudOneSpawn(){
  if(c1timer > 0){
    c1timer = c1timer - 1;
  }
  
  if(c1timer == 0){
    cloud.push(new CloudOne());
    
    c1timer = 150;
  }
}


function alien1spawn(){
    if(a1timer > 0){
    a1timer = a1timer - 1;
  }


  
if(a1timer == 0){
    alien.push(new Alien());
  a1timer = 20;
  }
}

