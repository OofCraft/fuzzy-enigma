class Paper{

    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
            //isStatic:true
        }
        this.body=Bodies.circle(x,y,100,options)
        this.body.position.x=x;
        this.body.position.y=y;
        this.width=width;
        this.height=height;
        World.add(world, this.body)
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y, this.body.radius)


    }
}