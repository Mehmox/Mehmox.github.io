
function AbiltyCD() {
    if (ShieldCD > 0) {
        ShieldCD--;
        document.getElementById("Cool-down-counter").innerHTML = ShieldCD;
    }
    else if ((MarketItemList[3].Level * 4) > 29) {
        document.getElementById("Cool-down-counter").innerHTML = "Infinity";
        AbiltyUse()
    }
    else document.getElementById("Cool-down-counter").innerHTML = "Ready";
}

function AbiltyUse() {
    if (ShieldCD === 0) {
        Spike = false;
        for (let i = 0; i < 10; i++) {
            document.getElementById("Spike" + (i + 1)).style.opacity = "40%";
        }
    }
    setTimeout(function () {
        if ((MarketItemList[3].Level * 4) > 29) ShieldCD = 0;
        else {
            Spike = true;
            ShieldCD = 29 - MarketItemList[3].Level * 4;
            for (let i = 0; i < 10; i++) {
                document.getElementById("Spike" + (i + 1)).style.opacity = "100%";
            }
            document.getElementById("Shield").style.opacity = "40%";
        }
    }, 3000 + MarketItemList[5].Level * 1000)
}