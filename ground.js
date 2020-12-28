class GROUND{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(200,380,400,40,options)
        World.add(myworld,this.body)
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,400,40)
    }
}