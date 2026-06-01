function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(200, 230, 255);

  noStroke(); //옷
  fill(100, 200, 200);
  rect(150, 300, 300, 150, 50);

  fill(150); //후드
  ellipse(300, 300, 160, 80);

  fill(255, 224, 189); //피부색
  rect(280, 270, 40, 40); //얼굴
  ellipse(300, 180, 180, 220); //목

  noStroke();
  fill(255, 182, 193, 150); // 홍조색
  ellipse(230, 210, 40, 40); // 좌
  ellipse(370, 210, 40, 40); // 우

  fill(40);
  arc(300, 170, 190, 200, PI, TWO_PI); //정수리
  ellipse(250, 110, 100, 60); //좌
  ellipse(350, 110, 100, 60); //우

  stroke(0);
  strokeWeight(5); //안경
  noFill();
  rect(225, 170, 60, 45, 15); //좌
  rect(315, 170, 60, 45, 15); //우
  line(285, 185, 315, 185); //코받침

  fill(0); //눈
  noStroke();
  ellipse(255, 190, 8, 8); //좌
  ellipse(345, 190, 8, 8); //우

  stroke(40); //눈썹
  strokeWeight(5);
  line(240, 180, 270, 180); // 왼쪽
  line(330, 180, 360, 180); // 오른쪽
  
  stroke(180, 130, 100); //인중
  strokeWeight(2);
  noFill();
  arc(300, 215, 20, 10, 0, PI);

  stroke(180, 130, 100); //입술
  strokeWeight(3);
  arc(300, 250, 60, 30, 0, PI);

  stroke(0);
  strokeWeight(2);
  fill(255, 224, 189);
  
  ellipse(440, 380, 60, 70);

  push();
  rotate(radians(-15));
  rect(310, 385, 22, 85, 10);
  pop();

  push();
  rotate(radians(15));
  rect(520, 160, 22, 85, 10);
  pop();
}