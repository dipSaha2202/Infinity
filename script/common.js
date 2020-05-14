function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    //console.log(h + " " + m + " " + s);

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
}