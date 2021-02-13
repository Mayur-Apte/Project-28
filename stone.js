class Stone{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA 
            pointB:pointB
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
            }
            this.stone = loadImage("images/stone.png");
            this.pointB = pointB
            this.stone = constraint.create(options);
        World.add(world,this.stone)
    }

    fly(){
        this.stone.bodyA = null;
    }

    display(){
        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
        }
        
        
       
    }
    
}