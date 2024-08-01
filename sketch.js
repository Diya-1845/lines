
function setup() {
  createCanvas(400, 400);
  background(220);

  // Draw straight lines
  strokeWeight(2);
  stroke(7, 242, 211);
  line(50, 50, 350, 50); // Horizontal line
  line(50, 100, 350, 300); // Diagonal line

  // Draw dashed lines
  strokeWeight(2);
  stroke(255, 0, 0);
  drawDashedLine(50, 150, 350, 150, 10, 5); // Horizontal dashed line
  drawDashedLine(50, 200, 350, 350, 10, 5); // Diagonal dashed line

  // Draw dotted lines
  strokeWeight(4);
  stroke(0, 0, 255);
  drawDottedLine(50, 250, 350, 250, 10); // Horizontal dotted line
  drawDottedLine(50, 300, 350, 380, 10); // Diagonal dotted line
}

function drawDashedLine(x1, y1, x2, y2, dashLength, gapLength) {
  let distance = dist(x1, y1, x2, y2);
  let dashCount = distance / (dashLength + gapLength);
  let deltaX = (x2 - x1) / dashCount;
  let deltaY = (y2 - y1) / dashCount;

  for (let i = 0; i < dashCount; i++) {
    let startX = x1 + i * (deltaX + (deltaX * gapLength / dashLength));
    let startY = y1 + i * (deltaY + (deltaY * gapLength / dashLength));
    let endX = startX + deltaX;
    let endY = startY + deltaY;
    line(startX, startY, endX, endY);
  }
}

function drawDottedLine(x1, y1, x2, y2, gapLength) {
  let distance = dist(x1, y1, x2, y2);
  let dotCount = distance / gapLength;
  let deltaX = (x2 - x1) / dotCount;
  let deltaY = (y2 - y1) / dotCount;

  for (let i = 0; i < dotCount; i++) {
    let x = x1 + i * deltaX;
    let y = y1 + i * deltaY;
    point(x, y);
  }
}