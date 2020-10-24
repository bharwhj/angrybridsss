class chain {
 constructor(BodyA,BodyB)
 {
    var options = {
      "stiffness":0.5,
       "length": 1,
      bodyA:BodyA,
      bodyB:BodyB,

      
             
    
  



    }
     this.chain=constraint.create(options)
     World.add(world,this.chain)
 
 


}
 display() {

var pointA = this.chain.bodyA.position
var pointB = this.chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)







}


}