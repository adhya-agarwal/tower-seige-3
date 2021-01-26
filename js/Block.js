class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

       

      }
      display(){
        if (this.body.speed < 3){
          var pos = this.body.position;
    
          push()
              translate(pos.x,pos.y)
              rotate(this.body.angle)
              strokeWeight ("2")
              stroke ("white")
              fill ("turquoise")
              rectMode(CENTER);
              rect (0, 0 , this.width, this.height)
            pop()
        }
        else {
          World.remove (world, this.body)
          push()
          this.visibility = this.visibility-5
          tint (255, this.visibility)
          rect (0,0,this.width,this.height)
          pop()
        }
        if (this.visibility < 0 && this.visibility > -105){
          score=score+10;
        }
        
    
    
    }
    
    }
     

      