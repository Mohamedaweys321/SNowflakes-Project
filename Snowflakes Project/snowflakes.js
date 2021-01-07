class SnowFlakes{
constructor(){
    this.x=random(0,2000);
    this.y=random(0,800);
    this.image=loadImage("Images/snowflakes.png")
}
update(){
    this.y=this.y+10;
    if(this.y>800){
        this.y=random(0,800);
        this.x=random(0,2000);
    }
}
display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,20,20);
}
}
