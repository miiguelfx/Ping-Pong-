class Pad{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.largura = 50;
        this.altura = 100;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
         
        this.amarelo = new Image ();
        this.amarelo.src = "assets/amarelo.png";
        this.amarelo.width=50;
        this.amarelo.height=100;
        this.amarelo.addEventListener('load',()=>{
           this.draw()
        })
        
        
    }
    management(){
        
        if (this.keyboard.cima) 
            if (this.y > 0)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura) 
                this.y+=this.vel;
    }
    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.drawImage(this.amarelo, this.x, this.y, this.amarelo.width, this.amarelo.height);
    }
}