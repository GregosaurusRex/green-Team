
var player = new Player();
var keyboard = new Keyboard();

function run()
{
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    var deltaTime = getDeltaTime();
    
    player.update(deltaTime);
    player.draw();
    
    /*fpsTime += deltaTime;
    fpsCount++;
    if(fpsTime >= 1)
    {
        fpsTime -= 1;
        fps = fpsCount;
        fpsCount = 0;
    }
    
    context.fillStyle = "#f00";
    context.font = "14px Arial";
    context.fillText("FPS: " + fps, 5, 20, 100);*/
}



(function() {
    var onEachFrame;
    if(window.requestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
            _cb();
        };
    } else if (window.mozRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() { cb();
                window.mozRequestAnimationFrame(_cb); }
                _cb();
        };
    } else {
        onEachFrame = function(cb) {
            setInterval(cb, 1000 / 60);
        }
    }
    
    window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);