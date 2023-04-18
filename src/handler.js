let clicks = 0;

const button = document.getElementById('click-Btn');
const start_button = document.getElementById('start-Btn');
const text = document.getElementById('text');
let counting = false;

button.disabled = true;

start_button.addEventListener("click", () => {
    start_handler()
});

function start_handler() {
    console.log('Started counting');
    clicks = 0;
    start_button.disabled = true;
    counting = true;
    click_handler();
    setTimeout(function() {
        start_button.disabled = false;
    //    button.disabled = true;
        let cps = clicks / 10
        alert(`Clicks: ${clicks}, CPS: ${cps}`)
        counting = false;
        clicks = 0;
        button.textContent = "Clicks:" + clicks;
    }, 10000);
}

function click_handler() {
    button.disabled = false;
    button.addEventListener("click", () => {
        clicks++;
        console.log("Clicked")
        button.textContent = "Clicks:" + clicks;
    });
    if(counting == false) {
        button.disabled = true;
        return
    }
}
