const tg = window.Telegram.WebApp;
tg.expand();

// button click handling
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    // send data to aiogram bot
    tg.sendData(action);

    // click animation
    btn.style.boxShadow = "0 0 25px #ff00ff";

    setTimeout(() => {btn.style.boxShadow = "";}, 200);

    });
});
