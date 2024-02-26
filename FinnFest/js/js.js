function countDown() {
    //date counting down to
var countDownDate = new Date("July 26, 2023").getTime();

//update count down every day
var x = setInterval(function(){

    //get todays date
    var now = new Date().getTime();

    //find the distance between now and the count down date
    var distance = countDownDate - now;

    //time calc for days
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    //display the result in the element with id="counter"
    document.getElementById("counter").innerHTML = days;

    //if the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "The event is now!";
    }
}, 1000);
}

/*document.addEventListener('DOMContentLoaded', function () {
    //call functions here
    countDown();

  }, false);*/

$(document).ready(function(){
    countDown();
});