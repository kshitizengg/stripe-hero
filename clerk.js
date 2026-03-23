const canvas = document.getElementById('flickercanvas');
const ctx = canvas.getContext('2d');

const squaresize=4;
const gap=6;

canvas.width = 200;
canvas.height = 320;

const col= Math.floor(canvas.width/(gap+squaresize));
const row = Math.floor(canvas.height/(gap+squaresize));

const maxopacity=0.3;
const flickerchance = 0.02;

let isHovered = false;

let growthradius=0;
const growthspeed = 0.3;

const centerX= (col-1)/2;
const centerY = (row-1)/2;


const grid= new Array(col*row).fill(0);

for(let i=0;i<grid.length;i++){
  grid[i]=Math.random()*maxopacity;
}


function update(){

    growthradius+=growthspeed;

    
    for(let i=0; i<grid.length; i++){
            if(Math.random()<flickerchance){
                grid[i]=Math.random()*maxopacity;
            }
        }
    
}

function draw(){
    if (!isHovered) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);

    

    for(let x=0;x<col;x++){
        for(let y=0;y<row;y++){


      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only draw cells inside the growing radius
      if (distance > growthradius) continue;


            const index=x*row + y;
            
            const opacity = grid[index];
            

            ctx.fillStyle= `rgba(0,255,0, ${opacity})`;
            ctx.fillRect(x*(squaresize+gap), y*(squaresize+gap), squaresize, squaresize);

        }
    }


}

function animate(){
    update();
    draw();
    requestAnimationFrame(animate);
}

animate(setInterval);

canvas.addEventListener('mouseenter', () => {
    isHovered = true;
    
   draw();         
  });
  
  canvas.addEventListener('mouseleave', () => {
    isHovered = false;
    growthradius=0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

