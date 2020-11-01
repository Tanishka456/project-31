class Plinko {
    
    constructor(x,y,r){

        var options={

            isStatic = true
        }

        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

        }
        
    display();
}