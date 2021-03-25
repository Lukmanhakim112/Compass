window.onload = generateTime();
function generateTime(){
    var format_12hour = false;

    var d = new Date();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = d.getHours();
    var second = d.getSeconds();
    var ampm = '';

    if (format_12hour) {
        ampm = hh >= 12 ? ' pm' : ' am';
        hh = hh % 12;
        hh = hh ? hh : 12; //show mod 0 as 12
    }

    if (second % 2 == 0) {
        document.getElementById("displayClock").innerHTML = hh + " " + min;
    } else {
        document.getElementById("displayClock").innerHTML = hh + ":" + min;
    }


	setInterval(generateTime, 1000);
}
