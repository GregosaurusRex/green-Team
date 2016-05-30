var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

	if(deltaTime > 1)
		deltaTime = 1;

	return deltaTime;
}



var Player = function() {
    this.image = document.createElement("img");
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 60;
    this.height = 135;
    this.velocityX = 0;
    this.velocityY = 0;
    this.angularVelocity = 0;
    this.rotation = 0;
    
    this.image.src = "Bob.png";
    
};


Player.prototype.update = function(deltaTime)
{
    if( typeof(this.rotation) == "undefined" )
        this.rotation = 0;
       
    if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
    {
        this.rotation -= deltaTime;
    }
    else
    {
        this.rotation += deltaTime;
    }
}

Player.prototype.draw = function()
{
    context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.drawImage(this.image, -this.width/2, -this.height/2);
     context.restore();
}