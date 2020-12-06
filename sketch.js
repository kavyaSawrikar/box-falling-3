const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, holder;
var slingshot;
var score = 0;

var a;
var circles=[];
function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)

  box1=new Box(800,200,50,50);
  box2=new Box(800,200,50,50);
  box3=new Box(800,200,50,50);

  box6=new Box(750,200,50,50);
  box7=new Box(750,200,50,50);

  box8=new Box(700,200,50,50); 
  
  box9=new Box(850,200,50,50);
  box10=new Box(850,200,50,50);

  box11=new Box(900,200,50,50)
 
  ground=new Ground(800,400,300,20)

  box12=new Box(1100,200,50,50)
  box13=new Box(1100,200,50,50)

  box14=new Box(1150,200,50,50)

  box15=new Box(1050,200,50,50)

  ground1=new Ground(1100,250,155,20)

  ground2=new Ground(600,800,1200,30)

  polygon=new Polygon(200,400)

  holder=new Holder(450,300,25,25)

  slingshot=new Chain(polygon.body,holder.body)
}

function draw() {
  //camera.zoom=camera.zoom+1

  Engine.update(engine);

  background(0);  
  

  /*if(Matter.Detector.canCollide(box.body, polygon.body)){
    score = score +1;
  }
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 */

 drawSprites();
 
 box1.display();
 box1.Score();
 box2.display();
 box2.Score();
 box3.display();
 box3.Score();
 box6.display();
 box6.Score();
 box7.display();
 box7.Score();

 box8.display()
 box8.Score();

 box9.display()
 box9.Score();
 box10.display()
 box10.Score();

 box11.display()
 box11.Score();

 box12.display()
 box12.Score();
 box13.display()
 box13.Score();
 box14.display()
 box14.Score();

 box15.display()
 box15.Score();

 ground.display()
 ground1.display()
 ground2.display()

 polygon.display()

 slingshot.display()

 holder.display()

 fill("pink")
 text("SCORE : "+score,740,40)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
  slingshot.fly();
}
*/
/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
*/