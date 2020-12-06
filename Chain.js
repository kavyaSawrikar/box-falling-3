class Chain{
    constructor(bodyA, bodyB){
        var options = {
            //JSON format of storing data
            'bodyA': bodyA,
            'bodyB': bodyB,
            'length': 10, // distance between bodies
            'stiffness': 0.04 // it will be of elastic material
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        push();
        stroke("purple");
        strokeWeight(4);
        // line instruction needs x, y coordinate of starting point and the end point
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}