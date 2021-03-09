class Slingshot {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world,this.Slingshot);
    }

    display(){
        var A = this.Slingshot.bodyA.position;
        var B = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(A.x,A.y,B.x,B.y);

    }

}