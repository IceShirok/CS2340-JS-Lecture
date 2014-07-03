var numClicks = 0;
var startWidth = 0;
var startHeight = 0;
var squareSize = 100;
var offset = squareSize/2;
$(document).ready(function() {
    randomize();
});

function randomize() {
    startWidth = Math.floor((Math.random() * $(window).width()) + 1);
    startHeight = Math.floor((Math.random() * $(window).height()) + 1);
    $("#message").text("Find the hidden block!");
    // document.getElementById("message").innerText = tellIfClose("Find the hidden block!");
}

function tellIfClose(x, y) {
    var xDis = x-startWidth-offset;
    var yDis = y-startHeight-offset;
    var isClose = Math.sqrt(xDis*xDis + yDis*yDis);
    
    $("#test").text(x + " " + y);
    if (isClose > 550) {
        return "Cold!";
    } else if (isClose > 200) {
        return "Lukewarm...";
    } else if (isClose > 50) {
        return "Warmer.";
    } else if (isClose > 25) {
        return "Oof, hot as Atlanta hot.";
    } else {
        return "Burning!";
    }
}

$(document).on("mousemove", function(event) {
    $("#howClose").text(tellIfClose(event.pageX, event.pageY));
});

$(document).on("click", function(event) {
    if(event.pageX>startWidth && event.pageX<startWidth+squareSize
            && event.pageY>startHeight && event.pageY<startHeight+squareSize) {
        $("#message").text("Congratulations! You've found the hidden block!");
    }
});
