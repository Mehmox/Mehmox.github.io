//Eray Modu
function Eray() {
    if (ERAYMODU === false) {
        ERAYMODU = true;
        document.getElementById("mod").src = "img/Bayrak.png";
        document.getElementById("mod").style.opacity = 100;
        MomentSpeed = 8 + parseInt(MarketItemList[0].Level * 5),
            Fortune = 0 + MarketItemList[1].Level * 50;
        Reduction = 0 + MarketItemList[2].Level * 20;
    } else {
        ERAYMODU = false;
        document.getElementById("mod").src = "";
        document.getElementById("mod").style.opacity = 0;
        MomentSpeed = 8 + parseInt(MarketItemList[0].Level),
            Fortune = 0 + MarketItemList[1].Level * 10;
        Reduction = 0 + MarketItemList[2].Level * 4;
    }
}