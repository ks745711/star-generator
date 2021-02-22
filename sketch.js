//star function from p5 examples 


function setup() {
  gui = new Gui();
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'show_introduction').onChange(introduction);
  gui_setup.add(gui, "points", 2, 150);
  gui_setup.add(gui, "inner_radius", 0, 500);
  gui_setup.add(gui, "outer_radius", 0, 500);
  gui_setup.add(gui, "star_outline", 0, 15);
  gui_setup.add(gui, "text");
  gui_setup.add(gui, "text_size", 1, 300);
  gui_setup.addColor(gui, "text_color");
  gui_setup.addColor(gui, "star_color");
  gui_setup.addColor(gui, "bg_color");
  

  intro = select('.div-block');
  intro.position(0, 0);


  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(gui.bg_color);
  fill(gui.star_color);
  stroke('white');
  strokeWeight(gui.star_outline);
  star(windowWidth / 2, windowHeight / 2, gui.inner_radius, gui.outer_radius, gui.points);


  fill(gui.text_color);
  noStroke();
  textSize(gui.text_size);
  textAlign(CENTER);
  textFont("Yusei Magic");
  text(gui.text, windowWidth / 2, windowHeight / 2 + gui.text_size / 2);



}

function Gui() {
  this.points = 64;
  this.star_outline = 4;
  this.inner_radius = 90;
  this.outer_radius = 265;
  this.star_color = "#f98B88";
  this.bg_color = "#ffE5B4";
  this.text_color = "#ffffff";
  this.text_size = 18;
  this.text = 'HELLO SUNSHINE';
  this.show_introduction = true;
}

function introduction() {
  if (gui.show_introduction) {
    intro.style('display', 'block');
    }
    else {
      intro.style('display', 'none');

      }
    }


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    saveCanvas('hello-sunshine.png', 'png');
    print("saved the image");
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}