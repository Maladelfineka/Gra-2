const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    color: "pink",
    speed: 20,
};

const point = {
    x: Math.random() * (canvas.width - 20), 
    y: Math.random() * (canvas.height - 20), 
    size: 20,
    color: "green"
}
let score = 0

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height,)
}

function drawPoint() {
    ctx.fillStyle = point.color;
    ctx.beginPath();
    ctx.arc(
        point.x + point.size / 2,
        point.y + point.size / 2,
        point.size / 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
}


function clearCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
};

function checkCollision() {
    if (
        player.x < point.x + point.size &&
        player.x + player.width > point.x &&
        player.y < point.y + point.size &&
        player.y + player.height > point.y
    ) {
        score++;
        scoreDisplay.innerHTML = `Score: ${score}`;


        point.x = Math.random() * (canvas.width - point.size);
        point.y = Math.random() * (canvas.height - point.size);
    }
}

document.addEventListener("keydown", (event) => {
    console.log(event);
        if (event.key =="ArrowUp"){
            if (player.y > 0) {
                player.y -= player.speed;
            }
        }
        if (event.key =="ArrowDown"){
            if (player.y + player.height < canvas.height) {
                player.y += player.speed;
            }
        }
        if (event.key =="ArrowLeft"){
            if (player.x > 0) {
                player.x -= player.speed;
            }
        }
        if (event.key =="ArrowRight"){
            if (player.x + player.width < canvas.width) {
                player.x += player.speed;
            }
        }
        
        
    }
);

function gameLoop() {
    clearCanvas();
    drawPlayer();
    drawPoint();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

gameLoop();