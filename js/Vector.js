var Vector = function(x,y){
	
	this.x = x;
	this.y = y;
	this.add = function(Vector){
		this.x += Vector.x;
		this.y += Vector.y;
	}
	this.sub = function(Vector){
		this.x -= Vector.x;
		this.y -= Vector.y;
	}
	this.mult = function(Vector){
		this.x *= Vector.x;
		this.y *= Vector.y;
	}
	this.mult = function(num){
		this.x *= num;
		this.y *= num;
	}
}