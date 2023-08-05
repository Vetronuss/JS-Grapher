var inp
var detail = 0.5;
var cb
var cx = 0;
var cy = 0;
var zoom = 1;
//user settings:


var line_color;


function setup() {
  createCanvas(windowWidth,windowHeight);
  line_color = color('crimson')
  cb = createCheckbox()
  cb.position(0,20)

	inp = createElement("textarea");
	inp.position(20, 50)
	inp.size(width / 4, height / 5)
	inp.autoCorrect = "disabled"
	inp.id("txt")
	inp.style('background-color', '#292a3d');
	inp.style('border-width', '100')
	inp.style('color', color(255))
	inp.style('border-color', color(0))
	inp.value("y=x;");
	document.getElementById("txt").spellcheck = false;
	line_color = color('crimson')
	
}

var x = 0;
var y = 0;

function graph(s)
{
	//y = 0;
  push()
  
  //clean function
  while (s.indexOf("xx")!=-1)
  {
    var a = s.indexOf("xx");
    s = s.substring(0,a)+"x*x"+s.substring(a+2)
    //console.log(s);
  }
  
  stroke('crimson');
	stroke(line_color);
  strokeWeight(0.3)
  scale(14,-14)
  noFill();
  beginShape()
  var l = 0;
  
  for (var x = -width/2; x < width/2; x+=detail/4)
  {
    try
    {
      eval(s)
    }catch(a)
    {
      pop()
      return str(a);
      
    }
    l++;
    if (l > width*10)
    {
      pop()
      return " ";
    }
    if (cb.checked()){
    curveVertex(x,float(y))
    }else
    {
      vertex(x,float(y))
    }
  }
  endShape()
  scale(1,-1)
  pop()
  return " ";
}

function draw() {
  background(0);

	
	push()
	
  translate(width/2,height/2)
  scale(1*zoom,-1*zoom)
  stroke(255)
	translate(cx,cy)
	scale(1*zoom,-1*zoom)
	//physical graph
	
  line(-width,0,width,0)
  line(0,-height,0,height)
	var ko = 0;
	for (var i = 0; i < width/2*zoom; i+=10*1.4 )
	{
		var he = 14*0.5

		if (ko%5==0)
		{
			he*=1.4;
		}
		if (ko%10==0)
		{
			he*=1.4;
		}

		line(i,-he,i,he)
		line(-he,i,he,i)
		ko++;
	}
	ko = 0;
	for (var i = 0; i > -1*(width/2*zoom); i-=10*1.4 )
	{
		var he = 14*0.5;
		if (ko%5==0)
		{
			he*=1.4;
		}
		if (ko%10==0)
		{
			he*=1.4;
		}
		
		line(i,-he,i,he)
		line(-he,i,he,i)
		ko++;
	}
	
  //
  
  var a2 =graph(inp.value())
  scale(1)
  fill(255)
  noStroke();
  text(a2,-width/2,height/2-30)
  //scale(1,-1)
	document.getElementById("txt").focus();
	if (keyIsDown(9)) {
		
		console.log("Ge")

	}

	if (mouseIsPressed && mouseButton == LEFT && (!collidePointRect(mouseX,mouseY,inp.position().x,inp.position().y,inp.size().width,inp.size().height)))
	{
		cx -= pmouseX-mouseX
		cy += pmouseY-mouseY
	}
	pop();
	//menu stuff
	fill('#292a3d');
	rect(0,0,width,50)
	//
	
}
function keyPressed() {
	//handle tabs
	if (keyCode === 9) {
		document.getElementById("txt").focus();
		keyCode = NaN;
		console.log("test")
		insertT(document.getElementById("txt"), "     ");
	}

	// return false;
}

function mouseWheel(event) {
  
  //move the square according to the vertical scroll amount
  zoom += event.delta*-1/1000;
	zoom = constrain(zoom,0,12023)
  //uncomment to block page scrolling
  //return false;
}