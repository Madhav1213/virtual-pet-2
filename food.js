class Food {
    constructor(){
      this.FoodStock();
      this.lastFed();
      this.foodObj();
      this.milkBottle();
    }

    display(){
      milkBottle = loadImage("images/Milk.png");
      
      var x = 80 , y = 90;

      imageMode (CENTER);
      image(milkBottle,720,220,70,70)

      if(this.foodStock!==0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10===1){
                  x=80
                  y=y+50
              }
              image(this.image,x,y,50,50);
              x = x+30;
        }
      }
    }

    getFoodStock(){
       feed=createButton("Feed The Dog");
       feed.position(700,95);
       feed.mousePressed(feedDog);

       addFood=createButton("Add Food");
       addFood.position(800,95);
       addFood.mousePressed(addFoods)
    }
    updateFoodStock(){

    }   
    deductFoodStock(){

    }
    
}