function draw() {
  background(255,255,255);
  hr = hour();
  mn = minute()
  sc = second()  
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)
    push()
     stroke(255,0,0)
     strokeWeight(7)
     line(0,0,100,0)
     translate()
     rotate(scAngle)
     rotate(mnAngle)
     rotate(hrAngle)
     rotate()
     pop()
  drawSprites();
}