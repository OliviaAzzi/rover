canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var canvas_image="mars.jpg";
var rover_image="rover.png";
var rover_x=10;
var rover_y=10;
function function1 () {
//coment:var new_image
new_image=new Image();
//coment: loading function which will draw image
new_image.onload=background;
//coment: load image
new_image.src=canvas_image;

//coment:var new_rover
new_rover=new Image();
//coment: loading function which will draw image
new_rover.onload=rover;
//coment: load image
new_rover.src=rover_image;
}
function background () {
    ctx.drawImage(new_image,0,0,canvas.width,canvas.height);
}
function rover() {
    ctx.drawImage(new_rover,rover_x,rover_y,rover_width,rover_height);
}
canvas.addEventListener("keydown",function2);
function function2(e) {
 ascii=e.keyCode;
if(ascii=="38"){
    console.log("up key is pressed");
    function_up();
}
if(ascii=="40"){
console.log("down key is pressed");
function_down();
}
if(ascii=="37"){
    console.log("left key is pressed");
    function_left();
}
if(ascii=="39"){
    console.log("right key is pressed");
    function_right();
}
}
function function_up(){
    if(rover_y>=0){
      rover_y=rover_y-10;
      background();
      rover();  
    }
}
function function_down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        background();
        rover(); 
    }
}
function function_left(){
if(rover_x>=0){
rover_x=rover_x-10;
background();
rover();
}
}
function function_right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        background();
        rover();
    }
}