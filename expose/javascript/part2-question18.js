function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// Call printCurrentTime every second (1000 milliseconds)
setInterval(printCurrentTime, 1000);
