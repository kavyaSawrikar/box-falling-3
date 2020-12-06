class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
  display(){
    //  we wanted to see continuous change in speed of the pig and whatever is in draw() gets called over and over -> found that display() of pig is in draw()
         
    
        console.log(this.body.speed);
        console.log(this.body.visibility)
        // reducing visibility by 5 everytime
       
        if(this.body.velocity.x< 3){
          super.display(); // parents display for rest of the code
          
        }else{
          //World.remove(world, this.body); //if you apply this the score keeps increasing as velocity of body cannot be made zero in score
          
          push(); // applying below settings to body such that only box disappears
         this.visibility -=  5;
          tint(255, this.visibility);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop(); // restoring the original settings
        }
      }

      
      Score(){ 
        /*if(this.body.velocity.x>3 && this.visibility<0 && this.visibility > -105) {
          score = score+1;

          if(this.body.velocity.y<0){
            this.body.velocity.x = 0;
          }*/
          if((this.body.position.y>600 && this.body.position.y<604) || this.body.position.x===1199/*Matter.Detector.canCollide(this.body,ground2)*/){
            score = score+1; 
          }
       }
       
      } 
     
        
      


