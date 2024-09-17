class Cpu{
    constructor(c, bola){
        this.c = c;
        this.bola = bola;
        this.largura = 50;
        this.altura = 100;
        this.x=this.c.canvas.width - this.largura - 5;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        this.meioY = Math.random() * this.altura;

        
        this.vermelho = new Image ();
        this.vermelho.src = "assets/vermelho.png";
        this.vermelho.width=50;
        this.vermelho.height=100;
        this.vermelho.addEventListener('load',()=>{
           this.draw()
        })
       
        
    }
    management(){
        if ((this.bola.dirX > 0 ) && (this.bola.x > (this.c.canvas.width/2)))
        {
            if (this.bola.y +  (this.bola.altura/2) > (this.y + this.meioY))
                this.y += this.vel
            if (this.bola.y +  (this.bola.altura/2) < (this.y + this.meioY))
                this.y -= this.vel
        }
        else
        {
            if(this.y > this.inicioY){
                this.y -= this.vel
            }
            if (this.y < this.inicioY){
                this.y += this.vel
            }
        }
         
          if ((this.x <= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x) &&((this.y +
         this.altura >= this.bola.y ) && (this.y <= this.bola.altura + this.bola.y)))
              {
                  this.bola.dirX = -1;
                  this.bola.dirY = ((this.bola.y + (this.bola.altura/2)) - (this.y + (this.altura/2)))/16;
                  this.maioY = Math.random() * this.altura;
              }
    }
    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.drawImage(this.vermelho, this.x, this.y, this.vermelho.width, this.vermelho.height);
    }
}