class Paper{
  constructor (x,y,r) {
      var option={
          density:1,
          restitution:1,
          isStatic:false
      }

      this.body=Bodies.circle(x,y,r,option)
      this.r = r
      this.image=loadImage("paper.png")
      World.add(world, this.body)
  }

    display(){
      push()
			translate(this.body.position.x,this.body.position.y);
		  rotate(this.body.angle)	
			fill(255)
			imageMode(RADIUS);
			image(this.image, 0,0,this.r , this.r)
			
			pop()
            
    }


}