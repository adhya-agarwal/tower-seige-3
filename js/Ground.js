class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(700,685,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("beige");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1400,20);
    }
}