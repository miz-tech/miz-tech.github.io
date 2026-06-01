let t;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(220 + random(-3, 3)); 
  

  t = millis() * 0.003; 

  let s1 = 100 + sin(t * 3) * 40; 
  let s2 = 100 - sin(t * 3) * 40;

  let amt1 = (sin(frameCount * 0.05) + 1) / 2;
  let amt2 = (cos(frameCount * 0.05) + 1) / 2;
  
  let w = color(255); 

  noStroke();

  // ====== 1번째 줄 ======
  fill(lerpColor(color(255, 0, 0), w, amt1)); square(0, 0, 100);
  push(); translate(50, 50); rotate(t); fill(lerpColor(color(0, 255, 255), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(255, 165, 0), w, amt1)); square(100, 0, 100);
  push(); translate(150, 50); rotate(-t); fill(lerpColor(color(0, 90, 255), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();
  
  fill(lerpColor(color(255, 255, 0), w, amt1)); square(200, 0, 100);
  push(); translate(250, 50); rotate(t); fill(lerpColor(color(0, 0, 255), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(0, 255, 0), w, amt1)); square(300, 0, 100);
  push(); translate(350, 50); rotate(-t); fill(lerpColor(color(255, 0, 255), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();
  
  fill(lerpColor(color(0, 128, 128), w, amt1)); square(400, 0, 100);
  push(); translate(450, 50); rotate(t); fill(lerpColor(color(255, 127, 127), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(128, 0, 128), w, amt1)); square(500, 0, 100);
  push(); translate(550, 50); rotate(-t); fill(lerpColor(color(127, 255, 127), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();

  // ====== 2번째 줄 ======
  fill(lerpColor(color(0, 255, 255), w, amt1)); square(0, 100, 100);
  push(); translate(50, 150); rotate(t); fill(lerpColor(color(255, 0, 0), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(0, 90, 255), w, amt1)); square(100, 100, 100);
  push(); translate(150, 150); rotate(-t); fill(lerpColor(color(255, 165, 0), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();
  
  fill(lerpColor(color(0, 0, 255), w, amt1)); square(200, 100, 100);
  push(); translate(250, 150); rotate(t); fill(lerpColor(color(255, 255, 0), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(255, 0, 255), w, amt1)); square(300, 100, 100);
  push(); translate(350, 150); rotate(-t); fill(lerpColor(color(0, 255, 0), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();
  
  fill(lerpColor(color(255, 127, 127), w, amt1)); square(400, 100, 100);
  push(); translate(450, 150); rotate(t); fill(lerpColor(color(0, 128, 128), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(127, 255, 127), w, amt1)); square(500, 100, 100);
  push(); translate(550, 150); rotate(-t); fill(lerpColor(color(128, 0, 128), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();

  // ====== 3번째 줄 ======
  fill(lerpColor(color(200, 50, 50), w, amt1)); square(0, 200, 100);
  push(); translate(50, 250); rotate(t); fill(lerpColor(color(55, 205, 205), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(50, 200, 50), w, amt1)); square(100, 200, 100);
  push(); translate(150, 250); rotate(-t); fill(lerpColor(color(205, 55, 205), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();
  
  fill(lerpColor(color(50, 50, 200), w, amt1)); square(200, 200, 100);
  push(); translate(250, 250); rotate(t); fill(lerpColor(color(205, 205, 55), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(255, 100, 0), w, amt1)); square(300, 200, 100);
  push(); translate(350, 250); rotate(-t); fill(lerpColor(color(0, 155, 255), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();
  
  fill(lerpColor(color(100, 255, 100), w, amt1)); square(400, 200, 100);
  push(); translate(450, 250); rotate(t); fill(lerpColor(color(155, 0, 155), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(50, 100, 150), w, amt1)); square(500, 200, 100);
  push(); translate(550, 250); rotate(-t); fill(lerpColor(color(205, 155, 105), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();

  // ====== 4번째 줄 ======
  fill(lerpColor(color(55, 205, 205), w, amt1)); square(0, 300, 100);
  push(); translate(50, 350); rotate(t); fill(lerpColor(color(200, 50, 50), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(205, 55, 205), w, amt1)); square(100, 300, 100);
  push(); translate(150, 350); rotate(-t); fill(lerpColor(color(50, 200, 50), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();
  
  fill(lerpColor(color(205, 205, 55), w, amt1)); square(200, 300, 100);
  push(); translate(250, 350); rotate(t); fill(lerpColor(color(50, 50, 200), w, amt2)); arc(0, 0, s1, s1, 0, PI + HALF_PI, PIE); pop();
  
  fill(lerpColor(color(0, 155, 255), w, amt1)); square(300, 300, 100);
  push(); translate(350, 350); rotate(-t); fill(lerpColor(color(255, 100, 0), w, amt2)); arc(0, 0, s2, s2, HALF_PI, TWO_PI, PIE); pop();
  
  fill(lerpColor(color(155, 0, 155), w, amt1)); square(400, 300, 100);
  push(); translate(450, 350); rotate(t); fill(lerpColor(color(100, 255, 100), w, amt2)); arc(0, 0, s1, s1, PI, HALF_PI, PIE); pop();
  
  fill(lerpColor(color(205, 155, 105), w, amt1)); square(500, 300, 100);
  push(); translate(550, 350); rotate(-t); fill(lerpColor(color(50, 100, 150), w, amt2)); arc(0, 0, s2, s2, PI + HALF_PI, PI, PIE); pop();

  // ====== 세 가닥 선 ======
  stroke(0);

  // 첫 번째 선
  push();
  translate(233.5, 188.5);
  rotate(sin(t * 2) * (PI / 4)); 
  line(-223.5, -165.5, 223.5, 165.5);
  pop();

  // 두 번째 선
  push();
  translate(216, 242.5);
  rotate(-sin(t * 2) * (PI / 4)); 
  line(-159, 110.5, 159, -110.5);
  pop();

  // 세 번째 선
  push();
  translate(273.5, 172.5);
  rotate(cos(t * 2) * (PI / 4)); 
  line(-238.5, 116.5, 238.5, -116.5);
  pop();
}