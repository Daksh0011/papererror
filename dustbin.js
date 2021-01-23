class dustbin{
    constructor(x,y,height,width)
    {
        var options = {
           isStatic:true
       } 
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image = loadImage("images/dust 2.png")
        World.add(world,this.body)
    }
    
display(){
        var pos = this.body.position
       
        rectMode(CENTER)
       fill(102, 153, 153)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,33,33);
        rect(pos.x,pos.y,this.width,this.height)
        
}

}