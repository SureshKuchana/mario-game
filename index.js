console.log("==================== loaded.. ============================");

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

// Player class
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 30;
    this.height = 30;
  }

  // to draw the player object
  draw(){
    c.fillStyle = "red"; 
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // update player's properties
  update(){
    this.draw();
    this.position.y += this.velocity.y;

    if(this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

const player = new Player();


function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}

animate()