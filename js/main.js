var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var background = new Image();
var me = new Image();
var title = new Image();

background.src = "img/ardor_full_background.png"
me.src = "img/main_guy.png";
title.src = "img/ardor_title.png";

canvas.width = 900;
canvas.height = 500;

var guy = new Vector(canvas.width/4, 260);
var bg = new Vector(0,0);
var speed = new Vector(10,0);
var accel = new Vector(0,0.001);
var jumpvel = new Vector(0,0);
var gravity = new Vector(0,1.5);

var isJumping = false;

var left = false;
var right = true;

var keysdown = {};

addEventListener("keydown", function (e) {
	keysdown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysdown[e.keyCode];
}, false);

$(document).ready(function(){
	setInterval(main, 30);
});

var main = function(){
	update();
	
	ctx.drawImage(background, bg.x, bg.y);
	ctx.drawImage(me, guy.x, guy.y);
}

var update = function(){
	clear();
	
	//checks if player is jumping, they can't jump midair
	if(isJumping){
		//start movement
		guy.add(jumpvel);
		//lessen the jumping velocity, add gravity
		jumpvel.add(gravity);
		//if player is on ground, zero the jumping velocity, end feedback loop
		if(guy.y >= 260){
			guy.y = 260;
			jumpvel.y = 0;
			isJumping = false;
		}
	}
	
	if(37 in keysdown){
		if(bg.x + speed.x > 0 && guy.x - speed.x < 250){
			return;
		}
		if(guy.x - speed.x < 150){
			bg.add(speed);
		}
		else{
			guy.sub(speed);
		}
	}
	if(38 in keysdown){
		jump();
	}
	if(39 in keysdown){
		if(bg.x - speed.x < -2700 && guy.x + speed.x > 450){
			return;
		}
		if(guy.x + speed.x > 650){
			bg.sub(speed);
		}
		else{
			guy.add(speed);
		}
	}
}

var jump = function(){
	/*
	checks to see if character is on ground
	if they are, set the jumping velocity
	DONT START MOVEMENT, just set velocity
	sets isJumping to true
	thus begins the feedback loop
	*/
	if(isJumping == false){
		jumpvel.y = -13;
		isJumping = true;
	}
}

var clear = function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
}
