console.log("hey there")

startTime();
var backgroundcolor = 0

function startTime() {
    var today= new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()

    m = checkTime(m)
    s=checkTime(s)
    $("#clock").html(h + ":" + m + ":" + s)
    setTimeout(startTime, 500)

}

function checkTime(number) {
    if (number<10){
        number = "0" + number
    }

    return number
}

function changeColor() {
   
    if (backgroundcolor % 2 === 0) {
        $("body").css("background-color", "black")
    } else {
        $("body").css("background-color", "pink")
    }

    backgroundcolor = backgroundcolor + 1

  
}


function startBomb() {
    var bombSeconds = 10
    tick(bombSeconds)
}

function tick(bombSeconds) {
    bombSeconds = bombSeconds -1
        setTimeout( function () {
            if (bombSeconds === 0) {
                $("#bomb").html("Boom!")
            } else {
                tick(bombSeconds)
                $("#bomb").html(bombSeconds)
            }
        }, 1000)
       
    }