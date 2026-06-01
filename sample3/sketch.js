let x = 0; // 캐릭터 좌우 위치
let speed = 3; // 이동 속도
let r = 200, g = 230, b = 255; // 배경색 (R, G, B)
let eyeSize = 8; // 눈 크기

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r, g, b);
  
  // 배경색 녹화용 사각형
  noStroke();
  fill(r, g, b);
  rect(0, 0, 600, 400);

  // 'c' 누르면 배경 랜덤 + 눈 커짐
  if (keyIsPressed && key === 'c') {
    r = random(255);
    g = random(255);
    b = random(255);
    eyeSize = 25;
  } else {
    eyeSize = 8;
  }

  // 마우스 누르면 좌우 이동
  if (mouseIsPressed) {
    x = x + speed;
    if (x > 100 || x < -100) speed *= -1;
  }

  //캐릭터
  noStroke(); 
  fill(100, 200, 200);
  rect(150 + x, 300, 300, 150, 50); // 옷

  fill(150); 
  ellipse(300 + x, 300, 160, 80); // 후드

  fill(255, 224, 189); 
  rect(280 + x, 270, 40, 40); // 목
  ellipse(300 + x, 180, 180, 220); // 얼굴

  noStroke();
  fill(255, 182, 193, 150);
  ellipse(230 + x, 210, 40, 40); // 홍조 좌
  ellipse(370 + x, 210, 40, 40); // 홍조 우

  fill(40); 
  arc(300 + x, 170, 190, 200, PI, TWO_PI); // 머리
  ellipse(250 + x, 110, 100, 60); // 머리카락 좌
  ellipse(350 + x, 110, 100, 60); // 머리카락 우

  stroke(0);
  strokeWeight(5);
  noFill();
  rect(225 + x, 170, 60, 45, 15); // 안경 좌
  rect(315 + x, 170, 60, 45, 15); // 안경 우
  line(285 + x, 185, 315 + x, 185); // 안경 다리

  fill(0);
  noStroke();
  ellipse(255 + x, 190, eyeSize, eyeSize); // 눈 좌
  ellipse(345 + x, 190, eyeSize, eyeSize); // 눈 우

  stroke(180, 130, 100);
  strokeWeight(3);
  noFill();
  if (keyIsPressed) {
    ellipse(300 + x, 250, 30, 30); // 누르면 입 벌림
  } else {
    arc(300 + x, 250, 60, 30, 0, PI); // 평소 입
  }

  // 마우스 누르면 손 등장
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(2);
    fill(255, 224, 189);
    ellipse(440 + x, 320, 60, 70); // 주먹

    push();
    translate(440 + x, 320);
    push();
    rotate(radians(-15));
    rect(-11, -80, 22, 85, 10); // 검지
    pop();
    push();
    rotate(radians(15));
    rect(-11, -80, 22, 85, 10); // 중지
    pop();
    pop();
  }
}

c