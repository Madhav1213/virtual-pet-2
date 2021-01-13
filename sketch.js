var dog,HappyDog,foodS,foodStock;
var database;
var dog_image1 , dog_image2;
var score;
var button1,button2;
var lastFed,fedTime;


function preload()
{
  dog_image1 = loadImage("images/dogImg.png");
  HappyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(600,600);
  database = firebase.database()
  dog = createSprite(350,300,30,30);
  dog.addImage(dog_image1);
  dog.scale = 0.4;
  fedTime=database.ref("FeedTime");
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
}


function draw() {  
 background(46,139,87);
 
  drawSprites();
  fill(255,255,254)
  textSize(15);
  if(lastFed>=12){  
  text("Last Feed :"+ lastFed%12 + "PM" ,350,30);
  }else if(lastFed===0){
    text("Last Fed : 12 AM" , 350,30);
  }else{
    text("Last Fed : 12 AM" , 350,30);
  }
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}



