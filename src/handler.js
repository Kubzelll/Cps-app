let clicks = 0;

const button = document.getElementById('click-Btn');
const start_button = document.getElementById('start-Btn');
const text = document.getElementById('text');
let counting = false;

button.disabled = true;
start_button.addEventListener("click", () => {
    start_handler()
});
function announcement(cps) {
    text.textContent = "You got " + cps + " cps, \n and " + clicks + " clicks.";
    setTimeout(function() {
        text.textContent = null
    }, 5000);
}
function clear_announcement() {
    text.textContent = null
}


function start_handler() {
    console.log('Started counting');
    button.disabled = false;
    clear_announcement()
    clicks = 0;
    start_button.disabled = true;
    setTimeout(function() {
        start_button.disabled = false;
        let cps = clicks / 10
        announcement(cps);
        alert(`Clicks: ${clicks}, CPS: ${cps}`)
        button.disabled = true;
        counting = false;
        clicks = 0;
        button.textContent = "Click start to count again";
    }, 10000);
}

function clicked() {
    clicks++;
    console.log("Clicked");
    button.textContent = "Clicks:" + clicks;
}

