class Tree{
    constructor(width,height){
        //this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png")

        //World.add(world,this.body)
    }
    display(){ 
        //var pos = this.body.position
        imageMode(CENTER)
        image(this.image,850,346,this.width,this.height);
    }
}