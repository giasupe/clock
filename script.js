function dayRaito(now) {
    var result = parseInt((now.getHours() * 60 + now.getMinutes()) / (24 * 60) * 100);

    var bar = "";
    for (var i = 0; i < result; i++) {
        bar = bar + "|";
    }
    while (bar.length < 100) {
        bar = bar + ".";
    }

    var hourglass = document.getElementById("hourglass");
    if (hourglass) {
        hourglass.textContent = `[${bar}]`;
    }
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("Clock").textContent = `${hours}:${minutes}:${seconds}`;
    dayRaito(now);
}

updateClock();
setInterval(updateClock, 1000);