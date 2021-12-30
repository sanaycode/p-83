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
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
    {
        console.log("my touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offseTop;
    }
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
  {
        console.log("You are in touch mode function");

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
         
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

          
        
    }
    function clearcanvas(){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      document.getElementById("radius").innerHTML="";
      document.getElementById("color").innerHTML="";
      document.getElementById("width_of_line").innerHTML="";
  }

