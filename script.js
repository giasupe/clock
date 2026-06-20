var g_now;

function updateClock() {
    const now = new Date();
    g_now = now;
    const hours = String(now.getHours()).padStart(2, `0`);
    const minutes = String(now.getMinutes()).padStart(2,`0`);
    const seconds = String(now.getSeconds()).padStart(2,`0`);
    document.getElementById('Clock').textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);

function dayRaito() {
    var Result = 0;
    Result = (g_now.getHours()*60 + g_now.getMinutes()) / (24*60) *100;
    Result = parseInt(Result)

    var bar = "";
    for(var i = 0; i < Result; i++) 
    {
        bar = bar + "|"
    }
    bar = bar.padEnd(100,`.`);

    document.getElementById(`hourglass`).textContent = `[${bar}]`;
}
dayRaito();
setInterval(dayRaito, 1000);