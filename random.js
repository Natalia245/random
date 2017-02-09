var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
makeImage("https://i.ytimg.com/vi/ycNZNMwmWCQ/maxresdefault.jpg",0, 0, 200, 120, 1);
makeCircle(140,20,20,"grey");
makeCircle(100,40,30, "grey");
makeCircle(60,20,20,"grey");
makeRect(110, 30, 10, 10, "white", 0.8);
makeRect(80,30,10,10,"white",0.8);
makeText("____", 75, 50, 20, "Indie Flower", "white", 1.0);
    makeText("''", 80, 45, 20, "Indie Flower", "black", 1.0)
    makeText("''", 110, 45, 20, "Indie Flower", "black", 1.0)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,200,200,"#E7A977",1.0);
makeCircle(100,40,30,"#93490C");
makeEllipse(120,50,5,5,"#542601", 1.0);
makeEllipse(90,30,5,5,"#542601", 1.0);
    makeEllipse(90,60,2,2,"#542601", 1.0);
    makeEllipse(110,40,2,2,"#542601", 1.0);
    makeEllipse(120,20,2,2,"#542601", 1.0);
    makeEllipse(84,50,3,3,"#542601", 1.0);
    makeCircle(30,20,10,"white");
    makeCircle(30,99,10,"white");
  makeCircle(140,10,10,"white");
      makeCircle(160,78,10,"white");
      makeCircle(38,48,5,"white");
      makeCircle(70,95,5,"white");
      makeCircle(170,37,6,"white");
makeText("Cookie? <3", 130, 100, 15, "Indie Flower", "white", 1.0);
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeCircle(0,0,250,"black",1.0);
makeRect(10,90,50,20,"yellow",1.0);
makeRect(15,80,40,20,"yellow",1.0);
makeRect(20,70,30,20,"yellow",1.0);
makeRect(25,60,20,20,"yellow",1.0);
    makeRect(30,50,10,20,"yellow",1.0);
makeRect(90, 90,50,20,"yellow",1.0);
makeRect(95, 80,40,20,"yellow",1.0);
makeRect(100, 70,30,20,"yellow",1.0);
makeRect(105, 60,20,20,"yellow",1.0);
    makeRect(110, 50,10,20,"yellow",1.0);
makeRect(45,35,60,15,"yellow",1.0);
makeRect(50,25,50,15,"yellow",1.0);
makeRect(55,15,40,15,"yellow",1.0);
makeRect(60,5,30,15,"yellow",1.0);
makeRect(65,0,20,15,"yellow",1.0);
    makeText("Hey! Listen!", 130, 100, 15, "Indie Flower", "white", 1.0);
   
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if (number < 0.33){
    createFirstScene()
    } else if (number < 0.67) {
    // Else, if the number is less than 0.67, call the function to create your second scene.
    createSecondScene()
    } else {
    
    // Else, call the function to create your third scene.
    createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}