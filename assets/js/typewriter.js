var i = 0;
var txt = 'Razubi'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("nameAnim").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}