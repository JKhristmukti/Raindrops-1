class BaseClass{
    constructor(x,y,width,height,stroke,fill){
        this.body = Bodies.rectangle(x,y,width,height);
        this.body.velocityY=8;
        this.width=width;
        this.height=height;
        this.stroke=stroke;
        this.fill=fill;
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        strokeWeight(1);
        stroke(this.stroke);
        fill(this.fill);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}