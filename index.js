const moveLeft = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = moveLeft.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        moveLeft.style.left = `${left - 1}px`;
    }
  }

  const moveRight = document.getElementById("dodger");
function moveDodgerRight() {
    const rightNumbers = moveRight.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left > 0) {
        moveRight.style.left = `${left + 1}px`;
    }
  }
