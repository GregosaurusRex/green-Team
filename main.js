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