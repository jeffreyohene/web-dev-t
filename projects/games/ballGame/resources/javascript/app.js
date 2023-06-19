let ball = document.getElementById('float-circle');

// Write your code below
function goUp() {
  ball.style.bottom = '450px'
}

function goDown() {
  ball.style.bottom = '50px'
}

document.addEventListener('keydown', goUp)
document.addEventListener('keyup', goDown)