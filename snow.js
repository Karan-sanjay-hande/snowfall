class Snow 
{
  constructor(x,y,r)
  {
    var options=
    {
      isStatic:false,
      'restitution':0.05,
      'density':0.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    this.image = loadImage("snow4.webp");
    World.add(world,this.body);
  }

  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle;

   push();
   translate(pos.x,pos.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,40,40);
   pop();
    
  }
  
}