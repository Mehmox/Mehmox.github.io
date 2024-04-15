window.onload = Start;
document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener('mousedown', () => window.getSelection().removeAllRanges());
});
function Start() {
    Spikecord();
    Update();// Sets positions when window load
    Gameloopid = setInterval(Game, fps)// THE GAME LOOP
    setInterval(AbiltyCD, 1000)
    frame();// Sets fps
    PlayerinputDown();// Geting Player Input
    PlayerinputUp();// Geting Player Input
}
// THE GAME LOOP
function Game() {
    Collections();// Opens collection menu
    contactControl();// Checks Contact on any objects
    Update();// Main update loop
}
function contactControl() {// Checks Contact on any objects
    let RNG = parseInt(Math.random() * 200);
    if (RNG !== 25) RNG = 1;
    if (PlayerY <= CoinY && CoinY <= PlayerY + PlayerHeight || CoinY <= PlayerY && PlayerY <= CoinY + CoinHeight) {
        if (PlayerX <= CoinX && CoinX <= PlayerX + PlayerWidth || CoinX <= PlayerX && PlayerX <= CoinX + CoinWidth) {
            if (!ERAYMODU) Money += 10 + Fortune * RNG;
            else Money -= 50 + Fortune;
            TotalCollect++;
            if (Soundopen) {
                if (!ERAYMODU) CoinPickup();
                else MoneyLose();
            }
            Coincord();
            Spikecord();
        }
    }
    if (Spike === true) {
        for (let i = 0; i < 10; i++) {
            if (PlayerY <= SpikeY[i] && SpikeY[i] <= PlayerY + PlayerHeight - 15 || SpikeY[i] <= PlayerY && PlayerY <= SpikeY[i] + SpikeHeight - 15) {
                if (PlayerX <= SpikeX[i] && SpikeX[i] <= PlayerX + PlayerWidth - 15 || SpikeX[i] <= PlayerX && PlayerX <= SpikeX[i] + SpikeWidth - 15) {
                    if (!ERAYMODU) Money -= 50 + Fortune;
                    else Money += 10 + Fortune * RNG;
                    if (Soundopen) {
                        if (!ERAYMODU) MoneyLose();
                        else CoinPickup();
                    }
                    Coincord();
                    Spikecord();
                }
            }
        }
    }

}
// Infinite loop
function Update() {
    //Objects
    if (PlayerY < 919 - MomentSpeed - PlayerHeight && Up == true) { PlayerY += MomentSpeed * fpsmultiplier; }
    if (PlayerY > 0 + MomentSpeed && Down == true) { PlayerY -= MomentSpeed * fpsmultiplier; }
    if (PlayerX < 919 - MomentSpeed - PlayerWidth && Right == true) { PlayerX += MomentSpeed * fpsmultiplier; }
    if (PlayerX > 0 + MomentSpeed && Left == true) { PlayerX -= MomentSpeed * fpsmultiplier; }
    if (Animationcap === 0) {
        if (AnimationRight === true && PlayerPov === 'R') {
            Animationcap = 1;
            document.getElementById("player").src = "animations/R.gif";
        }
        if (AnimationLeft === true && PlayerPov === 'L') {
            Animationcap = 1;
            document.getElementById("player").src = "animations/L.gif";
        }
    }
    if (Flip) {
        if (PlayerPov === 'R') document.getElementById("player").src = "animations/R.gif";
        if (PlayerPov === 'L') document.getElementById("player").src = "animations/L.gif";
        Flip = false;
    }
    document.getElementById("player").style.bottom = PlayerY + "px";
    document.getElementById("player").style.left = PlayerX + "px";
    document.getElementById("Coin").style.bottom = CoinY + "px";
    document.getElementById("Coin").style.left = CoinX + "px";
    for (let i = 0; i < 10; i++) {
        document.getElementById("Spike" + (i + 1)).style.bottom = SpikeY[i] + "px";
        document.getElementById("Spike" + (i + 1)).style.left = SpikeX[i] + "px";
    }
    //Objects end

    //Stat window
    document.getElementById("speed").innerHTML = "Speed: " + MomentSpeed;
    document.getElementById("fortune").innerHTML = "Fortune: " + "+" + Fortune;
    document.getElementById("reduction").innerHTML = "Reduction : " + "%" + Reduction;
    document.getElementById("pasiff").innerHTML = "Pasiff: " + Pasiff;
    //Stat window end

    //Market window
    if (MarketItemList[0].Level < 7 || ERAYMODU === true) document.getElementById("speedlvl").innerHTML = "LVL: " + MarketItemList[0].Level + "<br>" + "Cost: " + parseInt(MarketItemList[0].Cost / (1 + Reduction / 100));
    else if (ERAYMODU === false) document.getElementById("speedlvl").innerHTML = "LVL: " + MarketItemList[0].Level + "<br>" + "Max";
    if (MarketItemList[1].Level < 20 || ERAYMODU === true) document.getElementById("fortunelvl").innerHTML = "LVL: " + MarketItemList[1].Level + "<br>" + "Cost: " + parseInt(MarketItemList[1].Cost / (1 + Reduction / 100));
    else if (ERAYMODU === false) document.getElementById("fortunelvl").innerHTML = "LVL: " + MarketItemList[1].Level + "<br>" + "Max";
    if (MarketItemList[2].Level < 20 || ERAYMODU === true) document.getElementById("reductionlvl").innerHTML = "LVL: " + MarketItemList[2].Level + "<br>" + "Cost: " + parseInt(MarketItemList[2].Cost / (1 + Reduction / 100));
    else if (ERAYMODU === false) document.getElementById("reductionlvl").innerHTML = "LVL: " + MarketItemList[2].Level + "<br>" + "Max";
    if (MarketItemList[3].Level < 5 || ERAYMODU === true) document.getElementById("abiltylcooldownlvl").innerHTML = "LVL: " + MarketItemList[3].Level + "<br>" + "Cost: " + parseInt(MarketItemList[3].Cost / (1 + Reduction / 100));
    else if (ERAYMODU === false) document.getElementById("abiltylcooldownlvl").innerHTML = "LVL: " + MarketItemList[3].Level + "<br>" + "Max";
    if (MarketItemList[4].Level < 1) document.getElementById("pasifflvl").innerHTML = "Off" + "<br>" + "Cost: " + parseInt(MarketItemList[4].Cost / (1 + Reduction / 100));
    else document.getElementById("pasifflvl").innerHTML = "On" + "<br>" + "Max";
    if (MarketItemList[5].Level < 3 || ERAYMODU === true) document.getElementById("abiltylduractionlvl").innerHTML = "LVL: " + MarketItemList[5].Level + "<br>" + "Cost: " + parseInt(MarketItemList[5].Cost / (1 + Reduction / 100));
    else if (ERAYMODU === false) document.getElementById("abiltylduractionlvl").innerHTML = "LVL: " + MarketItemList[5].Level + "<br>" + "Max";
    //Market window end

    document.getElementById("Money").innerHTML = Money;

    //Localstorage

    localStorage.setItem("DATA_Speed_lvl", MarketItemList[0].Level)
    localStorage.setItem("DATA_Speed_cost", MarketItemList[0].Cost)


    localStorage.setItem("DATA_Fortune_lvl", MarketItemList[1].Level)
    localStorage.setItem("DATA_Fortune_cost", MarketItemList[1].Cost)


    localStorage.setItem("DATA_Reduction_lvl", MarketItemList[2].Level)
    localStorage.setItem("DATA_Reduction_cost", MarketItemList[2].Cost)


    localStorage.setItem("DATA_Shield_Cooldown_lvl", MarketItemList[3].Level)
    localStorage.setItem("DATA_Shield_Cooldown_cost", MarketItemList[3].Cost)

    localStorage.setItem("DATA_Pasiff_lvl", MarketItemList[4].Level)
    localStorage.setItem("DATA_Pasiff__cost", MarketItemList[4].Cost)

    localStorage.setItem("DATA_Shield_Duraction_lvl", MarketItemList[5].Level)
    localStorage.setItem("DATA_Shield_Duraction_cost", MarketItemList[5].Cost)

    localStorage.setItem("DATA_Money", Money)
    //Localstorage end

    if (ShieldCD === 0) {
        document.getElementById("Shield").style.opacity = "100%";
    }
}

//Pasiff perk
function PasiffCoin() {
    if (!ERAYMODU) Money += 10 + Fortune;
    else Money += (10 + Fortune) * 5;
}

// Sets fps
function frame() {
    fpsinput = parseInt(document.getElementById("fpsrange").value);
    fpsmultiplier = 18 / fpsinput;
    fps = parseInt(1000 / fpsinput);
    document.getElementById("Cfps").innerHTML = "FPS: " + fpsinput;
    clearInterval(Gameloopid)
    Gameloopid = setInterval(Game, fps)
}