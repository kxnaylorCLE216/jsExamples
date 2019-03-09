var interval = setInterval(printTime, 1000);

function printTime() {

    var date = new Date();
    var currTimeLable = document.getElementById("currTime");

    //var hour = date.getHours();
    //var mins = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    currTimeLable.innerHTML = " " + date.toLocaleTimeString();
    
}

