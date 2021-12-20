var mouseEvent = "";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var widthof_line = 5;
var radius = 20;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  widthof_line = document.getElementById("width_of_line").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
  mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
  mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  var current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
  var current_position_of_mouse_y=e.clientY-canvas.offsetTop;
  if(mouseEvent=="mouseDown"){
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthof_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0, 2*Math.PI);
    ctx.stroke();
  }
}