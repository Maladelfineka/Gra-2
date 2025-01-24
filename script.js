
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    color: "blue",
    speed: 20,
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height,)
}

function clearCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
};

document.addEventListener("keydown", (event) => {
    console.log(event);
    switch (event.key) {
        case "ArrowUp":
            if (player.y > 0) {
                player.y -= player.speed;
            }
            break;
        case "ArrowDown":
            if (player.y + player.height < canvas.height) {
                player.y += player.speed;
            }
            break;
        case "ArrowLeft":
            if (player.x > 0) {
                player.x -= player.speed;
            }
            break;
        case "ArrowRight":
            if (player.x + player.width < canvas.width) {
                player.x += player.speed;
            }
            break;
    }
});

function gameLoop() {
    clearCanvas();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

gameLoop();